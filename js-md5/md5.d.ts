// Type definitions for js-md5 v0.3.0
// Project: https://github.com/emn178/js-md5
// Definitions by: Roland Greim <https://github.com/tigerxy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped/

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {
    md5(value: string): string;
    md5(value: Array<any>): string;
    md5(value: Uint8Array): string;
}

interface JQueryStatic {
    md5(value: string): string;
    md5(value: Array<any>): string;
    md5(value: Uint8Array): string;
}

interface md5 {
    (value: string): string;
    (value: Array<any>): string;
    (value: Uint8Array): string;
}

interface String {
    md5(value: string): string;
    md5(value: Array<any>): string;
    md5(value: Uint8Array): string;
}

declare var md5: md5;
