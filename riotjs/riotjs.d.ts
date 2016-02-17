// Type definitions for riot.js
// Project: https://github.com/moot/riotjs
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryStatic {
    riot: string;
    observable(el:any):any;
    route(to:any):void;
}
