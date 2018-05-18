// Type definitions for trayballoon
// Project: https://github.com/sindresorhus/trayballoon
// Definitions by: André Eckardt <https://github.com/korve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare interface TrayballoonOptions {
    text:string
    title?:string
    icon?:string
    timeout?:number
    wait?:boolean
}

declare function trayballoonFn( opts:TrayballoonOptions, fn:Function ): void;
declare module "trayballoon" {
    export = trayballoonFn;
}