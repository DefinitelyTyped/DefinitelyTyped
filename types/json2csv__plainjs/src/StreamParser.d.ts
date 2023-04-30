import Tokenizer, { TokenizerOptions } from '@streamparser/json/tokenizer';
import JSON2CSVBase, { Options as BaseOptions } from './BaseParser';

export interface Options extends BaseOptions {
    ndjson?: boolean | undefined;
}

export interface AsyncOptions extends TokenizerOptions {
    objectMode?: boolean | undefined;
}

export default class JSON2CSVStreamParser extends JSON2CSVBase {
    constructor(opts?: BaseOptions, asyncOpts?: AsyncOptions);

    configureCallbacks(tokenizer: Tokenizer, tokenParser: Tokenizer): void;

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
