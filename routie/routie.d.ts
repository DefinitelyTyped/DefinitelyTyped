// Type definitions for routie 0.3.0
// Project: https://github.com/jgallen23/routie
// Definitions by: Adilson <https://github.com/Adilson>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Route {
    constructor(path: string, name: string);
    addHandler(fn: Function): void;
    removeHandler(fn: Function): void;
    run(params: any): void;
    match(path: string, params: any): bool;
    toURL(params: any): string;
}

function routie(path: string, fn: Function): void;