import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RetCode } from 'src/ifrs/common/responses/asset.interface';
import { QueryPdRuleResponse } from '../interfaces/pd-rule.response';
import { OriginPdRuleResponse } from '../origin/pd-rule.response';
import { pdRuleAdapter } from '../adapters/pd-rule';

@Injectable()
export class TransformInterceptor
  implements
    NestInterceptor<AxiosResponse<OriginPdRuleResponse>, QueryPdRuleResponse>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<AxiosResponse<OriginPdRuleResponse>>,
  ): Observable<QueryPdRuleResponse> {
    console.log('TransformInterceptor before:');

    return next.handle().pipe(
      map(({ data }) => {
        console.log('TransformInterceptor after data:', data);
        const { body } = data;
        const { retCode, retMsg, basicInfo } = body;
        const { pdList } = basicInfo;
        if (retCode === RetCode.ParamsError) throw new Error(retMsg);
        if (retCode === RetCode.ServiceError) throw new Error(retMsg);
        const edges = pdList.map(pdRuleAdapter);
        return {
          count: null,
          pages: null,
          edges: edges,
          hasNextPage: null,
          hasPreviousPage: null,
        };
      }),
    );
  }
}
