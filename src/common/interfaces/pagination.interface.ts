export interface PaginationResponse {
  count?: number; //总共有多少条数据
  pages?: number; //总共有多少页
  edges: any[]; //分页列表
  hasNextPage?: boolean; //"是否有下一页"
  hasPreviousPage?: boolean; //"是否有上一页"
}
