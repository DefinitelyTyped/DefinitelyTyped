// Type definitions for field 1.0.1
// Project: https://www.npmjs.com/package/field
// Definitions by: Leo Liang <https://github.com/aleung/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module field {
    export function get(topObj: any, fields: string): any;
    export function set(topObj: any, fields: string, value: any): any;
}
