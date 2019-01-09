// Type definitions for @rimiti/stimmy 1.8
// Project: https://github.com/rimiti/stimmy
// Definitions by: Dimitri DO BAIRRO <https://github.com/rimiti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = replacer;

declare function replacer(start?: string, end?: string): (val: string, replace: {} | string[] | number[]) => string;
