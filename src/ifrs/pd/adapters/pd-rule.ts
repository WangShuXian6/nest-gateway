import { OriginPdRule } from '../origin/pd-rule.response';
import moment from 'moment';

export const pdRuleAdapter = (pd: OriginPdRule) => {
  const { id, maxOverdueDaysType, riskType, pdValue, gmtCreate, gmtModify } =
    pd;
  return {
    id,
    maxOverdueDaysType,
    riskType,
    value: pdValue,
    createdAt: moment(gmtCreate).valueOf(),
    updatedAt: moment(gmtModify).valueOf(),
  };
};
