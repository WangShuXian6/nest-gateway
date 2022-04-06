import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

import { LoginParams, LoginResponse } from './interfaces/login.interface';
console.log(map);

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  login(
    @Request() @Body() body: LoginParams,
  ): Observable<AxiosResponse<LoginResponse>> {
    const { username, password, service } = body;
    console.table(body);
    return this.httpService.post(
      'http://172.16.131.96:32368/mock/27/ucenter/login2Third',
      {
        loginname: username,
        password,
        service,
      },
    );
  }
}
