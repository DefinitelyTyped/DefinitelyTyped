export default class HttpServiceInterface {
    executeRequest(url: string, method: string, headers: Record<string, any>, params: Record<string, any>): Promise<Record<string, any>>;
}
