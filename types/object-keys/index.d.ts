// Type definitions for object-keys 1.0
// Project: https://github.com/ljharb/object-keys#readme
// Definitions by: Vitor Luiz Cavalcanti <https://github.com/VitorLuizC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function objectKeys(object: object): string[];

declare namespace objectKeys {
    function shim(): typeof objectKeys;
}

export = objectKeys;
