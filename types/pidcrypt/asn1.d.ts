declare class Stream {
    hexDigits: string;
    reTime: RegExp;

    constructor(enc: any[], pos: number);
    constructor(stream: Stream);

    parseStringHex(start: number, end?: number): string;
    get(pos?: number): any;
    hexDump(start: number, end: number): string;
    parseStringISO(start: number, end: number): string;
    parseStringUTF(start: number, end: number): string;
    parseTime(start: number, end: number): string;
    parseInteger(start: number, end: number): number;
    parseOID(start: number, end: number): string;
}

declare namespace pidcrypt {
    interface ASN1 {
        new (stream: Stream, header: any, length: number, tag: number, sub: any): ASN1;
        toHexTree(): any;
        typeName(): string;
        content(): null | string | number;
        toString(): string;
        print(indent?: string): void;
        toPrettyString(indent?: string): string;
        toDOM(): HTMLElement;
        posStart(): number;
        posContent(): number;
        posEnd(): number;
        decodeLength(stream: Stream): number;
        hasContent(tag: number, len: number, stream: Stream): boolean;
        decode(stream: Stream | any[]): ASN1;
        test(): void;
    }

    interface pidcrypt {
        ASN1: ASN1;
    }
}
