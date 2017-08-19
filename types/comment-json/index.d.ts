// Type definitions for comment-json 1.1
// Project: https://github.com/kaelzhang/node-comment-json
// Definitions by: Jason Dent <https://github.com/Jason3S>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Reviver = (k: number | string, v: any) => any;
export function parse(json: string, reviver?: Reviver, removes_comments?: boolean): any;
export function stringify(value: any, replacer?: any, space?: string | number): string;
