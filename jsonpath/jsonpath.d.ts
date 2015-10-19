// Type definitions for jsonpath 0.1.3
// Project: https://www.npmjs.org/package/jsonpath
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "jsonpath" {

  type PathComponent = string|number;

  export function query(obj: any, pathExpression: string): any[];
  export function paths(obj: any, pathExpression: string): PathComponent[][];
  export function nodes(obj: any, pathExpression: string): { path: PathComponent[]; value: any; }[];
  export function value(obj: any, pathExpression: string): any;
  export function value(obj: any, pathExpression: string, newValue: any): any;
  export function parent(obj: any, pathExpression: string): any;
  export function apply(obj: any, pathExpression: string, fn: (x: any) => any): { path: PathComponent[]; value: any; }[];
  export function parse(pathExpression: string): any[];
  export function stringify(path: PathComponent[]): string;

}

