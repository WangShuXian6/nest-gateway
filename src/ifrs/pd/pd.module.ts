import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from './interceptors/exception.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { PdController } from './pd.controller';
import { PdService } from './pd.service';

@Module({
  imports: [HttpModule],
  controllers: [PdController],
  providers: [
    PdService,
    //{ provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    //{ provide: APP_INTERCEPTOR, useClass: ErrorsInterceptor },
  ],
})
export class PdModule {}
