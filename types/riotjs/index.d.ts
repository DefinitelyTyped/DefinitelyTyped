// Type definitions for riot.js
// Project: https://github.com/moot/riotjs
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference path="riotjs-render.d.ts" />

interface JQueryStatic {
    riot: string;
    observable(el:any):any;
    route(to:any):void;
}
