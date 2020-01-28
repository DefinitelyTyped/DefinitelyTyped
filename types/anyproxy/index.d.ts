// Type definitions for anyproxy 4.1
// Project: https://github.com/alibaba/anyproxy
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
//                 Roland Reed <https://github.com/roland-reed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {
    IncomingMessage,
    ServerResponse,
    RequestOptions
} from "http";

import {
    EventEmitter
} from "events";

import {
    Socket
} from "net";

export type MaybePromise<T> = T | Promise<T>;

export type NetworkType = 'http' | 'https';

export interface ProxyOptions {
    /** Port number of proxy server */
    port: string | number;
    /** Your rule module */
    rule?: string | RuleModule;
    /** Throttle in kb/s, unlimited for default */
    throttle?: number;
    /** Type of the proxy server, could be 'http' or 'https'. */
    type?: "http" | "https";
    /** Host name of the proxy server, required when this is an https proxy */
    hostname?: string;
    /** Force intercept all https request, default to false */
    forceProxyHttps?: boolean;
    /** If keep silent in console, false for default false */
    silent?: boolean;
    /** If ignore certificate error in request, default to false */
    dangerouslyIgnoreUnauthorized?: boolean;
    /** Whether to intercept websocket, default to false */
    wsIntercept?: boolean;
    /** Config for web interface */
    webInterface?: WebInterfaceOptions;
    /** Recorder to use */
    recorder?: ProxyRecorder;
}

export interface WebInterfaceOptions {
    /** If enable web interface, default to false */
    enable?: boolean;
    /** Port number for web interface */
    webPort?: number;
}

export interface RuleModule {
    /** Introduction of this rule file. AnyProxy will read this field and give some tip to user. */
    summary?: string;
    /** Before sending request to server, AnyProxy will call beforeSendRequest with param requestDetail. */
    beforeSendRequest?(requestDetail: RequestDetail): MaybePromise<BeforeSendRequestResult | null | undefined>;
    /** Before sending response to client, AnyProxy will call beforeSendResponse with param requestDetail responseDetail. */
    beforeSendResponse?(requestDetail: RequestDetail, responseDetail: ResponseDetail): MaybePromise<BeforeSendResponseResult | null | undefined>;
    /**
     * When receiving https request, AnyProxy will call beforeDealHttpsRequest with param requestDetail.
     * If configed with forceProxyHttps in launching, AnyProxy will skip calling this method.
     * Only by returning true, AnyProxy will try to replace the certificate and intercept the https request.
     */
    beforeDealHttpsRequest?(requestDetail: BeforeDealHttpsRequestDetail): MaybePromise<boolean>;
    /**
     * AnyProxy will call this method when an error happened in request handling.
     * Errors usually are issued during requesting, e.g. DNS failure, request timeout.
     */
    onError?(requestDetail: RequestDetail, err: Error): MaybePromise<BeforeSendResponseResult | null | undefined>;
    /** AnyProxy will call this method when failed to connect target server in https request. */
    onConnectError?(requestDetail: RequestDetail, err: Error): MaybePromise<BeforeSendResponseResult | null | undefined>;
}

// TypeScript Version: 2.2
export interface BeforeSendRequestResult extends Partial<RequestDetail> {
    response?: Partial<Response>;
}

export interface BeforeSendResponseResult {
    response: Partial<Response>;
}

export interface BeforeDealHttpsRequestDetail {
    host: string;
    _req: IncomingMessage;
}

export interface RequestDetail {
    protocol: string;
    url: string;
    requestOptions: RequestOptions;
    requestData: any;
    _req: IncomingMessage;
}

export interface ResponseDetail {
    response: Response;
    _res: ServerResponse;
}

export interface Response {
    statusCode: number;
    header: Record<string, string>;
    body: any;
}

export interface RecorderInfo {
    _id: number;
    id: number;
    url: string;
    host: string;
    path: string;
    method: string;

    // req
    reqHeader: Record<string, string>;
    startTime: number;
    reqBody: any;
    protocol: string;

    // res
    statusCode: number | string;
    endTime: number | string;
    resHeader: Record<string, string> | string;
    length: number | string;
    mime: string;
    duration: number | string;
}

export class ProxyCore extends EventEmitter {
    /**
     * Creates an instance of ProxyCore.
     * @param config - configs
     */
    constructor(config?: ProxyOptions);

    /**
     * Manage all created socket
     * for each new socket, we put them to a map;
     * if the socket is closed itself, we remove it from the map
     * when the `close` method is called, we'll close the sockes before the server closed
     *
     * @param socket the http socket that is creating
     */
    handleExistConnections(socket: Socket): void;

    /** Start the proxy server */
    start(): this;

    /** Close the proxy server */
    close(): Promise<void>;
}

export class ProxyServer extends ProxyCore {
    constructor(config?: ProxyOptions);

    /** Emit when proxy server is ready */
    on(eventName: "ready", listener: () => void): this;
    /** Emit when error happened inside proxy server */
    on(eventName: "error", listener: (err: Error) => void): this;

    /** Start proxy server */
    start(): this;
    /** Close proxy server */
    close(): Promise<void>;
}

export class ProxyRecorder extends EventEmitter {
    // TypeScript Version: 2.2
    constructor(config?: object);

    emitUpdate(id: number, info?: RecorderInfo): void;

    emitUpdateLatestWsMessage(id: number, message: any): void;

    updateRecord(id: number, info: RecorderInfo): void;

    updateRecordWsMessage(id: number, message: any): void;

    // TypeScript Version: 2.2
    updateExtInfo(id: number, extInfo: object): void;

    appendRecord(info: RecorderInfo): number;

    updateRecordBody(id: number, info: RecorderInfo): void;

    getBody(id: number, cb?: (err: Error, body: Buffer) => void): void;

    getDecodedBody(id: number, cb?: (err: Error, content: any) => void): void;

    getDecodedWsMessage(id: number, cb?: (err: Error, content: any) => void): void;

    getSingleRecord(id: number, cb: (err: Error, record: RecorderInfo) => void): void;

    getSummaryList(cb: (err: Error, records: RecorderInfo[]) => void): void;

    getRecords(idStart: number, limit: number, cb: (err: Error, records: RecorderInfo[]) => void): void;

    clear(): void;

    getCacheFile(fileName: string, cb: (err: Error, filePath: string) => void): void;
}

export class ProxyWebServer extends EventEmitter {
    /**
     * Creates an instance of webInterface.
     *
     * @param config
     * @param config.webPort
     * @param recorder
     */
    constructor(config: WebInterfaceOptions, recorder: ProxyRecorder);

    /**
     * get the express server
     */
    getServer(): any;

    start(): Promise<void>;

    close(): void;
}

export namespace utils {
    /** Manage the system proxy config. sudo password may be required. */
    namespace systemProxyMgr {
        /** Enable global system proxy with specified params. sudo password may be required. */
        function enableGlobalProxy(host: string, port: string | number, networkType?: NetworkType): void;
        /** Disable global system proxy. sudo password may be required. */
        function disableGlobalProxy(networkType?: NetworkType): void;
    }

    /** Manage certificates of AnyProxy. */
    namespace certMgr {
        /** Detect if AnyProx rootCA exists */
        function ifRootCAFileExists(): boolean;

        /** Generate a rootCA */
        function generateRootCA(callback: (err: Error, keyPath: string) => void): void;
    }
}
