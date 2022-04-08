// Type definitions for clarinet 0.12
// Project: https://github.com/dscape/clarinet
// Definitions by: corno <https://github.com/corno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Stream } from "stream";

export function parser(opt?: Options): CParser;
export function createStream(opt?: Options): CStream;

export interface Options {
    trim?: boolean;
    normalize?: boolean;
}

export class CParser {
    line: number;
    column: number;
    position: number;
    onvalue: (value: string | boolean | null) => void;
    onkey: (key: string) => void;
    onopenobject: (key: string) => void;
    oncloseobject: () => void;
    onopenarray: () => void;
    onclosearray: () => void;
    onend: () => void;
    onerror: (e: Error) => void;
    onready: () => void;
    constructor(opt?: Options);
    end(): void;
    write(chunk: string): void;
    resume(): void;
    close(): void;
}

export class CStream extends Stream {
    _parser: CParser;
    constructor(opt?: Options);
    destroy(): void;
    end(chunk: string): void;
    on(ev: string, listener: (...args: any[]) => void): this;
}

export const MAX_BUFFER_LENGTH: number;
export const DEBUG: boolean;
export const INFO: boolean;
export const EVENTS: string[];

export const STATE: {
    "0": string;
    "1": string;
    "10": string;
    "11": string;
    "12": string;
    "13": string;
    "14": string;
    "15": string;
    "16": string;
    "17": string;
    "18": string;
    "19": string;
    "2": string;
    "20": string;
    "21": string;
    "22": string;
    "23": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    BACKSLASH: number;
    BEGIN: number;
    CLOSE_ARRAY: number;
    CLOSE_KEY: number;
    CLOSE_OBJECT: number;
    END: number;
    FALSE: number;
    FALSE2: number;
    FALSE3: number;
    FALSE4: number;
    NULL: number;
    NULL2: number;
    NULL3: number;
    NUMBER_DECIMAL_POINT: number;
    NUMBER_DIGIT: number;
    OPEN_ARRAY: number;
    OPEN_KEY: number;
    OPEN_OBJECT: number;
    STRING: number;
    TEXT_ESCAPE: number;
    TRUE: number;
    TRUE2: number;
    TRUE3: number;
    VALUE: number;
};
