/// <reference types="node" />

import { Transform } from "readable-stream";

export interface GetTextComment {
    translator: string;
    reference: string;
    extracted: string;
    flag: string;
    previous: string;
}

export interface GetTextTranslation {
    msgctxt?: string | undefined;
    msgid: string;
    msgid_plural?: any;
    msgstr: string[];
    comments?: GetTextComment | undefined;
}

export interface GetTextTranslations {
    charset: string;
    headers: { [headerName: string]: string };
    translations: { [msgctxt: string]: { [msgId: string]: GetTextTranslation } };
}

export interface PoParser {
    parse: (buffer: Buffer | string, defaultCharset?: string) => GetTextTranslations;
    compile: (table: GetTextTranslations, options?: any) => Buffer;
    createParseStream: (buffer: any, defaultCharset?: string) => Transform;
}

export interface MoParser {
    parse: (buffer: Buffer | string, defaultCharset?: string) => GetTextTranslations;
    compile: (table: GetTextTranslations, options?: any) => Buffer;
}

export const po: PoParser;
export const mo: MoParser;
