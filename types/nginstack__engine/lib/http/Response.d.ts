export = Response;
declare function Response(): void;
declare class Response {
    contentType: string;
    contentDescription: string;
    contentDisposition: string;
    contentEncoding: string;
    transferEncoding: string;
    statusCode: number;
    cacheControl: string;
    expires: Date;
    write(content: string): void;
    writeln(content: string): void;
    setCookie(name: string, value: string): void;
    setHeader(name: any, value: any): void;
    getAllHeaders(): any;
    stop(): void;
    redirect(uri: string, opt_permanently?: boolean): void;
    stopAndRedirect(uri: string, opt_permanently?: boolean): void;
    send(): void;
}
