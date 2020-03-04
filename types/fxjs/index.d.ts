// Type definitions for fxjs 0.15.0
// Project: https://github.com/marpple/FxJS.git
// Definitions by: minyeong <https://github.com/load28>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export function go(..._: any[]): any[];
export function add(a: any, b: any): any;
export function map(f: Function, iter: (Iterator<any> | Iterable<any>)): any;
export function filter(f: Function, iter: (Iterator<any> | Iterable<any>)): any;
export function find(f: Function, iter: (Iterator<any> | Iterable<any>)): any;
export function flat(f: Function, dep?: number): any;
export function flatMap(f: Function, iter: (Iterator<any> | Iterable<any>)): any;
export function every(f: EverF, iter: (Iterator<any> | Iterable<any>)): boolean;
export function delay(time: number, val: any): any;
export function log(..._: any): any;

type EverF = (_: any) => boolean;
