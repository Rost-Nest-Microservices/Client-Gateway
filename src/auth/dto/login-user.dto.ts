import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class LoginUserDto {

    @IsEmail()
    @IsString()
    email: string;

    @IsStrongPassword()
    @IsString()
    password: string;
}