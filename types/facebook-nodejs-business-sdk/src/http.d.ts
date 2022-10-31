export default class Http {
    static request(method: string, url: string, data: Record<string, any>, files: Record<string, any>, useMultipartFormData: Boolean, showHeader: Boolean): Promise<any>;
    static xmlHttpRequest(method: any, url: any, data: any): Promise<any>;
    static requestPromise(method: string, url: string, data: Record<string, any>, files: Record<string, any>, useMultipartFormData?: Boolean, showHeader?: Boolean): Promise<any>;
}
