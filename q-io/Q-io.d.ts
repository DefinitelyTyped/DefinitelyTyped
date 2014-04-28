// Type definitions for Q-io
// Project:https://github.com/kriskowal/q-io
// Definitions by:Bart van der Schoor <https://github.com/Bartvds>
// Definitions:https://github.com/borisyankov/DefinitelyTyped

///<reference path="../node/node.d.ts" />
///<reference path="../q/Q.d.ts" />

//TODO add support for q-io/http-apps
//TODO add verified support for q-io/fs-mock
//TODO fix Readers/Writers properly
//TODO find solution for overloaded return types (QioFS.open/QioFS.read)
//     for some ideas see https://typescript.codeplex.com/discussions/461587#post1105930

declare module Qio {

    interface ForEachCallback {
		(chunk:NodeBuffer):q.Promise<any>;
		(chunk:string):q.Promise<any>;
	}
	interface ForEach {
		forEach(callback:ForEachCallback):q.Promise<void>;
	}

	interface Reader extends ForEach {
		read(charset:string):q.Promise<string>;
		read():q.Promise<NodeBuffer>;
		close():void;
		node:ReadableStream;
	}
	interface Writer {
		write(content:string):void;
		write(content:NodeBuffer):void;
		flush():q.Promise<void>;
		close():void;
		destroy():void;
		node:WritableStream;
	}

	interface Stream {
        read(charset:string):q.Promise<string>;
        read():q.Promise<NodeBuffer>;
        write(content:string):void;
        write(content:NodeBuffer):void;
        flush():q.Promise<void>;
        close():void;
        destroy():void;
        node:any;
	}

    export interface BufferReader extends QioBufferReader {

	}

    export interface QioBufferReader {
        new ():Reader;
        read(stream:Reader, charset:string):string;
        read(stream:Reader):NodeBuffer;
        join(buffers:NodeBuffer[]):NodeBuffer;
    }
    export interface QioBufferWriter {
        (writer:NodeBuffer):Writer;
        Writer:Qio.Writer;
    }
    export interface QioBufferStream {
        (buffer:NodeBuffer, encoding:string):Stream
    }
}


declare module "q-io/http" {
    import q                                       = require('q');

    export function request(request:Request):q.Promise<Response>;
    export function request(url:string):q.Promise<Response>;

    export function read(request:Request):q.Promise<string>;
    export function read(url:string):q.Promise<string >;

    export function normalizeRequest(request:Request):Request;
    export function normalizeRequest(url:string):Request;
    export function normalizeResponse(response:Response):Response;

    interface Request {
        url:string;
        path:string;
        scriptName:string;
        pathInfo:string;
        version:string[];
        method:string;
        scheme:string;

        host:string;
        port:number;
        remoteHost:string;
        remotePort:number;

        headers:Headers;
        agent:any;
        body:any;
        node:any;
    }
    interface Response {
        status:number;
        headers:Headers;
        body:Qio.Reader
        onclose:() => void;
        node:any;
    }
    interface Headers {
        [name:string]:any;
    }
    interface Body extends Qio.Stream {

    }
    interface Application {
        (req:Request):q.Promise<any>;
    }
}

declare module "q-io/fs" {
    import q = require('q');

//TODO how to define the multiple return types? use any for now?
    export function open(path:string, options?:any):q.Promise<any>;
    //export function open(path:string, options?:any):q.Promise<Qio.Reader>;
    //export function open(path:string, options?:any):q.Promise<Qio.Writer>;
    //export function open(path:string, options?:any):q.Promise<NodeBuffer>;

    //TODO how to define the multiple return types? use any for now?
    export function read(path:string, options?:any):q.Promise<any>;
    //export function read(path:string, options?:any):q.Promise<string>;
    //export function read(path:string, options?:any):q.Promise<NodeBuffer>;

    export function write(path:string, content:NodeBuffer, options?:any):q.Promise<void>;
    export function write(path:string, content:string, options?:any):q.Promise<void>;

    export function append(path:string, content:NodeBuffer, options?:any):q.Promise<void>;
    export function append(path:string, content:string, options?:any):q.Promise<void>;

    export function copy(source:string, target:string):q.Promise<void>;
    export function copyTree(source:string, target:string):q.Promise<void>;

    export function list(path:string):q.Promise<string[]>;
    export function listTree(path:string, guard?:(path:string, stat:any) => boolean):q.Promise<string[]>;
    export function listDirectoryTree(path:string):q.Promise<string[]>;

    export function makeDirectory(path:string, mode?:string):q.Promise<void>;
    export function makeDirectory(path:string, mode?:number):q.Promise<void>;
    export function makeTree(path:string, mode?:string):q.Promise<void>;
    export function makeTree(path:string, mode?:number):q.Promise<void>;

    export function remove(path:string):q.Promise<void>;
    export function removeTree(path:string):q.Promise<void>;

    export function rename(source:string, target:string):q.Promise<void>;
    export function move(source:string, target:string):q.Promise<void>;

    export function link(source:string, target:any):q.Promise<void>;

    export function symbolicCopy(source:string, target:string, type:string):q.Promise<void>;
    export function symbolicLink(target:string, link:string, type:string):q.Promise<void>;

    export function chown(path:string, uid:number, gid:number):q.Promise<void>;
    export function chmod(path:string, mode?:string):q.Promise<void>;
    export function chmod(path:string, mode?:number):q.Promise<void>;

    export function stat(path:string):q.Promise<Stats>;
    export function statLink(path:string):q.Promise<Stats>;
    export function statFd(fd:number):q.Promise<Stats>;

    export function exists(path:string):q.Promise<boolean>;

    export function isFile(path:string):q.Promise<boolean>;
    export function isDirectory(path:string):q.Promise<boolean>;
    export function isSymbolicLink(path:string):q.Promise<boolean>;

    export function lastModified(path:string):q.Promise<Date>;
    export function lastAccessed(path:string):q.Promise<Date>;

    export function split(path:string):string[];
    export function join(...paths:string[]):string;
    export function join(paths:string[]):string;
    export function resolve(...path:string[]):string;
    export function resolve(paths:string[]):string;
    export function normal(...path:string[]):string;
    export function normal(paths:string[]):string;
    export function absolute(path:string):string;

    export function canonical(path:string):q.Promise<string>;
    export function readLink(path:string):q.Promise<string>;

    export function contains(parent:string, child:string):boolean;

    export function relative(source:string, target:string):q.Promise<string>;

    export function relativeFromFile(source:string, target:string):string;
    export function relativeFromDirectory(source:string, target:string):string;

    export function isAbsolute(path:string):boolean;
    export function isRelative(path:string):boolean;
    export function isRoot(path:string):boolean;

    export function root(path:string):string;
    export function directory(path:string):string;
    export function base(path:string, extension:string):string;
    export function extension(path:string):string;

    //this should return a q-io/fs-mock MockFS
    //export function reroot(path:string):typeof QioFS;

    export function toObject(path:string):{[path:string]:NodeBuffer};

    //listed but not implemented by Q-io
    //export function glob(pattern):q.Promise<string[]>;
    //export function match(pattern, path:string):q.Promise<string[]>;

    //TODO link this to node.js FS module (no lazy clones)
    interface Stats {
        node:NodeStats;
        size:number;
    }
    interface NodeStats {
        isFile():boolean;
        isDirectory():boolean;
        isBlockDevice():boolean;
        isCharacterDevice():boolean;
        isSymbolicLink():boolean;
        isFIFO():boolean;
        isSocket():boolean;
        node:NodeStats;
        dev:number;
        ino:number;
        mode:number;
        nlink:number;
        uid:number;
        gid:number;
        rdev:number;
        size:number;
        blksize:number;
        blocks:number;
        atime:Date;
        mtime:Date;
        ctime:Date;
    }
}
declare module "q-io/reader" {
export = Qio.QioBufferReader;
}
declare module "q-io/writer" {
export = Qio.QioBufferWriter;
}
declare module "q-io/buffer-stream" {
export = Qio.QioBufferStream;
}
