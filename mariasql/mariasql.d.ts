// Type definitions for mariasql v0.1.22
// Project: https://github.com/mscdex/node-mariasql
// Definitions by: MichaelBennett <https://github.com/bennett000/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module mariasql {
    export interface MariaCallBackError {
        (error:Error):void
    }

    export interface MariaCallBackResult {
        (result:MariaResult):void
    }

    export interface MariaCallBackRow {
        (result:Array<any>):void
    }

    export interface MariaCallBackBoolean {
        (result:boolean):void
    }

    export interface MariaCallBackObject {
        (result:Object):void
    }

    export interface MariaCallBackVoid {
        ():void
    }

    export interface Dictionary {
        [index: string]: any;
    }

    export interface MariaPreparedQuery {
        (values:Dictionary):string;
        (values:Array<any>):string;
    }

    export interface ClientConfig {
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

    export interface MariaResult {
        on(signal:string, cb:MariaCallBackObject):MariaResult; // signal 'end'
        on(signal:string, cb:MariaCallBackError):MariaResult;  // signal 'error'
        on(signal:string, cb:MariaCallBackRow):MariaResult;    // signal 'row'
        on(signal:string, cb:MariaCallBackVoid):MariaResult;   // signal 'abort'
        abort():void;
    }

    export interface MariaQuery {
        on(signal:string, cb:MariaCallBackResult):MariaQuery; // signal 'result'
        on(signal:string, cb:MariaCallBackVoid):MariaQuery;   // signal 'end'
        on(signal:string, cb:MariaCallBackVoid):MariaQuery;   // signal 'abort'
        on(signal:string, cb:MariaCallBackError):MariaQuery;  // signal 'error'
        abort():void;
    }

    export interface MariaClient {
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

    export interface Client {
        new ():MariaClient;
        ():MariaClient;
        prototype: MariaClient;
    }
}

declare module "mariasql" {
    var Client:mariasql.Client;
    export = Client;
}