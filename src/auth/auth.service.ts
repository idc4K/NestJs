import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

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
        return user
      }
      catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === 'P2002'){
                throw new ForbiddenException('credentials taken')

            }
        }
        throw error
      }
     
    }
    login(){
        return "I'm singnin in service";
    }
}