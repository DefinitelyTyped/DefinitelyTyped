// Type definitions for riot.js (ext/render.js)
// Project: https://github.com/moot/riotjs
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryStatic {
    render(template?:string, data?:any):string;
}
