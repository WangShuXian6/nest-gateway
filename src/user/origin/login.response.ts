export enum OriginStatus {
  Success = 'SUCC',
  Fail = 'FAIL',
}

export interface OriginLoginResponse {
  status: OriginStatus;
  msg: string;
  ticket: string;
}
