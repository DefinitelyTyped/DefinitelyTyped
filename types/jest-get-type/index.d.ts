// Type definitions for jest-get-type 21.0
// Project: http://facebook.github.io/jest/
// Definitions by: Alex Coles <https://github.com/myabc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace getType {
    type ValueType =
    | 'array'
    | 'boolean'
    | 'function'
    | 'null'
    | 'number'
    | 'object'
    | 'regexp'
    | 'map'
    | 'set'
    | 'date'
    | 'string'
    | 'symbol'
    | 'undefined';
}

declare function getType(value: any): getType.ValueType;

export = getType;
