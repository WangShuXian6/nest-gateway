import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PdModule } from './pd/pd.module';

@Module({
  imports: [HttpModule, PdModule],
})
export class IfrsModule {}
