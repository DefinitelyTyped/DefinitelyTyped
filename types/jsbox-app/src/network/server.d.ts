// JSBox Server API TypeScript Declaration

declare namespace ServerTypes {
    interface ServerOptions {
        port: number;
        bonjourName?: string;
        bonjourType?: string;
    }

    interface ServerStartOptions {
        port: number;
        path: string;
        handler?: () => void;
    }

    interface BaseRequest {
        method: string;
        url: string;
        headers: any;
        path: string;
        query: any;
        contentType: string;
        contentLength: number;
        ifModifiedSince: Date;
        ifNoneMatch: boolean;
        acceptsGzip: boolean;
        localAddressData: NSData;
        localAddress: string;
        remoteAddressData: NSData;
        remoteAddress: string;
        hasBody: boolean;
        hasByteRange: boolean;
    }

    interface DataRequest extends BaseRequest {
        data: NSData;
        text: string;
        json: any;
    }

    interface FileRequest extends BaseRequest {
        temporaryPath: string;
    }

    interface MultipartRequest extends BaseRequest {
        arguments: {
            controlName: string;
            contentType: string;
            mimeType: string;
            data: NSData;
            string: string;
            fileName: string;
            temporaryPath: string;
        }[];
        files: {
            mimeType: string;
            fileName: string;
            controlName: string;
            contentType: string;
            temporaryPath: string;
        }[];
        mimeType: string;
    }

    interface BaseResponse {
        redirect?: string;
        statusCode?: number;
        contentType?: string;
        contentLength?: string;
        cacheControlMaxAge?: number;
        lastModifiedDate?: Date;
        eTag?: string;
        gzipEnabled?: boolean;
        hasBody?: boolean;
    }

    interface DataResponse extends BaseResponse {
        text?: string;
        html?: string;
        json?: any;
    }

    interface FileResponse extends BaseResponse {
        path: string;
        isAttachment?: boolean;
        byteRange?: JBRange;
    }

    type ResponseOptions =
        | {
              type: "default" | "error";
              props: BaseResponse;
          }
        | {
              type: "data";
              props: DataResponse;
          }
        | {
              type: "file";
              props: FileResponse;
          };

    interface ServerInstance {
        start: (options: ServerOptions) => void;
        stop: () => void;
        listen: (events: EventHandler) => void;
        addHandler: (handler: RequestHandler) => void;
        clearHandlers: () => void;
    }

    interface EventHandler {
        didStart?: (server: ServerInstance) => void;
        didConnect?: (server: ServerInstance) => void;
        didDisconnect?: (server: ServerInstance) => void;
        didStop?: (server: ServerInstance) => void;
        didCompleteBonjourRegistration?: (server: ServerInstance) => void;
        didUpdateNATPortMapping?: (server: ServerInstance) => void;
    }

    interface RequestHandler {
        filter?: (rules: {
            method: string;
            url: string;
            headers: Record<string, any>;
            path: string;
            query: Record<string, any>;
        }) => "default" | "data" | "file" | "multipart" | "urlencoded" | { type: string; method: string };
        response?: (request: BaseRequest | DataRequest | FileRequest | MultipartRequest) => ResponseOptions;
        asyncResponse?: (
            request: BaseRequest | DataRequest | FileRequest | MultipartRequest,
            completion: (response: ResponseOptions) => void,
        ) => void;
    }
}

interface JBServer {
    start(options: ServerTypes.ServerStartOptions): ServerTypes.ServerInstance;
    new (): ServerTypes.ServerInstance;
}

declare const $server: JBServer;
