// Type definitions for nice-try 2.0
// Project: https://github.com/electerious/nice-try
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function niceTry<T>(fn: () => T): T | undefined;
declare function niceTry(val?: any): undefined;

export = niceTry;
