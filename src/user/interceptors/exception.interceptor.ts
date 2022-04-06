import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        console.log('ErrorsInterceptor err:', err);
        return throwError(
          () => new Error(err),
          //() => new HttpException('New message', HttpStatus.BAD_GATEWAY),
          //() => new HttpException(err, HttpStatus.FORBIDDEN),
        );
      }),
    );
  }
}
