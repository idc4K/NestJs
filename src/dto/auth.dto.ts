import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto{
    
    @IsString()
    firstName : string;

    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    password : string;

}

export class LoginDto{

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password : string
}