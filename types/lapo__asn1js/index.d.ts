// Type definitions for @lapo/asn1js 1.2
// Project: https://github.com/lapo-luchini/asn1js
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ASN1 {
    type Binary = string | number[] | Uint8Array;
    type StreamOrBinary = Stream | Binary;

    interface StreamParseReturn {
        size: number;
        str: string;
    }
}

declare class Stream {
    static hexDigits: '0123456789ABCDEF';

    constructor(enc: ASN1.StreamOrBinary, pos: number);

    enc: ASN1.Binary;
    pos: number;

    get(pos?: number): number;
    hexByte(b: number): string;
    hexDump(start: number, end: number, raw: boolean): string;
    b64Dump(start: number, end: number): string;
    isASCII(start: number, end: number): boolean;
    parseStringISO(start: number, end: number, maxLength: number): ASN1.StreamParseReturn;
    parseStringT61(start: number, end: number, maxLength: number): ASN1.StreamParseReturn;
    parseStringUTF(start: number, end: number, maxLength: number): ASN1.StreamParseReturn;
    parseStringBMP(start: number, end: number, maxLength: number): ASN1.StreamParseReturn;
    parseTime(start: number, end: number, shortYear: boolean): string;
    parseInteger(start: number, end: number): string;
    parseBitString(start: number, end: number, maxLength: number): ASN1.StreamParseReturn;
    parseOctetString(start: number, end: number, maxLength: number): ASN1.StreamParseReturn;
    parseOID(start: number, end: number, maxLength: number): string;
}

declare class ASN1Tag {
    constructor(stream: Stream);

    tagClass: number;
    tagConstructed: boolean;
    tagNumber: number;

    isUniversal(): boolean;
    isEOC(): boolean;
}

declare class ASN1 {
    static decode(stream: ASN1.StreamOrBinary, offset?: number): ASN1;

    constructor(stream: Stream, header: number, length: number, tag: ASN1Tag, tagLen: number, sub: ASN1[] | null);

    stream: Stream;
    header: number;
    length: number;
    tag: ASN1Tag;
    tagLen: number;
    sub: ASN1[] | null;

    typeName(): string;
    content(maxLength?: number): string | null;
    toString(): string;
    toPrettyString(indent?: string): string;
    posStart(): number;
    posContent(): number;
    posEnd(): number;
    posLen(): number;
    toHexString(): string;
    toB64String(): string;
    decodeLength(stream: Stream): number;
}

export = ASN1;

export as namespace asn1;
