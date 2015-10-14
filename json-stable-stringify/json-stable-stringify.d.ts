// Type definitions for json-stable-stringify.js 1.0.0
// Project: https://github.com/substack/json-stable-stringify
// Definitions by: Matt Frantz <https://github.com/mhfrantz/>, Asana <http://www.asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "json-stable-stringify" {
    export interface KeyPair {
        key: string;
        value: any;
    }

    export interface Comparator {
      (a: Element, b: Element): number;
    }

    export interface Replacer {
      (key: string, value: any): any;
    }

    interface Options {
        cmp?: Comparator;
        space?: string | number;
        replacer?: Replacer;
    }

    export default function stringify(obj: any, opts?: stringify.Comparator | stringify.Options): string;
}
