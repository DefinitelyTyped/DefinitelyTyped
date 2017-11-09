// Type definitions for dedent 0.7
// Project: https://github.com/dmnd/dedent
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = dedent;

declare function dedent(literals: string): string;
declare function dedent(literals: TemplateStringsArray, ...placeholders: any[]): string;
declare namespace dedent {}
