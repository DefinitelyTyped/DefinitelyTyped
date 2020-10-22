declare namespace adone.net.http {
    namespace client {
        namespace I {
            interface RequestHeaders {
                "Accept"?: string;
                "Accept-Charset"?: string;
                "Accept-Encoding"?: string;
                "Accept-Language"?: string;
                "Accept-Datetime"?: string;
                "Access-Control-Request-Method"?: string;
                "Access-Control-Request-Headers"?: string;
                "Authorization"?: string;
                "Cache-Control"?: string;
                "Connection"?: string;
                "Cookie"?: string;
                "Content-Length"?: string;
                "Content-MD5"?: string;
                "Content-Type"?: string;
                "Date"?: string;
                "Expect"?: string;
                "Forwarded"?: string;
                "From"?: string;
                "Host"?: string;
                "If-Match"?: string;
                "If-Modified-Since"?: string;
                "If-None-Match"?: string;
                "If-Range"?: string;
                "If-Unmodified-Since"?: string;
                "Max-Forwards"?: string;
                "Origin"?: string;
                "Pragma"?: string;
                "Proxy-Authorization"?: string;
                "Range"?: string;
                "Referer"?: string;
                "TE"?: string;
                "User-Agent"?: string;
                "Upgrade"?: string;
                "Via"?: string;
                "Warning"?: string;
                "X-Requested-With"?: string;
                "DNT"?: string;
                "X-Forwarded-For"?: string;
                "X-Forwarded-Host"?: string;
                "X-Forwarded-Proto"?: string;
                "Front-End-Https"?: string;
                "X-Http-Method-Override"?: string;
                "X-ATT-DeviceId"?: string;
                "X-Wap-Profile"?: string;
                "Proxy-Connection"?: string;
                "X-UIDH"?: string;
                "X-Csrf-Token"?: string;
                "X-Request-ID"?: string;
                "X-Correlation-ID"?: string;

                [name: string]: string | undefined;
            }

            interface ResponseHeaders {
                "accept-patch": string | undefined;
                "accept-ranges": string | undefined;
                "access-control-allow-credentials": string | undefined;
                "access-control-allow-headers": string | undefined;
                "access-control-allow-methods": string | undefined;
                "access-control-allow-origin": string | undefined;
                "access-control-expose-headers": string | undefined;
                "access-control-max-age": string | undefined;
                "age": string | undefined;
                "allow": string | undefined;
                "alt-svc": string | undefined;
                "cache-control": string | undefined;
                "connection": string| undefined;
                "content-disposition": string | undefined;
                "content-encoding": string| undefined;
                "content-language": string | undefined;
                "content-length": string| undefined;
                "content-location": string| undefined;
                "content-md5": string| undefined;
                "content-range": string| undefined;
                "content-security-policy": string | undefined;
                "content-type": string| undefined;
                "date": string| undefined;
                "etag": string| undefined;
                "expires": string| undefined;
                "keep-alive": string | undefined;
                "last-modified": string | undefined;
                "link": string| undefined;
                "location": string| undefined;
                "p3p": string| undefined;
                "pragma": string| undefined;
                "proxy-authenticate": string | undefined;
                "public-key-pins": string| undefined;
                "referer-policy": string | undefined;
                "refresh": string | undefined;
                "retry-after": string | undefined;
                "server": string | undefined;
                "set-cookie": string | undefined;
                "status": string | undefined;
                "strict-transport-security": string| undefined;
                "timing-allow-origin": string | undefined;
                "tk": string| undefined;
                "transfer-encoding": string | undefined;
                "upgrade-insecure-requests": string | undefined;
                "upgrade": string| undefined;
                "vary": string | undefined;
                "via": string| undefined;
                "warning": string| undefined;
                "www-authenticate": string | undefined;
                "x-content-duration": string | undefined;
                "x-content-security-policy": string | undefined;
                "x-content-type-options": string | undefined;
                "x-correlation-id": string | undefined;
                "x-frame-options": string| undefined;
                "x-powered-by": string | undefined;
                "x-request-id": string | undefined;
                "x-ua-compatible": string | undefined;
                "x-webkit-csp": string | undefined;
                "x-xss-protection": string | undefined;

                [header: string]: string | undefined;
            }

            interface Response<T> {
                status: number;
                statusText: string;
                headers: ResponseHeaders;
                data: T;
            }

            type Transformer = (data: Data, headers: object, config: I.Options) => Data;

            interface FormValueOptions {
                header?: string | { [key: string]: string };
                knownLength?: number;
                filename?: string;
                filepath?: string;
                contentType?: string;
            }

            type FormValue = string | Buffer | nodestd.stream.Readable | {
                value: string | Buffer | nodestd.stream.Readable;
                options: FormValueOptions
            };

            interface UploadProgressEvent {
                lengthComputable: boolean;
                loaded: number;
                total: number;
            }

            interface ProxyObject {
                protocol?: string;
                host?: string;
                port?: number;
                auth?: {
                    username?: string;
                    password?: string;
                };
            }

            interface Config {
                adapter<T>(config: I.Config): Promise<Response<T>>;
                transformRequest: Transformer[];
                transformResponse: Transformer[];
                timeout: number;
                xsrfCookieName: string;
                xsrfHeaderName: string;
                maxContentLength: number;
                validateStatus: (status: number) => boolean;
                responseType: "buffer" | "string" | "stream" | "json";
                responseEncoding: adone.util.iconv.I.SupportedEncoding;
                method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
                headers: RequestHeaders;
                data: Data;
                formData: {
                    [formKey: string]: FormValue | FormValue[];
                };
                auth: {
                    username?: string;
                    password?: string;
                };
                httpsAgent: object;
                httpAgent: object;
                params: object;
                rejectUnauthorized: boolean;
                proxy: string | ProxyObject | false;
                transport: object;
                maxRedirects: number;
                cancelToken: CancelToken;
                onUploadProgress(event: UploadProgressEvent): void;
                baseURL: string;
                paramsSerializer(params: object): string;
            }

            type Options = Partial<Config>;

            type Data = string | Buffer | ArrayBuffer | nodestd.stream.Readable | ArrayBufferView | object | undefined;

            interface Request extends Client {
                (config: I.Options, ...args: any[]): Promise<object>;
            }
        }

        class Client {
            constructor(options?: I.Options);

            request(config: I.Options & { responseType: "json" }, ...args: any[]): Promise<I.Response<object | string>>;
            request(config: I.Options & { responseType: "string" }, ...args: any[]): Promise<I.Response<string>>;
            request(config: I.Options & { responseType: "buffer" }, ...args: any[]): Promise<I.Response<Buffer>>;
            request(config: I.Options & { responseType: "stream" }, ...args: any[]): Promise<I.Response<nodestd.stream.Readable>>;
            request(config: I.Options, ...args: any[]): Promise<I.Response<object | string>>;

            get(url: string, options: I.Options & { responseType: "string" }): Promise<I.Response<string>>;
            get(url: string, options: I.Options & { responseType: "buffer" }): Promise<I.Response<Buffer>>;
            get(url: string, options: I.Options & { responseType: "stream" }): Promise<I.Response<nodestd.stream.Readable>>;
            get(url: string, options?: I.Options): Promise<I.Response<object | string>>;

            post(url: string, data: I.Data, options: I.Options & { responseType: "string" }): Promise<I.Response<string>>;
            post(url: string, data: I.Data, options: I.Options & { responseType: "buffer" }): Promise<I.Response<Buffer>>;
            post(url: string, data: I.Data, options: I.Options & { responseType: "stream" }): Promise<I.Response<nodestd.stream.Readable>>;
            post(url: string, data?: I.Data, options?: I.Options): Promise<I.Response<object | string>>;

            put(url: string, data: I.Data, options: I.Options & { responseType: "string" }): Promise<I.Response<string>>;
            put(url: string, data: I.Data, options: I.Options & { responseType: "buffer" }): Promise<I.Response<Buffer>>;
            put(url: string, data: I.Data, options: I.Options & { responseType: "stream" }): Promise<I.Response<nodestd.stream.Readable>>;
            put(url: string, data?: I.Data, options?: I.Options): Promise<I.Response<object | string>>;

            patch(url: string, data: I.Data, options: I.Options & { responseType: "string" }): Promise<I.Response<string>>;
            patch(url: string, data: I.Data, options: I.Options & { responseType: "buffer" }): Promise<I.Response<Buffer>>;
            patch(url: string, data: I.Data, options: I.Options & { responseType: "stream" }): Promise<I.Response<nodestd.stream.Readable>>;
            patch(url: string, data?: I.Data, options?: I.Options): Promise<I.Response<object | string>>;

            delete(url: string, options: I.Options & { responseType: "string" }): Promise<I.Response<string>>;
            delete(url: string, options: I.Options & { responseType: "buffer" }): Promise<I.Response<Buffer>>;
            delete(url: string, options: I.Options & { responseType: "stream" }): Promise<I.Response<nodestd.stream.Readable>>;
            delete(url: string, options?: I.Options): Promise<I.Response<object | string>>;

            options(url: string, options: I.Options & { responseType: "string" }): Promise<I.Response<string>>;
            options(url: string, options: I.Options & { responseType: "buffer" }): Promise<I.Response<Buffer>>;
            options(url: string, options: I.Options & { responseType: "stream" }): Promise<I.Response<nodestd.stream.Readable>>;
            options(url: string, options?: I.Options): Promise<I.Response<object | string>>;
        }

        class Cancel {
            message: string;

            constructor(message: string);
        }

        namespace I {
            type Canceller = (message?: string) => void;

            interface CancelTokenSource {
                token: CancelToken;
                cancel: Canceller;
            }
        }

        class CancelToken {
            promise: Promise<Cancel>;
            reason?: Cancel;

            constructor(executor: I.Canceller);

            throwIfRequested(): void;

            static source(): I.CancelTokenSource;
        }

        const request: I.Request;

        function create(options?: I.Options): I.Request;

        function isCancel(obj: any): obj is Cancel;
    }
}
