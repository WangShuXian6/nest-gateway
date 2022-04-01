import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [HttpModule, UserModule],
})
export class AppModule {}
