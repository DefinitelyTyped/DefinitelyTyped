export function go(..._: any[]): any[];
export function add(a: any, b: any): any;
export function map(f: Function, iter: Iterator<any> | Iterable<any>): any;
export function filter(f: Function, iter: Iterator<any> | Iterable<any>): any;
export function find(f: Function, iter: Iterator<any> | Iterable<any>): any;
export function flat(iter: Iterable<any>, dep?: number): any;
export function flatMap(f: Function, iter: Iterator<any> | Iterable<any>): any;
export function every(f: EverF, iter: Iterator<any> | Iterable<any>): boolean;
export function delay(time: number, val: any): any;
export function range(start: number, stop?: number, step?: number): any;
export function log(..._: any): any;

export type EverF = (_: any) => boolean;
