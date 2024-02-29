/// <reference types="node" />

declare class TL {
    constructor(tag: string | number | Buffer, length: number | string);

    tag: string;
    length: number;
    bTag: Buffer;
    bLength: Buffer;
    size: number;
    name: string;

    /**
     * Return the value of the tag field of the TL.
     */
    getTag(tag?: string): string;
    getTag(tag: number): number;
    getLength(): number;
    getSize(): number;
    getName(): string;
    setValue(value: string): void;
    getTL(): string;

    /**
     * @param flag When true measures the length of the value, when false measures the length of the buffer value
     */
    getL(flag?: boolean): string;
    toString(): string;
    toTLV: (str: string) => TLV;
    print(indent?: number): void;
}

interface DOLConstructed {
    list: TL[];
    print(): void;
    setValue(...args: any[]): TLV[];
    getList: () => TL[];
    find(...args: any[]): TL;
    count(): number;
    getDolRelatedDataLength(): number;
}

interface DOL {
    new(dolData: string | number | Buffer): DOLConstructed;
    parse(dolData: string): DOLConstructed;
}

declare class TLV {
    // @param value Source code docs say "string" only but can support a "Buffer" as well
    // Source code has tests to use a buffer as a value
    constructor(tag: string | number, value: string | Buffer, encoding?: number);

    // FIXME:  Not sure how to make a property of a class as static class and not the instantiated object
    // Have split the class into two interfaces
    static DOL: DOL;
    static TL: TL;

    static EMV: 0;
    static DGI: 1;

    /**
     * Get TLV objects.
     */
    static parseList(data: string | Buffer, encoding?: number): TLV[];

    /**
     * Parse
     * @param data TAG, LENGTH, VALUE hex string
     */
    static parse: (data?: string | Buffer, encoding?: number) => TLV;

    /**
     * Return value of the length field as a hex string
     */
    static T: (tag: string | Buffer | number) => string;

    static log(): void;

    /**
     * Return value of the length field as a hex string.
     */
    static L(value: string | Buffer, flag?: boolean): string;

    /**
     * Return value of the length field and the value field as hex string
     */
    static LV(value: string | Buffer, flag?: boolean): string;

    /**
     * Return value of the value field as string
     */
    static V(value: string): string;

    static TLV(tag: string | number, value: string, encoding?: number): string;
    static getBufferTag(buf: Buffer, encoding: number): Buffer;
    static getBufferLength(len: number, encoding?: number): Buffer;
    static adjustTag(tag?: string | Buffer | number, encoding?: number): string;
    static adjustValue(value?: string | Buffer): string;
    static adjustLength(length?: number | string): number;

    /**
     * Return the name of the TLV.
     */
    static getName(tag: number | string): string;

    encodingMode: 0 | 1;
    tag: string;
    value: string;
    length: number;
    bLength: Buffer;
    bTag: Buffer;
    bValue: Buffer;
    /**
     * Size:  tag length , length length, value length
     * Combined length of tag, length and value field
     */
    size: number;
    info: {
        clazz?: "universal" | "application" | "context specific" | "private" | undefined;
        encoding: "primitive" | "constructed";
    };
    child: TLV[];
    isConstructed: boolean;
    name: string;

    /**
     * Return the value of the tag field of the TLV.
     *
     * @param encoding return type ('number' / 'hex' / 'buffer'). 'hex' is default
     */
    getTag(encoding?: "hex"): string;
    getTag(encoding: "number"): number;
    getTag(encoding: "buffer"): Buffer;

    /**
     * Return the value of the length field of the TLV.
     *
     * @param encoding return type ('number' / 'hex' / 'buffer'). 'number' is default
     */
    getLength(encoding?: "number"): number;
    getLength(encoding: "hex"): string;
    getLength(encoding: "buffer"): Buffer;

    /**
     * Return the length of the TLV (tag + length + value)
     */
    getSize(): number;

    /**
     * Return the value of the value field of the TLV.
     */
    getValue(encoding?: "hex" | "ascii"): string;
    getValue(encoding: "buffer"): Buffer;

    /**
     * Return the name of the TLV.
     */
    getName(): string;

    /**
     * Return the value of the encoding of the TLV.
     */
    getEncoding(): number;

    /**
     * Return the value of the length field as a hex string
     *
     * @param flag When true measures the length of the value, when false measures the length of the buffer value
     */
    getL(flag?: boolean): string;

    /**
     * Return the value of the tag, length fields as a hex string
     */
    getTL(): string;
    /**
     * Return the value of the length, value field as a hex string
     *
     * @param flag When true measures the length of the value, when false measures the length of the buffer value
     */
    getLV(flag?: boolean): string;

    /**
     * Return the value of the tag, length fields as a hex string
     */
    getTV(): string;

    /**
     * Return the value of the tag, length, value field as a hex string
     */
    getTLV(): string;

    /**
     * Print the TLV structure.
     *
     * @param indent tab space. Defaults to 0
     */
    print(indent?: number): void;

    /**
     * Print the TLV structure.
     * @deprecated Use print
     * @param indent tab space. Defaults to 0
     */
    print2(indent?: number): void;

    /**
     * Get child TLV objects.
     */
    getChild(): TLV[];

    /**
     * Find tlv object.
     */
    find(tag: string | number): TLV;

    /**
     * Find tlv object.
     */
    findAll(tag: string | number): TLV[];

    /**
     * ditto getTLV().
     */
    toString(): string;

    /**
     * Get Child TLV objects.
     */
    getTlvByTag(tag: string | number): TLV[];

    /**
     * @returns DOL
     */
    parseDolValue(): DOL;

    /**
     * Command used with ALV tags
     */
    getCommand: undefined | (() => string[]);

    /**
     * Command used with ALV tags
     */
    desc: undefined | ((tlv: TLV) => string[]);
}

export = TLV;
