import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'

@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService){}

    async singUp(dto: AuthDto){
        //Genrate hash password
        const hash = await argon.hash(dto.password)
        //Save new user in db
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
    login(){
        return "I'm singnin in service";
    }
}