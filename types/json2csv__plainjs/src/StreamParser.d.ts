import { Tokenizer, TokenizerOptions, TokenParser } from '@streamparser/json/index';
import JSON2CSVBase, { Options as BaseOptions } from './BaseParser';

export interface Options extends BaseOptions {
    ndjson?: boolean | undefined;
}

export interface AsyncOptions extends TokenizerOptions {
    objectMode?: boolean | undefined;
}

export default class JSON2CSVStreamParser extends JSON2CSVBase {
    constructor(opts?: BaseOptions, asyncOpts?: AsyncOptions);

    tokenizer?: Tokenizer | ReturnType<this['getObjectModeTokenzier']> | undefined;
    tokenParser?: TokenParser | undefined;
    protected _hasWritten?: boolean | undefined;

    configureCallbacks(tokenizer: Tokenizer, tokenParser: TokenParser): void;

    initTokenizer(opts?: BaseOptions, asyncOpts?: AsyncOptions): void;

    getObjectModeTokenzier(): {
        write(data: any): void;
        end(): void;
    };
    getNdJsonTokenizer(asyncOpts?: AsyncOptions): Tokenizer;
    getBinaryModeTokenizer(asyncOpts?: AsyncOptions): Tokenizer;

    write(data: any): void;
    end(): void;

    pushHeaderIfNotWritten(): void;
    pushHeader(): void;
    pushLine(data: any): void;

    onHeader(header: string): void;
    onLine(line: any[]): void;
    onData(data: any): void;
    onError(): void;
    onEnd(): void;
}
