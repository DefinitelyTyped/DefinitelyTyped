// Type definitions for get-params 0.1
// Project: https://github.com/fahad19/get-params
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function GetParams(func: (...args: any[]) => unknown): string[];
export = GetParams;
export as namespace GetParams;
