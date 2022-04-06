import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { QueryPdRuleDto } from './dto/query-pd-rule.dto';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { PdService } from './pd.service';

@Controller('ifrs/pd')
@UseInterceptors(TransformInterceptor)
export class PdController {
  constructor(private readonly pdService: PdService) {}

  @Get()
  async findAll(@Query() queryPdRuleDto: QueryPdRuleDto) {
    return this.pdService.findAll(queryPdRuleDto);
  }
}
