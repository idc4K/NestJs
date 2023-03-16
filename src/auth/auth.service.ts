import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService){}
    login(){
        return "I'm singnin in service";
    }

    singUp(){
        return "I'm singnin up service";
    }
}