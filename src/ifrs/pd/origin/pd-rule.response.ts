import { PaginationResponse } from '../../../common/interfaces/pagination.interface';
import { AssetResponse } from '../../common/responses/asset.interface';
export interface PdRuleParams {
  recordDate: string; //"20211001"
}

export enum RiskType {
  Yes = '1',
  No = '0',
}

export interface OriginPdRule {
  id: string;
  maxOverdueDaysType: string;
  riskType: RiskType;
  pdValue: number;
  gmtCreate: string;
  gmtModify: string;
}

export interface OriginPdRuleResult {
  pdList: OriginPdRule[];
  total: number;
}

export type OriginPdRuleResponse = AssetResponse<OriginPdRuleResult>;
