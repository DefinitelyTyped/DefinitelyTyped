// Type definitions for json-stable-stringify.js 1.0.0
// Project: https://github.com/substack/json-stable-stringify
// Definitions by: Asana <http://www.asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "json-stable-stringify" {
    interface KeyPair {
        key: string;
        value: any;
    }

    interface Options {
        cmp?: (a: KeyPair, b: KeyPair) => number;
        space?: string | number;
        replacer?: (key: string, value: any) => any;
    }

    function json_stable(obj: Object, opts?: Options): string;
    export = json_stable;
}