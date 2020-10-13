// Type definitions for node-tlv 1.5
// Project: https://github.com/coolbong/node-tlv#readme
// Definitions by: David-Tennant <https://github.com/David-Tennant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
// tslint:disable-next-line no-declare-current-package no-single-declare-module
declare module 'node-tlv' {
    interface TL {
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

    interface TLConstructor {
        new (tag: string | number | Buffer, length: number | string): TL;
    }

    interface DOL {
        list: TL[];
        print(): void;
        setValue(...args: any[]): TLVConstructor[];
        getList: () => TL[];
        find(...args: any[]): TL;
        count(): number;
        getDolRelatedDataLength(): number;
    }

    interface DOLConstructor {
        new (dolData: string | number | Buffer): DOL;
        parse(dolData: string): DOL;
    }

    interface TLV {
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
            clazz?: 'universal' | 'application' | 'context specific' | 'private';
            encoding: 'primitive' | 'constructed';
        };
        child: TLV[];
        isConstructed: boolean;
        name: string;

        /**
         * Return the value of the tag field of the TLV.
         *
         * @param encoding return type ('number' / 'hex' / 'buffer'). 'hex' is default
         */
        getTag(encoding?: 'hex'): string;
        getTag(encoding: 'number'): number;
        getTag(encoding: 'buffer'): Buffer;

        /**
         * Return the value of the length field of the TLV.
         *
         * @param encoding return type ('number' / 'hex' / 'buffer'). 'number' is default
         */
        getLength(encoding?: 'number'): number;
        getLength(encoding: 'hex'): string;
        getLength(encoding: 'buffer'): Buffer;

        /**
         * Return the length of the TLV (tag + length + value)
         */
        getSize(): number;

        /**
         * Return the value of the value field of the TLV.
         */
        getValue(encoding?: 'hex' | 'ascii'): string;
        getValue(encoding: 'buffer'): Buffer;

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
    }

    interface TLVConstructor {
        /**
         * Need to check if this works. Official docs say "string" but can support a "Buffer" as well
         */
        new (tag: string | number, value: string | Buffer, encoding?: number): TLV;

        DOL: DOLConstructor;
        TL: TLConstructor;
        EMV: 0;
        DGI: 1;

        /**
         * Get TLV objects.
         */
        parseList(data: string | Buffer, encoding?: number): TLV[];

        /**
         * Parse
         * @param data TAG, LENGTH, VALUE hex string
         */
        parse: (data?: string | Buffer, encoding?: number) => TLV;

        /**
         * Return value of the length field as a hex string
         */
        T: (tag: string | Buffer | number) => string;

        log(): void;

        /**
         * Return value of the length field as a hex string.
         */
        L(value: string | Buffer, flag?: boolean): string;

        /**
         * Return value of the length field and the value field as hex string
         */
        LV(value: string | Buffer, flag?: boolean): string;

        /**
         * Return value of the value field as string
         */
        V(value: string): string;

        TLV(tag: string | number, value: string, encoding?: number): string;
        getBufferTag(buf: Buffer, encoding: number): Buffer;
        getBufferLength(len: number, encoding?: number): Buffer;
        adjustTag(tag?: string | Buffer | number, encoding?: number): string;
        adjustValue(value?: string | Buffer): string;
        adjustLength(length?: number | string): number;

        /**
         * Return the name of the TLV.
         */
        getName(tag: number | string): string;
    }

    const tlvExport: TLVConstructor;

    export default tlvExport;
}
