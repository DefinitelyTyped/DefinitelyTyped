// Type definitions for defaults-deep 0.2
// Project: https://github.com/jonschlinkert/defaults-deep
// Definitions by: Hugo Alliaume <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Obj {
    [k: string]: any;
}

declare function defaultsDeep(...objs: Obj[]): Obj;

export = defaultsDeep;
