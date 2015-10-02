// Type definitions for optimist
// Project: https://github.com/substack/node-optimist
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/optimist.d.ts

declare module "optimist" {

    interface Optimist {
        (args: string[]): Optimist
        default(name: string, value: any): Optimist;
        default(args: Object): Optimist;

        boolean(name: string): Optimist;
        boolean(names: string[]): Optimist;

        string(name: string): Optimist;
        string(names: string[]): Optimist;

        wrap(columns: number): Optimist;

        help(): void;
        showHelp(fn?: Function): void;

        usage(message: string): Optimist;

        demand(key: string): Optimist;
        demand(key: number): Optimist;
        demand(key: string[]): Optimist;

        alias(key: string, alias: string): Optimist;

        describe(key: string, desc: string): Optimist;

        options(obj: {[key: string]: {alias: string, describe: string, default?: any}}): Optimist;
        options(key: string, opt: Object): Optimist;

        check(fn: Function): Optimist;

        parse(args: string[]): Optimist;

        argv: any;
    }
    var t: Optimist;

    export = t;
}
