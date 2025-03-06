/// <reference types="node" />

import { Transform, TransformOptions } from "readable-stream";

export interface GetTextComment {
    translator?: string;
    reference?: string;
    extracted?: string;
    flag?: string;
    previous?: string;
}

export interface GetTextTranslation {
    msgctxt?: string;
    msgid: string;
    msgid_plural?: string;
    msgstr: string[];
    comments?: GetTextComment;
    obsolete?: boolean;
}

export interface GetTextTranslationRecord {
    [msgctxt: string]: {
        [msgId: string]: GetTextTranslation;
    };
}

export interface GetTextTranslations {
    charset: string;
    headers: { [headerName: string]: string };
    translations: GetTextTranslationRecord;
    obsolete?: GetTextTranslationRecord;
}

export interface GetTextPoParserOptions {
    defaultCharset?: string;
    validation?: boolean;
}

export interface GetTextPoCompilerOptions {
    foldLength?: number;
    escapeCharacters?: boolean;
    sort?: boolean | ((a: GetTextTranslation, b: GetTextTranslation) => number);
    eol?: string;
}

export interface PoParser {
    parse: (buffer: Buffer | string, options?: GetTextPoParserOptions) => GetTextTranslations;
    compile: (table: GetTextTranslations, options?: GetTextPoCompilerOptions) => Buffer;
    createParseStream: (options?: GetTextPoParserOptions, transformOptions?: TransformOptions) => Transform;
}

export interface MoParser {
    parse: (buffer: Buffer | string, defaultCharset?: string) => GetTextTranslations;
    compile: (table: GetTextTranslations) => Buffer;
}

export const po: PoParser;
export const mo: MoParser;
