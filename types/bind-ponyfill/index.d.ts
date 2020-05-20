// Type definitions for bind-ponyfill 0.1.0
// Project: https://www.npmjs.com/package/bind-ponyfill
// Definitions by: Steve Jenkins <https://github.com/skysteve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function ponyBind(fn: Function, that: any, ...args: Array<any>): Function;
export = ponyBind;
