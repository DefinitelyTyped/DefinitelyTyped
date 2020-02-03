// Type definitions for clarinet 0.12.4
// Project: https://github.com/dscape/clarinet
// Definitions by: corno <https://github.com/corno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Stream } from "stream"

export function parser(opt?: Options): CParser
export function createStream(opt?: Options): CStream

export declare type Options = {
    trim?: boolean
    normalize?: boolean
}

export declare class CParser {
    line: number
    column: number
    position: number
    onvalue: (value: string | boolean | null) => void
    onkey: (key: string) => void
    onopenobject: (key: string) => void
    oncloseobject: () => void
    onopenarray: () => void
    onclosearray: () => void
    onend: () => void
    onerror: (e: Error) => void
    onready: () => void
    constructor(opt?: Options)
    end(): void
    write(chunk: string): void
    resume(): void
    close(): void
}

export declare class CStream extends Stream {
    _parser: CParser
    constructor(opt?: Options)
    destroy(): void
    end(chunk: string): void
    on (ev: string, handler: (value?: string) => void): void
}

export declare let MAX_BUFFER_LENGTH: number
export declare let DEBUG: boolean
export declare let INFO: boolean
export declare const EVENTS: Array<string>
//export declare const STATE: {[key: number | string]: number | string}
