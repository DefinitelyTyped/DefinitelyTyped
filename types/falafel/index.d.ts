// Type definitions for falafel 2.1
// Project: https://github.com/substack/node-falafel
// Definitions by: Przemysław Struciński <https://github.com/delprzemo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function falafel(src: string, opts: ((...args: any[]) => void) | object, fn?: (...args: any[]) => void): string;

export = falafel;
