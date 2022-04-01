export interface LoginParams {
  loginname: string; //'test666';
  password: string; //'123456';
  service: string; //'';
}

export interface LoginResponse {
  ticket: string;
}
