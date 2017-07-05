// Type definitions for jsonpath 0.2.11
// Project: https://www.npmjs.org/package/jsonpath
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>, Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



type PathComponent = string | number;

export declare function query(obj: any, pathExpression: string, count?: number): any[];
export declare function paths(obj: any, pathExpression: string, count?: number): PathComponent[][];
export declare function nodes(obj: any, pathExpression: string, count?: number): { path: PathComponent[]; value: any; }[];
export declare function value(obj: any, pathExpression: string): any;
export declare function value<T>(obj: any, pathExpression: string, newValue: T): T;
export declare function parent(obj: any, pathExpression: string): any;
export declare function apply(obj: any, pathExpression: string, fn: (x: any) => any): { path: PathComponent[]; value: any; }[];
export declare function parse(pathExpression: string): any[];
export declare function stringify(path: PathComponent[]): string;
