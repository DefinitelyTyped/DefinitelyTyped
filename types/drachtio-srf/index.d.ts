/// <reference types="node" />

import { Socket } from "net";
import { EventEmitter } from "events";

declare namespace Srf {
    type SipMethod =
        | "ACK"
        | "BYE"
        | "CANCEL"
        | "INFO"
        | "INVITE"
        | "MESSAGE"
        | "NOTIFY"
        | "OPTIONS"
        | "PRACK"
        | "PUBLISH"
        | "REFER"
        | "REGISTER"
        | "SUBSCRIBE"
        | "UPDATE";

    type SipMessageHeaders = Record<string, string>;

    interface AOR {
        name: string;
        uri: string;
        params?: Record<string, any>;
    }

    interface Via {
        version: string;
        protocol: string;
        host: string;
        port: string;
    }

    interface ParseUriResult {
        family?: "ipv6" | "ipv4";
        scheme: "sip" | "sips" | "tel";
        user?: string;
        password?: string;
        host?: string;
        port?: string;
        params: Record<string, string | null>;
        headers: Record<string, string>;
        context?: string;
    }

    interface SrfConfig {
        host?: string;
        port?: number;
        secret?: string;
        logger?: (message: string) => void;
    }

    interface SipMessage {
        type: "request" | "response";
        body: string;
        payload: Array<{
            type: string | null;
            content?: string;
        }>;
        source: "network" | "application";
        source_address: string;
        source_port: string;
        protocol: string;
        stackTime: string;
        calledNumber: string;
        callingNumber: string;
        raw: string;
        get(name: string): string;
        has(name: string): boolean;
        set(name: string, value: string): void;
        getParsedHeader(name: "contact" | "Contact"): AOR[];
        getParsedHeader(name: "via" | "Via"): Via[];
        getParsedHeader(
            name:
                | "To"
                | "to"
                | "From"
                | "from"
                | "refer-to"
                | "referred-by"
                | "p-asserted-identity"
                | "remote-party-id",
        ): AOR;
        getParsedHeader(name: string): string;
    }

    interface SrfRequest extends SipMessage {
        method: SipMethod;
        readonly isNewInvite: boolean;
        branch: string;
        callId: string;
        from: string;
        headers: Record<string, string>;
        msg: SipMessage;
        sdp: string;
        srf: Srf;
        to: string;
        uri: string;
        registration?: {
            type: "unregister" | "register";
            expires: number;
            contact: AOR[];
            aor: string;
        };
        cancel(callback: (err: any, req: SrfRequest) => void): void;
        on(event: "response", callback: (res: SrfResponse, ack?: (opts?: { sdp: string }) => void) => void): void;
        on(event: "cancel", callback: (req: SipMessage) => void): void;
    }

    interface SrfResponse extends SipMessage {
        status: number;
        statusCode: number;
        reason: string;
        finalResponseSent: boolean;
        send(status: number, opts?: object): void;
        send(status: number, reason: string, opts?: object): void;
        send(
            status: number,
            reason: string,
            opts: object,
            callback: (err: any, msg: SipMessage) => void,
        ): void;
        end(): void;
    }

    interface RequestOptions {
        method: SipMethod | string;
        uri?: string;
        proxy?: string;
        headers?: SipMessageHeaders;
        body?: string;
        auth?: { username: string; password: string };
    }

    interface ProxyRequestOptions {
        forking?: "sequential" | "simultaneous";
        remainInDialog?: boolean;
        recordRoute?: boolean;
        provisionalTimeout?: string;
        finalTimeout?: string;
        followRedirects?: boolean;
    }

    interface ModifyOptions {
        noAck?: boolean;
        headers?: SipMessageHeaders;
        auth?: { username: string; password: string };
    }

    interface ModifyResult {
        sdp: string;
        ack: (sdp?: string) => void;
    }

    interface CreateUASOptions {
        localSdp: string;
        headers?: SipMessageHeaders;
    }

    interface CreateUACOptions {
        headers?: SipMessageHeaders;
        uri?: string;
        noAck?: boolean;
        localSdp?: string;
        proxy?: string;
        auth?: { username: string; password: string };
    }

    interface CreateB2BUAOptions {
        headers?: SipMessageHeaders;
        responseHeaders?:
            | SipMessageHeaders
            | ((uacRes: SipMessageHeaders, headers: SipMessageHeaders) => SipMessageHeaders | null);
        localSdpA?: string | ((sdp: string, res: SrfResponse) => string | Promise<string>);
        localSdpB?: string | ((sdp: string) => string | Promise<string>);
        proxyRequestHeaders?: string[];
        proxyResponseHeaders?: string[];
        passFailure?: boolean;
        passProvisionalResponses?: boolean;
        proxy?: string;
        auth?: { username: string; password: string };
    }

    interface ProgressCallbacks {
        cbRequest?: (req: SrfRequest) => void;
        cbProvisional?: (provisionalRes: SrfResponse) => void;
    }

    interface B2BProgressCallbacks extends ProgressCallbacks {
        cbFinalizedUac?: (uac: Dialog) => void;
    }

    interface B2BDialogs {
        uas: Dialog;
        uac: Dialog;
    }

    class Dialog extends EventEmitter {
        sip: { callId: string; localTag: string; remoteTag: string };
        onHold: boolean;
        other: Dialog;
        type: "uac" | "uas";
        local: { uri: string; sdp: string };
        remote: { uri: string; sdp: string };
        req: SrfRequest;
        destroy(
            opts?: { headers: Record<string, string> },
            callback?: (err: any, msg: SrfRequest) => void,
        ): void;
        modify(sdp: string, opts: ModifyOptions & { noAck: true }): Promise<ModifyResult>;
        modify(opts: ModifyOptions & { noAck: true }): Promise<ModifyResult>;
        modify(sdp: string, opts?: ModifyOptions): Promise<string | ModifyResult>;
        modify(opts: ModifyOptions): Promise<string | ModifyResult>;
        modify(
            sdp: string,
            opts: ModifyOptions,
            callback: (err: any, sdp?: string, ack?: (sdp?: string) => void) => void,
        ): this;
        modify(
            opts: ModifyOptions,
            callback: (err: any, sdp?: string, ack?: (sdp?: string) => void) => void,
        ): this;
        request(opts?: RequestOptions): Promise<SrfResponse>;
        request(opts: RequestOptions, callback: (err: any, msg: SrfResponse) => void): void;
        on(messageType: "ack", callback: (msg: SrfRequest) => void): this;
        on(messageType: "destroy", callback: (msg: SrfRequest) => void): this;
        on(messageType: "info", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        on(messageType: "message", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        on(messageType: "modify", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        on(messageType: "notify", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        on(messageType: "options", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        on(messageType: "refer", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        on(messageType: "refresh", callback: (msg: SrfRequest) => void): this;
        on(messageType: "update", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        once(messageType: "ack", callback: (msg: SrfRequest) => void): this;
        once(messageType: "destroy", callback: (msg: SrfRequest) => void): this;
        once(messageType: "refresh", callback: (msg: SrfRequest) => void): this;
        once(messageType: "info" | "message" | "modify" | "notify" | "options" | "refer" | "update", callback: (req: SrfRequest, res: SrfResponse) => void): this;
        once(messageType: string, callback: (msg: SipMessage) => void): this;
    }

    function parseUri(uri: string): ParseUriResult;
    function stringifyUri(uri: object): string;
}

declare class Srf extends EventEmitter {
    locals: Record<string, any>;
    socket: Socket;

    constructor(tags?: string | string[]);

    connect(config?: Srf.SrfConfig): Promise<void>;
    listen(opts?: Srf.SrfConfig): Promise<void>;
    disconnect(): void;

    use(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse, next: () => void) => void): void;
    use(messageType: string, callback: (req: Srf.SrfRequest, res: Srf.SrfResponse, next: () => void) => void): void;

    invite(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    register(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    bye(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    cancel(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    ack(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    info(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    message(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    notify(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    options(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    prack(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    publish(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    refer(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    subscribe(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;
    update(callback: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): void;

    request(uri: string, opts: Srf.RequestOptions): Promise<Srf.SrfRequest>;
    request(uri: string, opts: Srf.RequestOptions, callback: (err: any, requestSent: Srf.SrfRequest) => void): this;
    request(opts: Srf.RequestOptions & { uri: string }): Promise<Srf.SrfRequest>;
    request(opts: Srf.RequestOptions & { uri: string }, callback: (err: any, requestSent: Srf.SrfRequest) => void): this;

    proxyRequest(
        req: Srf.SrfRequest,
        destination: string | string[],
        opts?: Srf.ProxyRequestOptions,
        callback?: (err: any, results: string) => void,
    ): void;

    createUAS(req: Srf.SrfRequest, res: Srf.SrfResponse, opts: Srf.CreateUASOptions): Promise<Srf.Dialog>;
    createUAS(
        req: Srf.SrfRequest,
        res: Srf.SrfResponse,
        opts: Srf.CreateUASOptions,
        callback: (err: any, dialog: Srf.Dialog) => void,
    ): this;

    createUAC(
        uri: string | Srf.CreateUACOptions,
        opts?: Srf.CreateUACOptions,
        progressCallbacks?: Srf.ProgressCallbacks,
    ): Promise<Srf.Dialog>;
    createUAC(
        uri: string | Srf.CreateUACOptions,
        opts?: Srf.CreateUACOptions,
        progressCallbacks?: Srf.ProgressCallbacks,
        callback?: (err: any, dialog: Srf.Dialog) => void,
    ): this;

    createB2BUA(
        req: Srf.SrfRequest,
        res: Srf.SrfResponse,
        uri: string,
        opts: Srf.CreateB2BUAOptions,
        progressCallbacks?: Srf.B2BProgressCallbacks,
    ): Promise<Srf.B2BDialogs>;
    createB2BUA(
        req: Srf.SrfRequest,
        res: Srf.SrfResponse,
        uri: string,
        opts: Srf.CreateB2BUAOptions,
        progressCallbacks?: Srf.B2BProgressCallbacks,
        callback?: (err: any, dialogs: Srf.B2BDialogs) => void,
    ): this;

    on(event: "connect", listener: (err: Error | null, hostPort: string) => void): this;
    on(event: "listening", listener: () => void): this;
    on(event: "reconnecting", listener: (opts: { delay: number; attempt: number }) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "close", listener: (socket: Socket) => void): this;
    on(event: "disconnect", listener: () => void): this;
    on(event: "message", listener: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): this;
    on(event: "request", listener: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void): this;
    on(
        event:
            | "register"
            | "invite"
            | "bye"
            | "cancel"
            | "ack"
            | "info"
            | "notify"
            | "options"
            | "prack"
            | "publish"
            | "refer"
            | "subscribe"
            | "update",
        listener: (req: Srf.SrfRequest, res: Srf.SrfResponse) => void,
    ): this;
    on(event: "cdr:attempt", listener: (source: string, time: string, msg: Srf.SipMessage) => void): this;
    on(
        event: "cdr:start",
        listener: (source: string, time: string, role: string, msg: Srf.SipMessage) => void,
    ): this;
    on(
        event: "cdr:stop",
        listener: (source: string, time: string, reason: string, msg: Srf.SipMessage) => void,
    ): this;
}

export = Srf;
