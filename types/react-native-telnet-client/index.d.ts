// Type definitions for react-native-telnet-client 1.0.6
// Project: https://github.com/itgou/react-native-telnet-client
// Definitions by: Robin Vanden Berghe <https://github.com/robinvandenb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'react-native-telnet-client' {
    import { EventEmitter } from 'events';
    import { Socket, SocketConnectOpts } from 'net';
    import { Duplex, DuplexOptions } from 'stream';

    export type Callback<T> = (err: any, value?: T) => void;

    export class Stream extends Duplex {
        constructor(source: Socket, options?: DuplexOptions);
        _write(data: Buffer | string, encoding?: BufferEncoding, callback?: Callback<void>): void;
        _read(): void;
    }

    export type EscapeHandler = (escapeSequence: string) => string | null;

    export type TelnetState =
        | null
        | 'end'
        | 'failedlogin'
        | 'getprompt'
        | 'login'
        | 'ready'
        | 'response'
        | 'standby'
        | 'start';

    export interface ExecOptions {
        echoLines?: number;
        execTimeout?: number;
        failedLoginMatch?: string;
        irs?: string;
        loginPrompt?: string;
        maxBufferLength?: number;
        newlineReplace?: string;
        ors?: string;
        shellPrompt?: string;
        stripControls?: boolean;
        timeout?: number;
    }

    export interface SendOptions {
        maxBufferLength?: number;
        newlineReplace?: string;
        ors?: string;
        shellPrompt?: string | RegExp;
        stripControls?: boolean;
        timeout?: number;
        waitFor?: string | RegExp | false;
        /** @deprecated */
        waitfor?: string | RegExp | false;
    }

    export interface ConnectOptions extends SendOptions {
        debug?: boolean;
        echoLines?: number;
        encoding?: BufferEncoding;
        escapeHandler?: EscapeHandler;
        execTimeout?: number;
        extSock?: any;
        failedLoginMatch?: string | RegExp;
        host?: string;
        /** @deprecated */
        initialCTRLC?: boolean;
        initialCtrlC?: boolean;
        initialLFCR?: boolean;
        irs?: string;
        localAddress?: string;
        loginPrompt?: string | RegExp;
        maxEndWait?: number;
        negotiationMandatory?: boolean;
        pageSeparator?: string | RegExp;
        password?: string;
        passwordPrompt?: string | RegExp;
        port?: number;
        sendTimeout?: number;
        sock?: Socket;
        socketConnectOptions?: SocketConnectOpts;
        stripShellPrompt?: boolean;
        terminalHeight?: number;
        terminalWidth?: number;
        username?: string;
    }

    export default class Telnet extends EventEmitter {
        constructor();
        connect(opts: ConnectOptions): Promise<void>;
        nextData(): Promise<string | null>;
        shell(callback?: Callback<Stream>): Promise<Stream>;
        exec(cmd: string, opts?: ExecOptions | Callback<string>, callback?: Callback<string>): Promise<string>;
        send(
            data: Buffer | string,
            opts?: SendOptions | Callback<string>,
            callback?: Callback<string>,
        ): Promise<string>;
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
}
