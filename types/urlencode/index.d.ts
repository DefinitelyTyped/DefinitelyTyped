// Type definitions for urlencode 1.1
// Project: https://github.com/node-modules/urlencode
// Definitions by: Hunter Tunnicliff <https://github.com/htunnicliff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Config {
    charset?: string
    maxKeys?: number | string
}

export interface DefaultObject {
    [key: string]: any
}

export function encode(str: any, charset?: string): string

export function decode(str: string, charset?: string): string

export function parse(qs: string, options?: Config): DefaultObject

export function parse(qs: string, sep?: string | number, eq?: string | number, options?: Config): DefaultObject

export function stringify(obj: any, prefix?: DefaultObject | string, options?: Config): string
