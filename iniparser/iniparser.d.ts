// Type definitions for iniparser
// Project: https://github.com/shockie/node-iniparser
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare export function parse<T>(
    file: string,
    callback: (err: any, data: T) => void
): void;

declare export function parseSync<T>(file: string): T;

declare export function parseString<T>(data: string): T;
