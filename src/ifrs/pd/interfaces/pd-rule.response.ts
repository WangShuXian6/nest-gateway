import { PaginationResponse } from '../../../common/interfaces/pagination.interface';
import { PdRule } from './pd-rule.interface';
import { ApiProperty } from '@nestjs/swagger';

export interface QueryPdRuleParams {
  date: string;
}
export class QueryPdRuleResponse implements PaginationResponse {
  @ApiProperty()
  count?: number;

  @ApiProperty()
  pages?: number;

  @ApiProperty()
  edges: PdRule[];

  @ApiProperty()
  hasNextPage?: boolean;

  @ApiProperty()
  hasPreviousPage?: boolean;
}
