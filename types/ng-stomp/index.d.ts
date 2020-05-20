// Type definitions for ngStomp 0.2
// Project: https://github.com/beevelop/ng-stomp
// Definitions by: Lukasz Potapczuk <https://github.com/lpotapczuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

interface ngStomp {
    sock: any;
    stomp: any;
    debug: any;
    off: any;

    setDebug(callback: Function): void;

    connect(endpoint: string, headers?: ngStomp.Headers): angular.IHttpPromise<any>;

    disconnect(callback: () => void): angular.IHttpPromise<any>;

    subscribe(destination: string, callback: (payload: string, headers: ngStomp.Headers, res: Function) => void, headers?: ngStomp.Headers, scope?: any): any;

    unsubscribe(): any;

    send(destination: string, body: any, headers: ngStomp.Headers): any;
}

declare namespace ngStomp {
    interface Headers {
        [key: string]: any;
    }
}
