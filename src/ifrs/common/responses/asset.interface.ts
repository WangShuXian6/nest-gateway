export enum RetCode {
  Success = '0000', // 正常接收成功或处理完成 调用方收到后将不需要重试
  ParamsError = 'E1000', // 请求参数非法
  ServiceError = 'F1000',
}

export interface AssetRequestParams<T> {
  body: T;
}

export type AssetResponseBody<T> = {
  retCode: RetCode; // "0000";
  retMsg: string; // "请求成功";
  basicInfo: T;
};

export interface AssetResponse<T> {
  body: AssetResponseBody<T>;
}
