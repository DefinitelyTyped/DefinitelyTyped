// Type definitions for fullname v2.1.0
// Project: https://www.npmjs.com/package/fullname
// Definitions by: Klaus Reimer <https://github.com/kayahr/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module "fullname" {
    function fullname(): Promise<string>;
    export = fullname;
}
