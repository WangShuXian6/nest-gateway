import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Query,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

import { QueryPdRuleParams } from './interfaces/pd-rule.request';
import { QueryPdRuleResponse } from './interfaces/pd-rule.response';
import { OriginQueryPdRuleParams } from './origin/pd-rule.request';
console.log(map);

@Injectable()
export class PdService {
  constructor(private readonly httpService: HttpService) {}

  findAll(
    @Request() @Query() query: QueryPdRuleParams,
  ): Observable<AxiosResponse<QueryPdRuleResponse>> {
    const { date: recordDate } = query;
    console.table(query);
    return this.httpService.post(
      'http://172.16.131.96:32368/mock/31/cfc-engine-web/impacfg/WEB200001',
      {
        recordDate,
      },
    );
  }
}
