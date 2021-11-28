import { IsString, IsEmail, Length } from "class-validator";

class RegisterUserDTO {
  @IsEmail()
  public email: string;

  @IsString()
  @Length(8, 20)
  public password: string;

  @IsString()
  @Length(8, 50)
  public lastName: string;

  @IsString()
  @Length(8, 50)
  public firstName: string;
}

export default RegisterUserDTO;
