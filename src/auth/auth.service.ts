import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'
import { Prisma } from "@prisma/client";

@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService){}

    async singUp(dto: AuthDto){
        //Genrate hash password
        const hash = await argon.hash(dto.password)
        //Save new user in db
        try{
            const user = await this.prisma.user.create({
                data:{
                        firstName:dto.firstName,
                        email:dto.email,
                        hash,
                },
                select:{
                    id : true,
                    firstName : true,
                    email:true,
                    createdAt:true
                }
                // delete user.hash;
                })
        
                //Return the save user
                return user;
        }
        catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
              if (e.code === 'P2002') {
                 throw new ForbiddenException(
                    'Credentials taken',
                );
              }
            }
            throw e
    }
}
    login(){
        return "I'm singnin in service";
    }
}