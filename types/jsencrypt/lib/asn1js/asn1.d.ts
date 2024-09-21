import { Int10 } from "./int10";
export declare class Stream {
    constructor(enc: Stream | number[], pos?: number);
    private enc;
    pos: number;
    get(pos?: number): number;
    hexDigits: string;
    hexByte(b: number): string;
    hexDump(start: number, end: number, raw: boolean): string;
    isASCII(start: number, end: number): boolean;
    parseStringISO(start: number, end: number): string;
    parseStringUTF(start: number, end: number): string;
    parseStringBMP(start: number, end: number): string;
    parseTime(start: number, end: number, shortYear: boolean): string;
    parseInteger(start: number, end: number): string | 0 | -1;
    parseBitString(start: number, end: number, maxLength: number): string;
    parseOctetString(start: number, end: number, maxLength: number): string;
    parseOID(start: number, end: number, maxLength: number): string;
}
export declare class ASN1 {
    constructor(stream: Stream, header: number, length: number, tag: ASN1Tag, sub: ASN1[]);
    private stream;
    private header;
    private length;
    private tag;
    sub: ASN1[];
    typeName(): string;
    content(maxLength: number): string | 0 | -1;
    toString(): string;
    toPrettyString(indent: string): string;
    posStart(): number;
    posContent(): number;
    posEnd(): number;
    toHexString(): string;
    static decodeLength(stream: Stream): number;
    /**
     * Retrieve the hexadecimal value (as a string) of the current ASN.1 element
     * @returns {string}
     * @public
     */
    getHexStringValue(): string;
    static decode(str: Stream | number[]): ASN1;
}
export declare class ASN1Tag {
    constructor(stream: Stream);
    tagClass: number;
    tagConstructed: boolean;
    tagNumber: number | Int10;
    isUniversal(): boolean;
    isEOC(): boolean;
}
