// Type definitions for Node.js v0.10.1
// Project: http://nodejs.org/
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v0.10.1 API              *
*                                               *
************************************************/

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeProcess;
declare var global: any;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void , ms: number , ...args: any[]): NodeTimer;
declare function clearTimeout(timeoutId: NodeTimer): void;
declare function setInterval(callback: (...args: any[]) => void , ms: number , ...args: any[]): NodeTimer;
declare function clearInterval(intervalId: NodeTimer): void;
declare function setImmediate(callback: (...args: any[]) => void , ...args: any[]): any;
declare function clearImmediate(immediateId: any): void;

declare var require: {
    (id: string): any;
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
}

declare var module: {
    exports: any;
    require(id: string): any;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
}

// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
    new (str: string, encoding?: string): NodeBuffer;
    new (size: number): NodeBuffer;
    new (array: any[]): NodeBuffer;
    prototype: NodeBuffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: NodeBuffer[], totalLength?: number): NodeBuffer;
};
declare var Buffer: {
    new (str: string, encoding?: string): NodeBuffer;
    new (size: number): NodeBuffer;
    new (array: any[]): NodeBuffer;
    prototype: NodeBuffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: NodeBuffer[], totalLength?: number): NodeBuffer;
}

/************************************************
*                                               *
*                   INTERFACES                  *
*                                               *
************************************************/

interface ErrnoException extends Error {
    errno?: any;
    code?: string;
    path?: string;
    syscall?: string;
}

interface NodeEventEmitter {
    addListener(event: string, listener: Function): NodeEventEmitter;
    on(event: string, listener: Function): NodeEventEmitter;
    once(event: string, listener: Function): NodeEventEmitter;
    removeListener(event: string, listener: Function): NodeEventEmitter;
    removeAllListeners(event?: string): NodeEventEmitter;
    setMaxListeners(n: number): void;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
}

interface ReadableStream extends NodeEventEmitter {
    readable: boolean;
    read(size?: number): any;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends WritableStream>(destination?: T): void;
    unshift(chunk: string): void;
    unshift(chunk: NodeBuffer): void;
    wrap(oldStream: ReadableStream): ReadableStream;
}

interface WritableStream extends NodeEventEmitter {
    writable: boolean;
    write(buffer: NodeBuffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: NodeBuffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
}

interface ReadWriteStream extends ReadableStream, WritableStream { }

interface NodeProcess extends NodeEventEmitter {
    stdout: WritableStream;
    stderr: WritableStream;
    stdin: ReadableStream;
    argv: string[];
    execPath: string;
    abort(): void;
    chdir(directory: string): void;
    cwd(): string;
    env: any;
    exit(code?: number): void;
    getgid(): number;
    setgid(id: number): void;
    setgid(id: string): void;
    getuid(): number;
    setuid(id: number): void;
    setuid(id: string): void;
    version: string;
    versions: { http_parser: string; node: string; v8: string; ares: string; uv: string; zlib: string; openssl: string; };
    config: {
        target_defaults: {
            cflags: any[];
            default_configuration: string;
            defines: string[];
            include_dirs: string[];
            libraries: string[];
        };
        variables: {
        clang: number;
        host_arch: string;
        node_install_npm: boolean;
        node_install_waf: boolean;
        node_prefix: string;
        node_shared_openssl: boolean;
        node_shared_v8: boolean;
        node_shared_zlib: boolean;
        node_use_dtrace: boolean;
        node_use_etw: boolean;
        node_use_openssl: boolean;
        target_arch: string;
        v8_no_strict_aliasing: number;
        v8_use_snapshot: boolean;
        visibility: string;
    };
    };
    kill(pid: number, signal?: string): void;
    pid: number;
    title: string;
    arch: string;
    platform: string;
    memoryUsage(): { rss: number; heapTotal: number; heapUsed: number; };
    nextTick(callback: Function): void;
    umask(mask?: number): number;
    uptime(): number;
    hrtime(time?:number[]): number[];

    // Worker
    send?(message: any, sendHandle?: any): void;
}

// Buffer class
interface NodeBuffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    length: number;
    copy(targetBuffer: NodeBuffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    slice(start?: number, end?: number): NodeBuffer;
    readUInt8(offset: number, noAsset?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt8(value: number, offset: number, noAssert?: boolean): void;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): void;
    fill(value: any, offset?: number, end?: number): void;
}

interface NodeTimer {
    ref() : void;
    unref() : void;
}


/************************************************
*                                               *
*              MODULES - EXTERNAL               *
*                                               *
************************************************/

declare module "events"         { import M = _ExternalShim_._NodeJs_.Events;    export = M; }
declare module "http"           { import M = _ExternalShim_._NodeJs_.Http;      export = M; }
declare module "url"            { import M = _ExternalShim_._NodeJs_.Url;       export = M; }
declare module "net"            { import M = _ExternalShim_._NodeJs_.Net;       export = M; }
declare module "querystring"    { var M: NodeJs.QueryString;    export = M; }
declare module "cluster"        { var M: NodeJs.Cluster;        export = M; }
declare module "zlib"           { var M: NodeJs.Zlib;           export = M; }
declare module "os"             { var M: NodeJs.Os;             export = M; }
declare module "https"          { var M: NodeJs.Https;          export = M; }
declare module "punycode"       { var M: NodeJs.PunyCode;       export = M; }
declare module "repl"           { var M: NodeJs.Repl;           export = M; }
declare module "readline"       { var M: NodeJs.ReadLine;       export = M; }
declare module "vm"             { var M: NodeJs.Vm;             export = M; }
declare module "child_process"  { var M: NodeJs.ChildProcess;   export = M; }
declare module "dns"            { var M: NodeJs.Dns;            export = M; }
declare module "dgram"          { var M: NodeJs.Dgram;          export = M; }
declare module "fs"             { var M: NodeJs.Fs;             export = M; }
declare module "path"           { var M: NodeJs.Path;           export = M; }
declare module "string_decoder" { var M: NodeJs.StringDecoder;  export = M; }
declare module "tls"            { var M: NodeJs.Tls;            export = M; }
declare module "crypto"         { var M: NodeJs.Crypto;         export = M; }
declare module "stream"         { var M: NodeJs.Stream;         export = M; }
declare module "util"           { var M: NodeJs.Util;           export = M; }
declare module "assert"         { var M: NodeJs.Assert;         export = M; }
declare module "tty"            { var M: NodeJs.Tty;            export = M; }
declare module "domain"         { var M: NodeJs.Domain;         export = M; }


/************************************************
*                                               *
*           EXTERNAL - INTERNAL SHIM            *
*                                               *
************************************************/

// NB: This module exists so that 'pure' (ie non-instantiated) internal modules may
// be declared in parallel with external modules, without breaking code that relies
// on certain behaviours of external modules. It's a shim to support type definitions
// that are already out there which use the pattern exemplified below:
//
//      declare module "mymodule" {
//          import http   = require('http');
//          ...
//          server?: http.Server;
//
// Note that the type 'Server' is accessed via the variable 'http', meaning that
// Server must be not just a type, but also a property on 'http'. The 'pure' typings
// declared in the NodeJs module below don't support this usage. With the _ExternalShim_
// shim, the above code will continue working unchanged. New type definitions should
// prefer something like:
//
//      declare module "mymodule" {
//          ...
//          server?: NodeJs.Http.Server;
//
// If all typings switch to using the pure internal types in NodeJs, this shim can be removed.

declare module _ExternalShim_ {
    export module _NodeJs_ {
        export module Events {
            export class EventEmitter implements NodeEventEmitter {
                static listenerCount(emitter: EventEmitter, event: string): number;
                addListener(event: string, listener: Function): EventEmitter;
                on(event: string, listener: Function): EventEmitter;
                once(event: string, listener: Function): EventEmitter;
                removeListener(event: string, listener: Function): EventEmitter;
                removeAllListeners(event?: string): EventEmitter;
                setMaxListeners(n: number): void;
                listeners(event: string): Function[];
                emit(event: string, ...args: any[]): boolean;
            }
        }
        export var Http: NodeJs.Http;
        export module Http {
            export interface Server extends NodeJs.Http.Server { }
            export interface ServerRequest extends NodeJs.Http.ServerRequest { }
            export interface ServerResponse extends NodeJs.Http.ServerResponse { }
            export interface ClientRequest extends NodeJs.Http.ClientRequest { }
            export interface ClientResponse extends NodeJs.Http.ClientResponse { }
            export interface Agent extends NodeJs.Http.Agent { }
        }
        export var Net: NodeJs.Net;
        export module Net {
            export interface Socket extends NodeJs.Net.Socket { }
            export interface Server extends NodeJs.Net.Server { }
        }
        export var Url: NodeJs.Url;
        export module Url {
            export interface Url extends NodeJs.Url.Url { }
            export interface UrlOptions extends NodeJs.Url.UrlOptions { }
        }
    }
}


/************************************************
*                                               *
*              MODULES - INTERNAL               *
*                                               *
************************************************/

declare module NodeJs {


    // ---------- "querystring" module ----------
    export interface QueryString {
        stringify(obj: any, sep?: string, eq?: string): string;
        parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
        escape(): any;
        unescape(): any;
    }


    // ---------- "events" module ----------
    export interface Events {
        EventEmitter: {
            new(): Events.EventEmitter;
            listenerCount(emitter: Events.EventEmitter, event: string): number;
        }
    }
    export module Events {
        export interface EventEmitter extends NodeEventEmitter {
            addListener(event: string, listener: Function): EventEmitter;
            on(event: string, listener: Function): EventEmitter;
            once(event: string, listener: Function): EventEmitter;
            removeListener(event: string, listener: Function): EventEmitter;
            removeAllListeners(event?: string): EventEmitter;
            setMaxListeners(n: number): void;
            listeners(event: string): Function[];
            emit(event: string, ...args: any[]): boolean;
        }
    }


    // ---------- "http" module ----------
    export interface Http {
        STATUS_CODES: any;
        createServer(requestListener?: (request: Http.ServerRequest, response: Http.ServerResponse) =>void ): Http.Server;
        createClient(port?: number, host?: string): any;
        request(options: any, callback?: Function): Http.ClientRequest;
        get(options: any, callback?: Function): Http.ClientRequest;
        globalAgent: Http.Agent;
    }
    export module Http {
        export interface Server extends NodeEventEmitter {
            listen(port: number, hostname?: string, backlog?: number, callback?: Function): void;
            listen(path: string, callback?: Function): void;
            listen(handle: any, listeningListener?: Function): void;
            close(cb?: any): void;
            maxHeadersCount: number;
        }
        export interface ServerRequest extends NodeEventEmitter, ReadableStream {
            method: string;
            url: string;
            headers: any;
            trailers: string;
            httpVersion: string;
            setEncoding(encoding?: string): void;
            pause(): void;
            resume(): void;
            connection: Net.Socket;
        }
        export interface ServerResponse extends NodeEventEmitter, WritableStream {

            // Extended base methods
            write(buffer: NodeBuffer): boolean;
            write(buffer: NodeBuffer, cb?: Function): boolean;
            write(str: string, cb?: Function): boolean;
            write(str: string, encoding?: string, cb?: Function): boolean;
            write(str: string, encoding?: string, fd?: string): boolean;

            writeContinue(): void;
            writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
            writeHead(statusCode: number, headers?: any): void;
            statusCode: number;
            setHeader(name: string, value: string): void;
            sendDate: boolean;
            getHeader(name: string): string;
            removeHeader(name: string): void;
            write(chunk: any, encoding?: string): any;
            addTrailers(headers: any): void;

            // Extended base methods
            end(): void;
            end(buffer: NodeBuffer, cb?: Function): void;
            end(str: string, cb?: Function): void;
            end(str: string, encoding?: string, cb?: Function): void;
            end(data?: any, encoding?: string): void;
        }
        export interface ClientRequest extends NodeEventEmitter, WritableStream {

            // Extended base methods
            write(buffer: NodeBuffer): boolean;
            write(buffer: NodeBuffer, cb?: Function): boolean;
            write(str: string, cb?: Function): boolean;
            write(str: string, encoding?: string, cb?: Function): boolean;
            write(str: string, encoding?: string, fd?: string): boolean;

            write(chunk: any, encoding?: string): void;
            abort(): void;
            setTimeout(timeout: number, callback?: Function): void;
            setNoDelay(noDelay?: Function): void;
            setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

            // Extended base methods
            end(): void;
            end(buffer: NodeBuffer, cb?: Function): void;
            end(str: string, cb?: Function): void;
            end(str: string, encoding?: string, cb?: Function): void;
            end(data?: any, encoding?: string): void;
        }
        export interface ClientResponse extends NodeEventEmitter, ReadableStream {
            statusCode: number;
            httpVersion: string;
            headers: any;
            trailers: any;
            setEncoding(encoding?: string): void;
            pause(): void;
            resume(): void;
        }
        export interface Agent { maxSockets: number; sockets: any; requests: any; }
    }


    // ---------- "cluster" module ----------
    export interface Cluster {
        settings: Cluster.ClusterSettings;
        isMaster: boolean;
        isWorker: boolean;
        setupMaster(settings?: Cluster.ClusterSettings): void;
        fork(env?: any): Worker;
        disconnect(callback?: Function): void;
        worker: Worker;
        workers: Worker[];

        // Event emitter
        addListener(event: string, listener: Function): void;
        on(event: string, listener: Function): any;
        once(event: string, listener: Function): void;
        removeListener(event: string, listener: Function): void;
        removeAllListeners(event?: string): void;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;

        Worker: {
            (): any;    // Correctly reflect the fact that this is a (constructor) function,
                        // without suggesting that instances can be obtained this way
        }
    }
    export module Cluster {
        export interface ClusterSettings {
            exec?: string;
            args?: string[];
            silent?: boolean;
        }
        export interface Worker extends Events.EventEmitter {
            id: string;
            process: ChildProcess.ChildProcess;
            suicide: boolean;
            send(message: any, sendHandle?: any): void;
            kill(signal?: string): void;
            destroy(signal?: string): void;
            disconnect(): void;
        }
    }


    // ---------- "zlib" module ----------
    export interface Zlib {
        createGzip(options?: Zlib.ZlibOptions): Zlib.Gzip;
        createGunzip(options?: Zlib.ZlibOptions): Zlib.Gunzip;
        createDeflate(options?: Zlib.ZlibOptions): Zlib.Deflate;
        createInflate(options?: Zlib.ZlibOptions): Zlib.Inflate;
        createDeflateRaw(options?: Zlib.ZlibOptions): Zlib.DeflateRaw;
        createInflateRaw(options?: Zlib.ZlibOptions): Zlib.InflateRaw;
        createUnzip(options?: Zlib.ZlibOptions): Zlib.Unzip;

        deflate(buf: NodeBuffer, callback: (error: Error, result: any) =>void ): void;
        deflateRaw(buf: NodeBuffer, callback: (error: Error, result: any) =>void ): void;
        gzip(buf: NodeBuffer, callback: (error: Error, result: any) =>void ): void;
        gunzip(buf: NodeBuffer, callback: (error: Error, result: any) =>void ): void;
        inflate(buf: NodeBuffer, callback: (error: Error, result: any) =>void ): void;
        inflateRaw(buf: NodeBuffer, callback: (error: Error, result: any) =>void ): void;
        unzip(buf: NodeBuffer, callback: (error: Error, result: any) =>void ): void;

        // Constants
        Z_NO_FLUSH: number;
        Z_PARTIAL_FLUSH: number;
        Z_SYNC_FLUSH: number;
        Z_FULL_FLUSH: number;
        Z_FINISH: number;
        Z_BLOCK: number;
        Z_TREES: number;
        Z_OK: number;
        Z_STREAM_END: number;
        Z_NEED_DICT: number;
        Z_ERRNO: number;
        Z_STREAM_ERROR: number;
        Z_DATA_ERROR: number;
        Z_MEM_ERROR: number;
        Z_BUF_ERROR: number;
        Z_VERSION_ERROR: number;
        Z_NO_COMPRESSION: number;
        Z_BEST_SPEED: number;
        Z_BEST_COMPRESSION: number;
        Z_DEFAULT_COMPRESSION: number;
        Z_FILTERED: number;
        Z_HUFFMAN_ONLY: number;
        Z_RLE: number;
        Z_FIXED: number;
        Z_DEFAULT_STRATEGY: number;
        Z_BINARY: number;
        Z_TEXT: number;
        Z_ASCII: number;
        Z_UNKNOWN: number;
        Z_DEFLATED: number;
        Z_NULL: number;
    }
    export module Zlib {
        export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }
        export interface Gzip extends ReadWriteStream { }
        export interface Gunzip extends ReadWriteStream { }
        export interface Deflate extends ReadWriteStream { }
        export interface Inflate extends ReadWriteStream { }
        export interface DeflateRaw extends ReadWriteStream { }
        export interface InflateRaw extends ReadWriteStream { }
        export interface Unzip extends ReadWriteStream { }
    }


    // ---------- "os" module ----------
    export interface Os {
        tmpDir(): string;
        hostname(): string;
        type(): string;
        platform(): string;
        arch(): string;
        release(): string;
        uptime(): number;
        loadavg(): number[];
        totalmem(): number;
        freemem(): number;
        cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
        networkInterfaces(): any;
        EOL: string;
    }


    // ---------- "https" module ----------
    export interface Https {
        Agent: new(options?: Https.RequestOptions) => Https.Agent;

        createServer(options: Https.ServerOptions, requestListener?: Function): Https.Server;
        request(options: Https.RequestOptions, callback?: (res: NodeEventEmitter) => void): Http.ClientRequest;
        get(options: Https.RequestOptions, callback?: (res: NodeEventEmitter) => void): Http.ClientRequest;
        globalAgent: Https.Agent;
    }
    export module Https {
        export interface ServerOptions {
            pfx?: any;
            key?: any;
            passphrase?: string;
            cert?: any;
            ca?: any;
            crl?: any;
            ciphers?: string;
            honorCipherOrder?: boolean;
            requestCert?: boolean;
            rejectUnauthorized?: boolean;
            NPNProtocols?: any;
            SNICallback?: (servername: string) => any;
        }
        export interface RequestOptions {
            host?: string;
            hostname?: string;
            port?: number;
            path?: string;
            method?: string;
            headers?: any;
            auth?: string;
            agent?: any;
            pfx?: any;
            key?: any;
            passphrase?: string;
            cert?: any;
            ca?: any;
            ciphers?: string;
            rejectUnauthorized?: boolean;
        }
        export interface Agent {
            maxSockets: number;
            sockets: any;
            requests: any;
        }
        export interface Server extends Tls.Server { }
    }


    // ---------- "punycode" module ----------
    export interface PunyCode {
        decode(string: string): string;
        encode(string: string): string;
        toUnicode(domain: string): string;
        toASCII(domain: string): string;
        ucs2: {
            decode(string: string): string;
            encode(codePoints: number[]): string;
        }
        version: any;
    }


    // ---------- "repl" module ----------
    export interface Repl {
        start(options: Repl.ReplOptions): NodeEventEmitter;
    }
    export module Repl {
        export interface ReplOptions {
            prompt?: string;
            input?: ReadableStream;
            output?: WritableStream;
            terminal?: boolean;
            eval?: Function;
            useColors?: boolean;
            useGlobal?: boolean;
            ignoreUndefined?: boolean;
            writer?: Function;
        }
    }


    // ---------- "readline" module ----------
    export interface ReadLine {
        createInterface(options: ReadLine.ReadLineOptions): ReadLine.ReadLine;
    }
    export module ReadLine {
        export interface ReadLine extends NodeEventEmitter {
            setPrompt(prompt: string, length: number): void;
            prompt(preserveCursor?: boolean): void;
            question(query: string, callback: Function): void;
            pause(): void;
            resume(): void;
            close(): void;
            write(data: any, key?: any): void;
        }
        export interface ReadLineOptions {
            input: ReadableStream;
            output: WritableStream;
            completer?: Function;
            terminal?: boolean;
        }
    }


    // ---------- "vm" module ----------
    export interface Vm {
        runInThisContext(code: string, filename?: string): void;
        runInNewContext(code: string, sandbox?: Vm.Context, filename?: string): void;
        runInContext(code: string, context: Vm.Context, filename?: string): void;
        createContext(initSandbox?: Vm.Context): Vm.Context;
        createScript(code: string, filename?: string): Vm.Script;
    }
    export module Vm {
        export interface Context { }
        export interface Script {
            runInThisContext(): void;
            runInNewContext(sandbox?: Context): void;
        }
    }


    // ---------- "child_process" module ----------
    export interface ChildProcess {
        spawn(command: string, args?: string[], options?: {
            cwd?: string;
            stdio?: any;
            custom?: any;
            env?: any;
            detached?: boolean;
        }): ChildProcess.ChildProcess;
        exec(command: string, options: {
            cwd?: string;
            stdio?: any;
            customFds?: any;
            env?: any;
            encoding?: string;
            timeout?: number;
            maxBuffer?: number;
            killSignal?: string;
        }, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) =>void ): ChildProcess.ChildProcess;
        exec(command: string, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) =>void ): ChildProcess.ChildProcess;
        execFile(file: string, args: string[], options: {
            cwd?: string;
            stdio?: any;
            customFds?: any;
            env?: any;
            encoding?: string;
            timeout?: number;
            maxBuffer?: string;
            killSignal?: string;
        }, callback: (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) =>void ): ChildProcess.ChildProcess;
        fork(modulePath: string, args?: string[], options?: {
            cwd?: string;
            env?: any;
            encoding?: string;
        }): ChildProcess.ChildProcess;
    }
    export module ChildProcess {
        export interface ChildProcess extends NodeEventEmitter {
            stdin: WritableStream;
            stdout: ReadableStream;
            stderr: ReadableStream;
            pid: number;
            kill(signal?: string): void;
            send(message: any, sendHandle: any): void;
            disconnect(): void;
        }
    }


    // ---------- "url" module ----------
    export interface Url {
        parse(urlStr: string, parseQueryString?: boolean , slashesDenoteHost?: boolean ): Url.Url;
        format(url: Url.UrlOptions): string;
        resolve(from: string, to: string): string;
    }
    export module Url {
        export interface Url {
            href: string;
            protocol: string;
            auth: string;
            hostname: string;
            port: string;
            host: string;
            pathname: string;
            search: string;
            query: string;
            slashes: boolean;
            hash: string;
        }
        export interface UrlOptions {
            protocol?: string;
            auth?: string;
            hostname?: string;
            port?: string;
            host?: string;
            pathname?: string;
            search?: string;
            query?: any;
        }
    }


    // ---------- "dns" module ----------
    export interface Dns {
        lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) =>void ): string;
        lookup(domain: string, callback: (err: Error, address: string, family: number) =>void ): string;
        resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolve(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolve4(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolve6(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolveMx(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolveTxt(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolveSrv(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolveNs(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        resolveCname(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
        reverse(ip: string, callback: (err: Error, domains: string[]) =>void ): string[];
    }


    // ---------- "net" module ----------
    export interface Net {
        Socket: new(options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }) => Net.Socket;

        createServer(connectionListener?: (socket: Net.Socket) =>void ): Net.Server;
        createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: Net.Socket) =>void ): Net.Server;
        connect(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): Net.Socket;
        connect(port: number, host?: string, connectionListener?: Function): Net.Socket;
        connect(path: string, connectionListener?: Function): Net.Socket;
        createConnection(options: { allowHalfOpen?: boolean; }, connectionListener?: Function): Net.Socket;
        createConnection(port: number, host?: string, connectionListener?: Function): Net.Socket;
        createConnection(path: string, connectionListener?: Function): Net.Socket;
        isIP(input: string): number;
        isIPv4(input: string): boolean;
        isIPv6(input: string): boolean;
    }
    export module Net {
        export interface Socket extends ReadWriteStream {

            // Extended base methods
            write(buffer: NodeBuffer): boolean;
            write(buffer: NodeBuffer, cb?: Function): boolean;
            write(str: string, cb?: Function): boolean;
            write(str: string, encoding?: string, cb?: Function): boolean;
            write(str: string, encoding?: string, fd?: string): boolean;

            connect(port: number, host?: string, connectionListener?: Function): void;
            connect(path: string, connectionListener?: Function): void;
            bufferSize: number;
            setEncoding(encoding?: string): void;
            write(data: any, encoding?: string, callback?: Function): void;
            destroy(): void;
            pause(): void;
            resume(): void;
            setTimeout(timeout: number, callback?: Function): void;
            setNoDelay(noDelay?: boolean): void;
            setKeepAlive(enable?: boolean, initialDelay?: number): void;
            address(): { port: number; family: string; address: string; };
            remoteAddress: string;
            remotePort: number;
            bytesRead: number;
            bytesWritten: number;

            // Extended base methods
            end(): void;
            end(buffer: NodeBuffer, cb?: Function): void;
            end(str: string, cb?: Function): void;
            end(str: string, encoding?: string, cb?: Function): void;
            end(data?: any, encoding?: string): void;
        }
        export interface Server extends Socket {
            listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
            listen(path: string, listeningListener?: Function): void;
            listen(handle: any, listeningListener?: Function): void;
            close(callback?: Function): void;
            address(): { port: number; family: string; address: string; };
            maxConnections: number;
            connections: number;
        }
    }


    // ---------- "dgram" module ----------
    export interface Dgram {
        createSocket(type: string, callback?: Function): Dgram.Socket;
    }
    export module Dgram {
        interface Socket extends NodeEventEmitter {
            send(buf: NodeBuffer, offset: number, length: number, port: number, address: string, callback?: Function): void;
            bind(port: number, address?: string): void;
            close(): void;
            address: { address: string; family: string; port: number; };
            setBroadcast(flag: boolean): void;
            setMulticastTTL(ttl: number): void;
            setMulticastLoopback(flag: boolean): void;
            addMembership(multicastAddress: string, multicastInterface?: string): void;
            dropMembership(multicastAddress: string, multicastInterface?: string): void;
        }
    }


    // ---------- "fs" module ----------
    export interface Fs {
        rename(oldPath: string, newPath: string, callback?: (err?: ErrnoException) => void): void;
        renameSync(oldPath: string, newPath: string): void;
        truncate(path: string, callback?: (err?: ErrnoException) => void): void;
        truncate(path: string, len: number, callback?: (err?: ErrnoException) => void): void;
        truncateSync(path: string, len?: number): void;
        ftruncate(fd: number, callback?: (err?: ErrnoException) => void): void;
        ftruncate(fd: number, len: number, callback?: (err?: ErrnoException) => void): void;
        ftruncateSync(fd: number, len?: number): void;
        chown(path: string, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
        chownSync(path: string, uid: number, gid: number): void;
        fchown(fd: number, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
        fchownSync(fd: number, uid: number, gid: number): void;
        lchown(path: string, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
        lchownSync(path: string, uid: number, gid: number): void;
        chmod(path: string, mode: number, callback?: (err?: ErrnoException) => void): void;
        chmod(path: string, mode: string, callback?: (err?: ErrnoException) => void): void;
        chmodSync(path: string, mode: number): void;
        chmodSync(path: string, mode: string): void;
        fchmod(fd: number, mode: number, callback?: (err?: ErrnoException) => void): void;
        fchmod(fd: number, mode: string, callback?: (err?: ErrnoException) => void): void;
        fchmodSync(fd: number, mode: number): void;
        fchmodSync(fd: number, mode: string): void;
        lchmod(path: string, mode: number, callback?: (err?: ErrnoException) => void): void;
        lchmod(path: string, mode: string, callback?: (err?: ErrnoException) => void): void;
        lchmodSync(path: string, mode: number): void;
        lchmodSync(path: string, mode: string): void;
        stat(path: string, callback?: (err: ErrnoException, stats: Fs.Stats) => any): void;
        lstat(path: string, callback?: (err: ErrnoException, stats: Fs.Stats) => any): void;
        fstat(fd: number, callback?: (err: ErrnoException, stats: Fs.Stats) => any): void;
        statSync(path: string): Fs.Stats;
        lstatSync(path: string): Fs.Stats;
        fstatSync(fd: number): Fs.Stats;
        link(srcpath: string, dstpath: string, callback?: (err?: ErrnoException) => void): void;
        linkSync(srcpath: string, dstpath: string): void;
        symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: ErrnoException) => void): void;
        symlinkSync(srcpath: string, dstpath: string, type?: string): void;
        readlink(path: string, callback?: (err: ErrnoException, linkString: string) => any): void;
        readlinkSync(path: string): string;
        realpath(path: string, callback?: (err: ErrnoException, resolvedPath: string) => any): void;
        realpath(path: string, cache: {[path: string]: string}, callback: (err: ErrnoException, resolvedPath: string) =>any): void;
        realpathSync(path: string, cache?: {[path: string]: string}): void;
        unlink(path: string, callback?: (err?: ErrnoException) => void): void;
        unlinkSync(path: string): void;
        rmdir(path: string, callback?: (err?: ErrnoException) => void): void;
        rmdirSync(path: string): void;
        mkdir(path: string, callback?: (err?: ErrnoException) => void): void;
        mkdir(path: string, mode: number, callback?: (err?: ErrnoException) => void): void;
        mkdir(path: string, mode: string, callback?: (err?: ErrnoException) => void): void;
        mkdirSync(path: string, mode?: number): void;
        mkdirSync(path: string, mode?: string): void;
        readdir(path: string, callback?: (err: ErrnoException, files: string[]) => void): void;
        readdirSync(path: string): string[];
        close(fd: number, callback?: (err?: ErrnoException) => void): void;
        closeSync(fd: number): void;
        open(path: string, flags: string, callback?: (err: ErrnoException, fd: number) => any): void;
        open(path: string, flags: string, mode: number, callback?: (err: ErrnoException, fd: number) => any): void;
        open(path: string, flags: string, mode: string, callback?: (err: ErrnoException, fd: number) => any): void;
        openSync(path: string, flags: string, mode?: number): number;
        openSync(path: string, flags: string, mode?: string): number;
        utimes(path: string, atime: number, mtime: number, callback?: (err?: ErrnoException) => void): void;
        utimesSync(path: string, atime: number, mtime: number): void;
        futimes(fd: number, atime: number, mtime: number, callback?: (err?: ErrnoException) => void): void;
        futimesSync(fd: number, atime: number, mtime: number): void;
        fsync(fd: number, callback?: (err?: ErrnoException) => void): void;
        fsyncSync(fd: number): void;
        write(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: ErrnoException, written: number, buffer: NodeBuffer) => void): void;
        writeSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
        read(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: ErrnoException, bytesRead: number, buffer: NodeBuffer) => void): void;
        readSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
        readFile(filename: string, encoding: string, callback: (err: ErrnoException, data: string) => void): void;
        readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: ErrnoException, data: string) => void): void;
        readFile(filename: string, options: { flag?: string; }, callback: (err: ErrnoException, data: NodeBuffer) => void): void;
        readFile(filename: string, callback: (err: ErrnoException, data: NodeBuffer) => void ): void;
        readFileSync(filename: string, encoding: string): string;
        readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
        readFileSync(filename: string, options?: { flag?: string; }): NodeBuffer;
        writeFile(filename: string, data: any, callback?: (err: ErrnoException) => void): void;
        writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: ErrnoException) => void): void;
        writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: ErrnoException) => void): void;
        writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
        writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
        appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: ErrnoException) => void): void;
        appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: ErrnoException) => void): void;
        appendFile(filename: string, data: any, callback?: (err: ErrnoException) => void): void;
        appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
        appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
        watchFile(filename: string, listener: (curr: Fs.Stats, prev: Fs.Stats) => void): void;
        watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Fs.Stats, prev: Fs.Stats) => void): void;
        unwatchFile(filename: string, listener?: (curr: Fs.Stats, prev: Fs.Stats) => void): void;
        watch(filename: string, listener?: (event: string, filename: string) => any): Fs.FSWatcher;
        watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): Fs.FSWatcher;
        exists(path: string, callback?: (exists: boolean) => void): void;
        existsSync(path: string): boolean;
        createReadStream(path: string, options?: {
            flags?: string;
            encoding?: string;
            fd?: string;
            mode?: number;
            bufferSize?: number;
        }): Fs.ReadStream;
        createReadStream(path: string, options?: {
            flags?: string;
            encoding?: string;
            fd?: string;
            mode?: string;
            bufferSize?: number;
        }): Fs.ReadStream;
        createWriteStream(path: string, options?: {
            flags?: string;
            encoding?: string;
            string?: string;
        }): Fs.WriteStream;
    }
    export module Fs {
        export interface Stats {
            isFile(): boolean;
            isDirectory(): boolean;
            isBlockDevice(): boolean;
            isCharacterDevice(): boolean;
            isSymbolicLink(): boolean;
            isFIFO(): boolean;
            isSocket(): boolean;
            dev: number;
            ino: number;
            mode: number;
            nlink: number;
            uid: number;
            gid: number;
            rdev: number;
            size: number;
            blksize: number;
            blocks: number;
            atime: Date;
            mtime: Date;
            ctime: Date;
        }
        export interface FSWatcher extends NodeEventEmitter {
            close(): void;
        }
        export interface ReadStream extends ReadableStream { }
        export interface WriteStream extends WritableStream { }
    }


    // ---------- "path" module ----------
    export interface Path {
        normalize(p: string): string;
        join(...paths: any[]): string;
        resolve(...pathSegments: any[]): string;
        relative(from: string, to: string): string;
        dirname(p: string): string;
        basename(p: string, ext?: string): string;
        extname(p: string): string;
        sep: string;
    }


    // ---------- "string_decoder" module ----------
    export interface StringDecoder {
        StringDecoder: new(encoding: string) => StringDecoder.StringDecoder;
    }
    export module StringDecoder {
        export interface StringDecoder {
            write(buffer: NodeBuffer): string;
            detectIncompleteChar(buffer: NodeBuffer): number;
        }
    }


    // ---------- "tls" module ----------
    export interface Tls {
        CLIENT_RENEG_LIMIT: number;
        CLIENT_RENEG_WINDOW: number;
        createServer(options: Tls.TlsOptions, secureConnectionListener?: (cleartextStream: Tls.ClearTextStream) =>void ): Tls.Server;
        connect(options: Tls.TlsOptions, secureConnectionListener?: () =>void ): Tls.ClearTextStream;
        connect(port: number, host?: string, options?: Tls.ConnectionOptions, secureConnectListener?: () =>void ): Tls.ClearTextStream;
        connect(port: number, options?: Tls.ConnectionOptions, secureConnectListener?: () =>void ): Tls.ClearTextStream;
        createSecurePair(credentials?: Crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): Tls.SecurePair;
    }
    export module Tls {
        export interface TlsOptions {
            pfx?: any;   //string or buffer
            key?: any;   //string or buffer
            passphrase?: string;
            cert?: any;
            ca?: any;    //string or buffer
            crl?: any;   //string or string array
            ciphers?: string;
            honorCipherOrder?: any;
            requestCert?: boolean;
            rejectUnauthorized?: boolean;
            NPNProtocols?: any;  //array or Buffer;
            SNICallback?: (servername: string) => any;
        }
        export interface ConnectionOptions {
            host?: string;
            port?: number;
            socket?: Net.Socket;
            pfx?: any;   //string | Buffer
            key?: any;   //string | Buffer
            passphrase?: string;
            cert?: any;  //string | Buffer
            ca?: any;    //Array of string | Buffer
            rejectUnauthorized?: boolean;
            NPNProtocols?: any;  //Array of string | Buffer
            servername?: string;
        }
        export interface Server extends Net.Server {
            // Extended base methods
            listen(port: number, host?: string, backlog?: number, listeningListener?: Function): void;
            listen(path: string, listeningListener?: Function): void;
            listen(handle: any, listeningListener?: Function): void;

            listen(port: number, host?: string, callback?: Function): void;
            close(): void;
            address(): { port: number; family: string; address: string; };
            addContext(hostName: string, credentials: {
                key: string;
                cert: string;
                ca: string;
            }): void;
            maxConnections: number;
            connections: number;
        }
        export interface ClearTextStream extends ReadWriteStream {
            authorized: boolean;
            authorizationError: Error;
            getPeerCertificate(): any;
            getCipher: {
                name: string;
                version: string;
            };
            address: {
                port: number;
                family: string;
                address: string;
            };
            remoteAddress: string;
            remotePort: number;
        }
        export interface SecurePair {
            encrypted: any;
            cleartext: any;
        }
    }


    // ---------- "crypto" module ----------
    export interface Crypto {
        createCredentials(details: Crypto.CredentialDetails): Crypto.Credentials;
        createHash(algorithm: string): Crypto.Hash;
        createHmac(algorithm: string, key: string): Crypto.Hmac;
        createCipher(algorithm: string, password: any): Crypto.Cipher;
        createCipheriv(algorithm: string, key: any, iv: any): Crypto.Cipher;
        createSign(algorithm: string): Crypto.Signer;
        createVerify(algorith: string): Crypto.Verify;
        createDiffieHellman(prime_length: number): Crypto.DiffieHellman;
        createDiffieHellman(prime: number, encoding?: string): Crypto.DiffieHellman;
        getDiffieHellman(group_name: string): Crypto.DiffieHellman;
        pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: string) => any): void;
        randomBytes(size: number): NodeBuffer;
        randomBytes(size: number, callback: (err: Error, buf: NodeBuffer) =>void ): void;
        pseudoRandomBytes(size: number): NodeBuffer;
        pseudoRandomBytes(size: number, callback: (err: Error, buf: NodeBuffer) =>void ): void;
    }
    export module Crypto {
        export interface CredentialDetails {
            pfx: string;
            key: string;
            passphrase: string;
            cert: string;
            ca: any;    //string | string array
            crl: any;   //string | string array
            ciphers: string;
        }
        export interface Credentials { context?: any; }
        export interface Hash {
            update(data: any, input_encoding?: string): Hash;
            digest(encoding?: string): string;
        }
        export interface Hmac {
            update(data: any): void;
            digest(encoding?: string): void;
        }
        export interface Cipher {
            update(data: any, input_encoding?: string, output_encoding?: string): string;
            final(output_encoding?: string): string;
            setAutoPadding(auto_padding: boolean): void;
            createDecipher(algorithm: string, password: any): Decipher;
            createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
        }
        export interface Decipher {
            update(data: any, input_encoding?: string, output_encoding?: string): void;
            final(output_encoding?: string): string;
            setAutoPadding(auto_padding: boolean): void;
        }
        export interface Signer {
            update(data: any): void;
            sign(private_key: string, output_format: string): string;
        }
        export interface Verify {
            update(data: any): void;
            verify(object: string, signature: string, signature_format?: string): boolean;
        }
        export interface DiffieHellman {
            generateKeys(encoding?: string): string;
            computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
            getPrime(encoding?: string): string;
            getGenerator(encoding: string): string;
            getPublicKey(encoding?: string): string;
            getPrivateKey(encoding?: string): string;
            setPublicKey(public_key: string, encoding?: string): void;
            setPrivateKey(public_key: string, encoding?: string): void;
        }
    }


    // ---------- "stream" module ----------
    export interface Stream {
        Readable: new(opts?: Stream.ReadableOptions) => Stream.Readable;
        Writable: new(opts?: Stream.WritableOptions) => Stream.Writable;
        Duplex: new(opts?: Stream.DuplexOptions) => Stream.Duplex;
        Transform: new(opts?: Stream.TransformOptions) => Stream.Transform;
    }
    export module Stream {
        export interface ReadableOptions {
            highWaterMark?: number;
            encoding?: string;
            objectMode?: boolean;
        }
        export interface Readable extends Events.EventEmitter, ReadableStream {
            readable: boolean;
            _read(size: number): void;
            read(size?: number): any;
            setEncoding(encoding: string): void;
            pause(): void;
            resume(): void;
            pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
            unpipe<T extends WritableStream>(destination?: T): void;
            unshift(chunk: string): void;
            unshift(chunk: NodeBuffer): void;
            wrap(oldStream: ReadableStream): ReadableStream;
            push(chunk: any, encoding?: string): boolean;
        }
        export interface WritableOptions {
            highWaterMark?: number;
            decodeStrings?: boolean;
        }
        export interface Writable extends Events.EventEmitter, WritableStream {
            writable: boolean;
            _write(data: NodeBuffer, encoding: string, callback: Function): void;
            _write(data: string, encoding: string, callback: Function): void;
            write(buffer: NodeBuffer, cb?: Function): boolean;
            write(str: string, cb?: Function): boolean;
            write(str: string, encoding?: string, cb?: Function): boolean;
            end(): void;
            end(buffer: NodeBuffer, cb?: Function): void;
            end(str: string, cb?: Function): void;
            end(str: string, encoding?: string, cb?: Function): void;
        }
        export interface DuplexOptions extends ReadableOptions, WritableOptions {
            allowHalfOpen?: boolean;
        }

        // Note: Duplex extends both Readable and Writable.
        export interface Duplex extends Readable, ReadWriteStream {
            writable: boolean;
            _write(data: NodeBuffer, encoding: string, callback: Function): void;
            _write(data: string, encoding: string, callback: Function): void;
            write(buffer: NodeBuffer, cb?: Function): boolean;
            write(str: string, cb?: Function): boolean;
            write(str: string, encoding?: string, cb?: Function): boolean;
            end(): void;
            end(buffer: NodeBuffer, cb?: Function): void;
            end(str: string, cb?: Function): void;
            end(str: string, encoding?: string, cb?: Function): void;
        }
        export interface TransformOptions extends ReadableOptions, WritableOptions {}

        // Note: Transform lacks the _read and _write methods of Readable/Writable.
        export interface Transform extends Events.EventEmitter, ReadWriteStream {
            readable: boolean;
            writable: boolean;
            _transform(chunk: NodeBuffer, encoding: string, callback: Function): void;
            _transform(chunk: string, encoding: string, callback: Function): void;
            _flush(callback: Function): void;
            read(size?: number): any;
            setEncoding(encoding: string): void;
            pause(): void;
            resume(): void;
            pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
            unpipe<T extends WritableStream>(destination?: T): void;
            unshift(chunk: string): void;
            unshift(chunk: NodeBuffer): void;
            wrap(oldStream: ReadableStream): ReadableStream;
            push(chunk: any, encoding?: string): boolean;
            write(buffer: NodeBuffer, cb?: Function): boolean;
            write(str: string, cb?: Function): boolean;
            write(str: string, encoding?: string, cb?: Function): boolean;
            end(): void;
            end(buffer: NodeBuffer, cb?: Function): void;
            end(str: string, cb?: Function): void;
            end(str: string, encoding?: string, cb?: Function): void;
        }
        export interface PassThrough extends Transform {}
    }


    // ---------- "util" module ----------
    export interface Util {
        format(format: any, ...param: any[]): string;
        debug(string: string): void;
        error(...param: any[]): void;
        puts(...param: any[]): void;
        print(...param: any[]): void;
        log(string: string): void;
        inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
        inspect(object: any, options: Util.InspectOptions): string;
        isArray(object: any): boolean;
        isRegExp(object: any): boolean;
        isDate(object: any): boolean;
        isError(object: any): boolean;
        inherits(constructor: any, superConstructor: any): void;
    }
    export module Util {
        export interface InspectOptions {
            showHidden?: boolean;
            depth?: number;
            colors?: boolean;
            customInspect?: boolean;
        }
    }


    // ---------- "assert" module ----------
    export interface Assert {
        (value: any, message?: string): void;
        AssertionError: new(options?: Assert.AssertionErrorOptions) => Assert.AssertionError;

        fail(actual?: any, expected?: any, message?: string, operator?: string): void;
        ok(value: any, message?: string): void;
        equal(actual: any, expected: any, message?: string): void;
        notEqual(actual: any, expected: any, message?: string): void;
        deepEqual(actual: any, expected: any, message?: string): void;
        notDeepEqual(acutal: any, expected: any, message?: string): void;
        strictEqual(actual: any, expected: any, message?: string): void;
        notStrictEqual(actual: any, expected: any, message?: string): void;
        throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        }
        doesNotThrow: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        }
        ifError(value: any): void;
    }
    export module Assert {
        export interface AssertionErrorOptions {
            message?: string;
            actual?: any;
            expected?: any;
            operator?: string;
            stackStartFunction?: Function
        }
        export interface AssertionError extends Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;
        }
    }


    // ---------- "tty" module ----------
    export interface Tty {
        ReadStream: new() => Tty.ReadStream;
        WriteStream: new() => Tty.WriteStream;
        isatty(fd: number): boolean;
    }
    export module Tty {
        export interface ReadStream extends Net.Socket {
            isRaw: boolean;
            setRawMode(mode: boolean): void;
        }
        export interface WriteStream extends Net.Socket {
            columns: number;
            rows: number;
        }
    }


    // ---------- "domain" module ----------
    export interface Domain {
        Domain: new() => Domain.Domain;
        create(): Domain.Domain;
    }
    export module Domain {
        export interface Domain extends Events.EventEmitter {
            run(fn: Function): void;
            add(emitter: NodeEventEmitter): void;
            remove(emitter: NodeEventEmitter): void;
            bind(cb: (err: Error, data: any) => any): any;
            intercept(cb: (data: any) => any): any;
            dispose(): void;

            addListener(event: string, listener: Function): Domain;
            on(event: string, listener: Function): Domain;
            once(event: string, listener: Function): Domain;
            removeListener(event: string, listener: Function): Domain;
            removeAllListeners(event?: string): Domain;
        }
    }
}
