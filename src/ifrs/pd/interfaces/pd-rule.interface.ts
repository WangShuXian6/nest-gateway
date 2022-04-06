import { RiskType } from '../origin/pd-rule.response';

export interface PdRule {
  id: string;
  maxOverdueDaysType: string;
  riskType: RiskType;
  value: number;
  createdAt: number;
  updatedAt: number;
}
