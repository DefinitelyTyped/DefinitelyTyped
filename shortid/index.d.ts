// Type definitions for shortid
// Project: https://github.com/dylang/shortid
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare function generate(): string;
export declare function characters(string: string): string;
export declare function isValid(id: any): boolean;
export declare function worker(integer: number): void;
export declare function seed(float: number): void;
