// Type definitions for Squire 0.2.1
// Project: https://github.com/iammerrick/Squire.js
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare class Squire {
    constructor();
    constructor(context: string);
    mock(name: string, mock: any): Squire;
    mock(mocks: { [name: string]: any }): Squire;
    require(dependencies: string[], callback: Function, errback?: Function): Squire;
    store(name: string | string[]): Squire;
    clean(): Squire;
    clean(name: string | string[]): Squire;
    remove(): String;
    run(dependencies: string[], test: Function): (done: Function) => void;
}

declare namespace Squire {
    namespace Helpers {
        export function returns<T>(what: T): () => T;
        export function constructs<T>(what: T): () => (() => T);
    }
}

export = Squire;
