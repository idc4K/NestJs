import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthDto } from "src/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService : AuthService){}
    
    @Post('SignUp')
    signUp(@Body() dto:AuthDto){
        // console.log({
        //     dto,
        // });
        console.log(dto)
        return this.authService.singUp(dto)
    }
    
    @Post('SignIn')
    signIn(){
        return this.authService.login()
    }
}