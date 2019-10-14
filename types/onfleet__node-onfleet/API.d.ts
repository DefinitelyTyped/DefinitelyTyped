export interface API {
  baseUrl: string;
  timeout: number;
  headers: {
    'Content-Type': string;
    'User-Agent': string;
    Authorization: string;
  };
}
