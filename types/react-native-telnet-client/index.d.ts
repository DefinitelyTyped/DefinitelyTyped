/// <reference types="node" />

import { EventEmitter } from "events";
import { Socket, SocketConnectOpts } from "net";
import { Duplex, DuplexOptions } from "stream";

export type Callback<T> = (err: any, value?: T) => void;

export class Stream extends Duplex {
    constructor(source: Socket, options?: DuplexOptions);
    _write(data: Buffer | string, encoding?: BufferEncoding, callback?: Callback<void>): void;
    _read(): void;
}

export type EscapeHandler = (escapeSequence: string) => string | null;

export type TelnetState =
    | null
    | "end"
    | "failedlogin"
    | "getprompt"
    | "login"
    | "ready"
    | "response"
    | "standby"
    | "start";

export interface ExecOptions {
    echoLines?: number | undefined;
    execTimeout?: number | undefined;
    failedLoginMatch?: string | undefined;
    irs?: string | undefined;
    loginPrompt?: string | undefined;
    maxBufferLength?: number | undefined;
    newlineReplace?: string | undefined;
    ors?: string | undefined;
    shellPrompt?: string | undefined;
    stripControls?: boolean | undefined;
    timeout?: number | undefined;
}

export interface SendOptions {
    maxBufferLength?: number | undefined;
    newlineReplace?: string | undefined;
    ors?: string | undefined;
    shellPrompt?: string | RegExp | undefined;
    stripControls?: boolean | undefined;
    timeout?: number | undefined;
    waitFor?: string | RegExp | false | undefined;
    /** @deprecated */
    waitfor?: string | RegExp | false | undefined;
}

export interface ConnectOptions extends SendOptions {
    debug?: boolean | undefined;
    echoLines?: number | undefined;
    encoding?: BufferEncoding | undefined;
    escapeHandler?: EscapeHandler | undefined;
    execTimeout?: number | undefined;
    extSock?: unknown | undefined;
    failedLoginMatch?: string | RegExp | undefined;
    host?: string | undefined;
    /** @deprecated */
    initialCTRLC?: boolean | undefined;
    initialCtrlC?: boolean | undefined;
    initialLFCR?: boolean | undefined;
    irs?: string | undefined;
    localAddress?: string | undefined;
    loginPrompt?: string | RegExp | undefined;
    maxEndWait?: number | undefined;
    negotiationMandatory?: boolean | undefined;
    pageSeparator?: string | RegExp | undefined;
    password?: string | undefined;
    passwordPrompt?: string | RegExp | undefined;
    port?: number | undefined;
    sendTimeout?: number | undefined;
    sock?: Socket | undefined;
    socketConnectOptions?: SocketConnectOpts | undefined;
    stripShellPrompt?: boolean | undefined;
    terminalHeight?: number | undefined;
    terminalWidth?: number | undefined;
    username?: string | undefined;
}

export default class Telnet extends EventEmitter {
    constructor();
    connect(opts: ConnectOptions): Promise<void>;
    nextData(): Promise<string | null>;
    shell(callback?: Callback<Stream>): Promise<Stream>;
    exec(cmd: string, opts?: ExecOptions | Callback<string>, callback?: Callback<string>): Promise<string>;
    send(data: Buffer | string, opts?: SendOptions | Callback<string>, callback?: Callback<string>): Promise<string>;
    write(data: Buffer | string, opts?: SendOptions, callback?: Callback<string>): Promise<string>;
    getSocket(): Socket;
    end(): Promise<void>;
    destroy(): Promise<void>;
    parseData(chunk: Buffer, isReady?: boolean[]): Buffer;
    private login(handle: string): void;
    negotiate(chunk: Buffer): Buffer;
    private static checkSocket(sock: any): boolean;
    private decode(chunk: string | Buffer): string;
}
