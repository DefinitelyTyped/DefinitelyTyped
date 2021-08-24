import { InputStream } from './InputStream';

export class Token {
    readonly text: string;
    source: any;
    type: any;
    channel: any;
    start: number;
    stop: number;
    tokenIndex: number;
    line: number;
    column: number;

    getTokenSource(): any;

    getInputStream(): InputStream;

    static readonly INVALID_TYPE: number;
    static readonly EPSILON: number;
    static readonly MIN_USER_TOKEN_TYPE: number;
    static readonly EOF: number;
    static readonly HIDDEN_CHANNEL: number;
}

export class CommonToken extends Token {
    constructor(source: any, type: any, channel: any, start: number, stop: number);

    clone(): Token;

    toString(): string;

    static readonly EMPTY_SOURCE: any;
}
