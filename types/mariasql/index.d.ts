// Type definitions for mariasql v0.1.22
// Project: https://github.com/mscdex/node-mariasql
// Definitions by: MichaelBennett <https://github.com/bennett000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace mariasql {
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

    export interface MariaCallBackInfo {
        (result:MariaInfo):void
    }

    export interface MariaCallBackVoid {
        ():void
    }

    export interface Dictionary {
        [index: string]: any;
    }

    export interface MariaInfo {
        affectedRows: number;
        insertId: number;
        numRows: number
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
        on(signal:'end', cb:MariaCallBackInfo):MariaResult;
        on(signal:'error', cb:MariaCallBackError):MariaResult;
        on(signal:'row', cb:MariaCallBackRow):MariaResult;
        on(signal:'abort', cb:MariaCallBackVoid):MariaResult;
        on(signal:string, cb:MariaCallBackVoid):MariaResult;
        abort():void;
    }

    export interface MariaQuery {
        on(signal:'result', cb:MariaCallBackResult):MariaQuery;
        on(signal:'end', cb:MariaCallBackVoid):MariaQuery;
        on(signal:'abort', cb:MariaCallBackVoid):MariaQuery;
        on(signal:'error', cb:MariaCallBackError):MariaQuery;
        on(signal:string, cb:MariaCallBackVoid):MariaQuery;
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
        on(signal:'error', cb:MariaCallBackError): MariaClient;
        on(signal:'close', cb:MariaCallBackObject): MariaClient;
        on(signal:'connect', cb:MariaCallBackVoid): MariaClient;
        on(signal:string, cb:MariaCallBackVoid): MariaClient;
        connected: boolean;
        threadId: string;
    }

    export interface Client {
        new ():MariaClient;
        ():MariaClient;
        prototype: MariaClient;
    }
}

declare var Client:mariasql.Client;
export = Client;
