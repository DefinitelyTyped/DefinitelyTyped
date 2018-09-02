// Type definitions for di 0.0
// Project: https://github.com/vojtajina/node-di
// Definitions by: John J Barton <https://github.com/johnjbarton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

export class Injector {
    get(dep: string): {};
    invoke(fn: (context: {}, deps: Array<{}>) => {}, context: {}): {};
    instantiate({prototype: {}}): {};
    createChild(modules: Array<{}>): Injector;
    constructor(modules?: Array<{}>, parent?: Injector);
}
