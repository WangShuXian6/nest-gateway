import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

import { LoginParams, LoginResponse } from './interfaces/login.interface';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  login(
    @Request() @Body() body: LoginParams,
  ): Observable<AxiosResponse<LoginResponse>> {
    const { loginname, password, service } = body;

    console.table(body);
    // return {
    //   ticket:'123'
    // }
    return this.httpService.post(
      'http://172.16.131.96:32369/mock/14/ucenter/login2Third',
      {
        loginname,
        password,
        service,
      },
    );
  }
}
