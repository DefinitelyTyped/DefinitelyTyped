// Type definitions for routie 0.3.2
// Project: https://github.com/jgallen23/routie
// Definitions by: Adilson <https://github.com/Adilson>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Route {
    constructor(path: string, name: string): Route;
    addHandler(fn: Function): void;
    removeHandler(fn: Function): void;
    run(params: any): void;
    match(path: string, params: any): boolean;
    toURL(params: any): string;
}

declare function routie(path: string): void;
declare function routie(path: string, fn: Function): void;
declare function routie(routes: { [key: string]: Function }): void;