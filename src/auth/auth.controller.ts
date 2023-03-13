import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService : AuthService){}
    
    @Post('SignUp')
    signUp(){
        return "I'm signed up";
    }
    
    @Post('SignIn')
    signIn(){
        return "I'm singnin in";
    }
}