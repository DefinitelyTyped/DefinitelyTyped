// Type definitions for is-object 1.0
// Project: https://github.com/ljharb/is-object
// Definitions by: Wilson Hobbs <https://github.com/wbhob>
//                 Jordan Harband <https://github.com/ljharb>
//                 Minh-Phuc Tran <https://github.com/phuctm97>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isObject;

declare function isObject(value: unknown): value is Record<string | symbol | number, unknown>;

declare namespace isObject {}
