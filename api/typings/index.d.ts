import 'egg';

interface IHttpGetParams {
  url: string,
  data: any,
  success: (data: any) => void,
  fail: (error: any) => void
}

declare module 'egg' {
  IHttpGetParams
}