// Type definitions for jsonpath 0.1.3
// Project: https://www.npmjs.org/package/jsonpath
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



type PathComponent = string | number;

export declare function query(obj: any, pathExpression: string): any[];
export declare function paths(obj: any, pathExpression: string): PathComponent[][];
export declare function nodes(obj: any, pathExpression: string): { path: PathComponent[]; value: any; }[];
export declare function value(obj: any, pathExpression: string): any;
export declare function value(obj: any, pathExpression: string, newValue: any): any;
export declare function parent(obj: any, pathExpression: string): any;
export declare function apply(obj: any, pathExpression: string, fn: (x: any) => any): { path: PathComponent[]; value: any; }[];
export declare function parse(pathExpression: string): any[];
export declare function stringify(path: PathComponent[]): string;
