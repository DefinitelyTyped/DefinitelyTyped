// Type definitions for ngStomp
// Project: https://github.com/beevelop/ng-stomp
// Definitions by: Lukasz Potapczuk <https://github.com/lpotapczuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../angularjs/angular.d.ts" />


interface ngStomp {
        sock:any;
        stomp:any;
        debug:any;
        off: any;

        setDebug:(callback:Function)=> void;

        connect: (endpoint:string, headers?:Headers)=> angular.IHttpPromise<any>;

        disconnect: (callback:()=>void) => angular.IHttpPromise<any>;

        subscribe: (destination:string, callback:(payload:string, headers:Headers, res:Function)=>void, headers?:Headers, scope?:any) => any;

        unsubscribe: () => any;

        send: (destination:string, body:any, headers:Headers)=> any;

    }

     interface Headers {
        [key: string]: any;
    }






