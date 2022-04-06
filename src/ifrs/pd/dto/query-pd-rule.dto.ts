import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryPdRuleDto {
  @ApiProperty()
  @IsString()
  date: string;
}
