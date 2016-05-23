// Type definitions for iniparser
// Project: https://github.com/shockie/node-iniparser
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare function parse<T>(
    file: string,
    callback: (err: any, data: T) => void
): void;

export declare function parseSync<T>(file: string): T;

export declare function parseString<T>(data: string): T;
