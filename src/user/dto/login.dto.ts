import { IsInt, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  loginname: string;

  @IsString()
  password: string;

  @IsString()
  service: string;
}
