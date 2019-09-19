// Type definitions for consola 1.x
// Project: https://github.com/nuxt/consola
// Definitions by: Jungwoo An <https://github.com/Jungwoo-An>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface LevelType {
    level: number;
    color: string;
    isError?: boolean;
}

export interface Reporter {
    log(logObj: any): void;
}

export interface Option {
    level?: number;
    types?: LevelType;
    reporters?: Reporter[];
}

export class Consola {
    constructor(option?: Option);

    add(reporter: Reporter): Consola;
    remove(reporter: Reporter): Consola;
    clear(): Consola;
    withScope(scope: string): void;
    start(...arguments: string[]): void;
    success(...arguments: string[]): void;
    info(...arguments: string[]): void;
    error(...arguments: Array<string | Error>): void;
}

export function start(...arguments: string[]): void;
export function success(...arguments: string[]): void;
export function info(...arguments: string[]): void;
export function error(...arguments: Array<string | Error>): void;
