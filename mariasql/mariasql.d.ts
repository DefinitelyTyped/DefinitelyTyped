// Type definitions for mariasql v0.1.22
// Project: https://github.com/mscdex/node-mariasql
// Definitions by: MichaelBennett <https://github.com/bennett000/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/**
 */
interface MariaCallBackError {
    (error:Error):void
}

interface MariaCallBackResult {
    (result:MariaResult):void
}

interface MariaCallBackRow {
    (result:Array<any>):void
}

interface MariaCallBackBoolean {
    (result:boolean):void
}

interface MariaCallBackObject {
    (result:Object):void
}

interface MariaCallBackVoid {
    ():void
}

interface Dictionary {
    [index: string]: any;
}

interface MariaPreparedQuery {
    (values:Dictionary):string;
    (values:Array<any>):string;
}

interface ClientConfig {
    host: string;
    user: string;
    password: string;
    db?: string;
    port?: number;
    unixSocket?: string;
    keepQueries?: boolean;
    multiStatements?: boolean;
    connTimeout?: number;
    pingInterval?: number;
    secureAuth?: boolean;
    compress?: boolean;
    ssl?:any;
    local_infile?: boolean;
    read_default_group?: string;
    charset?: string;
}

declare class MariaResult {
    on(signal:string, cb:MariaCallBackObject):MariaResult; // signal 'end'
    on(signal:string, cb:MariaCallBackError):MariaResult;  // signal 'error'
    on(signal:string, cb:MariaCallBackRow):MariaResult;    // signal 'row'
    on(signal:string, cb:MariaCallBackVoid):MariaResult;   // signal 'abort'
    abort():void;
}

declare class MariaQuery {
    on(signal:string, cb:MariaCallBackResult):MariaQuery; // signal 'result'
    on(signal:string, cb:MariaCallBackVoid):MariaQuery;   // signal 'end'
    on(signal:string, cb:MariaCallBackVoid):MariaQuery;   // signal 'abort'
    on(signal:string, cb:MariaCallBackError):MariaQuery;  // signal 'error'
    abort():void;
}

declare class MariaClient {
    connect(config:ClientConfig):void;
    end():void;
    destroy():void;
    escape(query:string):string;
    query(q:string, placeHolders?:Dictionary, useArray?:boolean):MariaQuery;
    query(q:string, placeHolders?:Array<any>, useArray?:boolean):MariaQuery;
    query(q:string, useArray?:boolean):MariaQuery;
    prepare(query:string): MariaPreparedQuery;
    isMariaDB():boolean;
    on(signal:string, cb:MariaCallBackError): MariaClient;    // signal 'error'
    on(signal:string, cb:MariaCallBackObject): MariaClient;   // signal 'close'
    on(signal:string, cb:MariaCallBackVoid): MariaClient;     // signal 'connect'
    connected: boolean;
    threadId: string;
}

declare module 'mariasql' {
    export = MariaClient;
}

