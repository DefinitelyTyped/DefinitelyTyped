// Type definitions for js-md5 v0.3.0
// Project: https://github.com/emn178/js-md5
// Definitions by: Roland Greim <https://github.com/tigerxy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped/

interface JQuery {
    md5(value: string): string;
}

interface JQueryStatic {
    md5(value: string): string;
}

interface md5 {
    (value: string): string;
}

declare var md5: md5;
