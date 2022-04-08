// Type definitions for gettext-parser 4.0
// Project: https://github.com/smhg/gettext-parser
// Definitions by: Lorent Lempereur <https://github.com/looorent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface GetTextComment {
    translator: string;
    reference: string;
    extracted: string;
    flag: string;
    previous: string;
}

export interface GetTextTranslation {
    msgctxt?: string;
    msgid: string;
    msgid_plural?: any;
    msgstr: string[];
    comments?: GetTextComment;
}

export interface GetTextTranslations {
    charset: string;
    headers: { [headerName: string]: string };
    translations: { [msgctxt: string]: { [msgId: string]: GetTextTranslation } };
}

export interface PoParser {
    parse: (buffer: Buffer | string, defaultCharset?: string) => GetTextTranslations;
    compile: (table: GetTextTranslations, options?: any) => Buffer;
    createParseStream: (buffer: any, defaultCharset?: string) => any;
}

export interface MoParser {
    parse: (buffer: Buffer | string, defaultCharset?: string) => GetTextTranslations;
    compile: (table: GetTextTranslations, options?: any) => Buffer;
}

export const po: MoParser;
export const mo: MoParser;
