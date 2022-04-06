import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginResponse } from '../interfaces/login.interface';
import { OriginLoginResponse, OriginStatus } from '../origin/login.response';

@Injectable()
export class TransformInterceptor
  implements NestInterceptor<AxiosResponse<OriginLoginResponse>, LoginResponse>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<AxiosResponse<OriginLoginResponse>>,
  ): Observable<LoginResponse> {
    console.log('TransformInterceptor before:');

    return next.handle().pipe(
      map(({ data }) => {
        const { status, msg, ticket } = data;
        console.log('TransformInterceptor after data:', data);
        if (status === OriginStatus.Fail) throw new Error(msg);
        return { ticket };
      }),
    );
  }
}
