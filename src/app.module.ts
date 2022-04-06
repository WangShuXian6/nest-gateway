import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { IfrsModule } from './ifrs/ifrs.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    HttpModule,
    UserModule,
    IfrsModule,
    // RouterModule.register([
    //   {
    //     path: 'ifrs',
    //     module: IfrsModule,
    //   },
    // ]),
  ],
})
export class AppModule {}
