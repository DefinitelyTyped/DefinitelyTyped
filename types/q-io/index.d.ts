// Type definitions for Q-io
// Project: https://github.com/kriskowal/q-io
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

//TODO add support for q-io/http-apps
//TODO add verified support for q-io/fs-mock
//TODO fix Readers/Writers properly
//TODO find solution for overloaded return types (QioFS.open/QioFS.read)
//     for some ideas see https://typescript.codeplex.com/discussions/461587#post1105930

declare namespace QioFS {

    //TODO how to define the multiple return types? use any for now?
    export function open(path: string, options?: any): Q.Promise<any>;
    //export function open(path:string, options?:any):Q.Promise<Qio.Reader>;
    //export function open(path:string, options?:any):Q.Promise<Qio.Writer>;
    //export function open(path:string, options?:any):Q.Promise<Buffer>;

    //TODO how to define the multiple return types? use any for now?
    export function read(path: string, options?: any): Q.Promise<any>;
    //export function read(path:string, options?:any):Q.Promise<string>;
    //export function read(path:string, options?:any):Q.Promise<Buffer>;

    export function write(path: string, content: Buffer, options?: any): Q.Promise<void>;
    export function write(path: string, content: string, options?: any): Q.Promise<void>;

    export function append(path: string, content: Buffer, options?: any): Q.Promise<void>;
    export function append(path: string, content: string, options?: any): Q.Promise<void>;

    export function copy(source: string, target: string): Q.Promise<void>;
    export function copyTree(source: string, target: string): Q.Promise<void>;

    export function list(path: string): Q.Promise<string[]>;
    export function listTree(path: string, guard?: (path: string, stat: any) => boolean): Q.Promise<string[]>;
    export function listDirectoryTree(path: string): Q.Promise<string[]>;

    export function makeDirectory(path: string, mode?: string): Q.Promise<void>;
    export function makeDirectory(path: string, mode?: number): Q.Promise<void>;
    export function makeTree(path: string, mode?: string): Q.Promise<void>;
    export function makeTree(path: string, mode?: number): Q.Promise<void>;

    export function remove(path: string): Q.Promise<void>;
    export function removeTree(path: string): Q.Promise<void>;

    export function rename(source: string, target: string): Q.Promise<void>;
    export function move(source: string, target: string): Q.Promise<void>;

    export function link(source: string, target: any): Q.Promise<void>;

    export function symbolicCopy(source: string, target: string, type: string): Q.Promise<void>;
    export function symbolicLink(target: string, link: string, type: string): Q.Promise<void>;

    export function chown(path: string, uid: number, gid: number): Q.Promise<void>;
    export function chmod(path: string, mode?: string): Q.Promise<void>;
    export function chmod(path: string, mode?: number): Q.Promise<void>;

    export function stat(path: string): Q.Promise<Stats>;
    export function statLink(path: string): Q.Promise<Stats>;
    export function statFd(fd: number): Q.Promise<Stats>;

    export function exists(path: string): Q.Promise<boolean>;

    export function isFile(path: string): Q.Promise<boolean>;
    export function isDirectory(path: string): Q.Promise<boolean>;
    export function isSymbolicLink(path: string): Q.Promise<boolean>;

    export function lastModified(path: string): Q.Promise<Date>;
    export function lastAccessed(path: string): Q.Promise<Date>;

    export function split(path: string): string[];
    export function join(...paths: string[]): string;
    export function join(paths: string[]): string;
    export function resolve(...path: string[]): string;
    export function resolve(paths: string[]): string;
    export function normal(...path: string[]): string;
    export function normal(paths: string[]): string;
    export function absolute(path: string): string;

    export function canonical(path: string): Q.Promise<string>;
    export function readLink(path: string): Q.Promise<string>;

    export function contains(parent: string, child: string): boolean;

    export function relative(source: string, target: string): Q.Promise<string>;

    export function relativeFromFile(source: string, target: string): string;
    export function relativeFromDirectory(source: string, target: string): string;

    export function isAbsolute(path: string): boolean;
    export function isRelative(path: string): boolean;
    export function isRoot(path: string): boolean;

    export function root(path: string): string;
    export function directory(path: string): string;
    export function base(path: string, extension: string): string;
    export function extension(path: string): string;

    //this should return a q-io/fs-mock MockFS
    export function reroot(path: string): typeof QioFS;

    export function toObject(path: string): { [path: string]: Buffer };

    //listed but not implemented by Q-io
    //export function glob(pattern):Q.Promise<string[]>;
    //export function match(pattern, path:string):Q.Promise<string[]>;

    //TODO link this to node.js FS module (no lazy clones)
    interface Stats {
        node: NodeStats;
        size: number;
    }
    interface NodeStats {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        node: NodeStats;
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
}

declare namespace QioHTTP {
    export function request(request: Request): Q.Promise<Response>;
    export function request(url: string): Q.Promise<Response>;

    export function read(request: Request): Q.Promise<string>;
    export function read(url: string): Q.Promise<string>;

    export function normalizeRequest(request: Request): Request;
    export function normalizeRequest(url: string): Request;
    export function normalizeResponse(response: Response): Response;

    interface Request {
        url: string;
        path: string;
        scriptName: string;
        pathInfo: string;
        version: string[];
        method: string;
        scheme: string;

        host: string;
        port: number;
        remoteHost: string;
        remotePort: number;

        headers: Headers;
        agent: any;
        body: any;
        node: any;
    }
    interface Response {
        status: number;
        headers: Headers;
        body: Qio.Reader
        onclose: () => void;
        node: any;
    }
    interface Headers {
        [name: string]: any;
        // [name:string]:any[];
    }
    interface Body extends Qio.Stream {

    }
    interface Application {
        (req: Request): Q.Promise<any>;
    }
}

declare namespace Qio {
    interface ForEachCallback {
        (chunk: Buffer): Q.Promise<any>;
        (chunk: string): Q.Promise<any>;
    }
    interface ForEach {
        forEach(callback: ForEachCallback): Q.Promise<void>;
    }

    interface Reader extends ForEach {
        read(charset: string): Q.Promise<string>;
        read(): Q.Promise<Buffer>;
        close(): void;
        node: NodeJS.ReadableStream;
    }
    interface Writer {
        write(content: string): void;
        write(content: Buffer): void;
        flush(): Q.Promise<void>;
        close(): void;
        destroy(): void;
        node: NodeJS.WritableStream;
    }

    interface Stream {
        read(charset: string): Q.Promise<string>;
        read(): Q.Promise<Buffer>;
        write(content: string): void;
        write(content: Buffer): void;
        flush(): Q.Promise<void>;
        close(): void;
        destroy(): void;
        node: any;
    }

    interface BufferReader extends QioBufferReader {

    }
}
interface QioBufferReader {
    new (): Qio.Reader;
    read(stream: Qio.Reader, charset: string): string;
    read(stream: Qio.Reader): Buffer;
    join(buffers: Buffer[]): Buffer;
}
interface QioBufferWriter {
    (writer: Buffer): Qio.Writer;
    Writer: Qio.Writer;
}
interface QioBufferStream {
    (buffer: Buffer, encoding: string): Qio.Stream
}

declare module "q-io/http" {
    import * as Q from "q";
    export = QioHTTP;
}
declare module "q-io/fs" {
    export = QioFS;
}
declare module "q-io/reader" {
    export = QioBufferReader;
}
declare module "q-io/writer" {
    export = QioBufferWriter;
}
declare module "q-io/buffer-stream" {
    export = QioBufferStream;
}
