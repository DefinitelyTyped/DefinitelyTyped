// Type definitions for split v0.3.3
// Project: https://github.com/dominictarr/split
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "split" {

    interface SplitOptions {
        maxLength: number
    }

    function split(matcher?:any, mapper?:any, options?: SplitOptions):any;

    export = split;
}