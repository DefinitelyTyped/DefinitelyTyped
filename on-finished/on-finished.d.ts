// Type definitions for on-finished v2.2.0
// Project: https://github.com/jshttp/on-finished
// Definitions by: Honza Dvorsky <http://github.com/czechboy0>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'on-finished' {

    export function onFinished(msg:any, listener:Function):any;
    export function isFinished(msg:any):boolean;
}
