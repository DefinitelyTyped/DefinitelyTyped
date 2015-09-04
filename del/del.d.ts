// Type definitions for del v1.2.0
// Project: https://github.com/sindresorhus/del
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../glob/glob.d.ts"/>

declare module "del" {
    import glob = require("glob");

    function Del(pattern: string): void;
    function Del(pattern: string, options: Del.Options): void;
    function Del(pattern: string, callback: (err: Error, deletedFiles: string[]) => any): void;
    function Del(pattern: string, options: Del.Options, callback: (err: Error, deletedFiles: string[]) => any): void;

    function Del(patterns: string[]): void;
    function Del(patterns: string[], options: Del.Options): void;
    function Del(patterns: string[], callback: (err: Error, deletedFiles: string[]) => any): void;
    function Del(patterns: string[], options: Del.Options, callback: (err: Error, deletedFiles: string[]) => any): void;

    module Del {
        function sync(pattern: string, options?: Options): void;
        function sync(patterns: string[], options?: Options): void;

        interface Options extends glob.IOptions {
            force?: boolean
        }
    }

    export = Del;
}
