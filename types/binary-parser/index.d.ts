// Type definitions for binary-parser 1.3
// Project: https://github.com/keichi/binary-parser
// Definitions by: Benjamin Riggs <https://github.com/riggs>, Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Parser {
    parse(buffer: Buffer, callback?: (err?: Error, result?: any) => void): Parser.Parsed;

    create(constructorFunction: ObjectConstructor): Parser;

    int8(name: string, options?: Parser.Options): Parser;
    uint8(name: string, options?: Parser.Options): Parser;

    int16(name: string, options?: Parser.Options): Parser;
    uint16(name: string, options?: Parser.Options): Parser;
    int16le(name: string, options?: Parser.Options): Parser;
    int16be(name: string, options?: Parser.Options): Parser;
    uint16le(name: string, options?: Parser.Options): Parser;
    uint16be(name: string, options?: Parser.Options): Parser;

    int32(name: string, options?: Parser.Options): Parser;
    uint32(name: string, options?: Parser.Options): Parser;
    int32le(name: string, options?: Parser.Options): Parser;
    int32be(name: string, options?: Parser.Options): Parser;
    uint32le(name: string, options?: Parser.Options): Parser;
    uint32be(name: string, options?: Parser.Options): Parser;

    bit1(name: string, options?: Parser.Options): Parser;
    bit2(name: string, options?: Parser.Options): Parser;
    bit3(name: string, options?: Parser.Options): Parser;
    bit4(name: string, options?: Parser.Options): Parser;
    bit5(name: string, options?: Parser.Options): Parser;
    bit6(name: string, options?: Parser.Options): Parser;
    bit7(name: string, options?: Parser.Options): Parser;
    bit8(name: string, options?: Parser.Options): Parser;
    bit9(name: string, options?: Parser.Options): Parser;
    bit10(name: string, options?: Parser.Options): Parser;
    bit11(name: string, options?: Parser.Options): Parser;
    bit12(name: string, options?: Parser.Options): Parser;
    bit13(name: string, options?: Parser.Options): Parser;
    bit14(name: string, options?: Parser.Options): Parser;
    bit15(name: string, options?: Parser.Options): Parser;
    bit16(name: string, options?: Parser.Options): Parser;
    bit17(name: string, options?: Parser.Options): Parser;
    bit18(name: string, options?: Parser.Options): Parser;
    bit19(name: string, options?: Parser.Options): Parser;
    bit20(name: string, options?: Parser.Options): Parser;
    bit21(name: string, options?: Parser.Options): Parser;
    bit22(name: string, options?: Parser.Options): Parser;
    bit23(name: string, options?: Parser.Options): Parser;
    bit24(name: string, options?: Parser.Options): Parser;
    bit25(name: string, options?: Parser.Options): Parser;
    bit26(name: string, options?: Parser.Options): Parser;
    bit27(name: string, options?: Parser.Options): Parser;
    bit28(name: string, options?: Parser.Options): Parser;
    bit29(name: string, options?: Parser.Options): Parser;
    bit30(name: string, options?: Parser.Options): Parser;
    bit31(name: string, options?: Parser.Options): Parser;
    bit32(name: string, options?: Parser.Options): Parser;

    float(name: string, options?: Parser.Options): Parser;
    floatle(name: string, options?: Parser.Options): Parser;
    floatbe(name: string, options?: Parser.Options): Parser;

    double(name: string, options?: Parser.Options): Parser;
    doublele(name: string, options?: Parser.Options): Parser;
    doublebe(name: string, options?: Parser.Options): Parser;

    string(name: string, options?: Parser.StringOptions): Parser;

    buffer(name: string, options: Parser.BufferOptions): Parser;

    array(name: string, options: Parser.ArrayOptions): Parser;

    choice(name: string, options: Parser.ChoiceOptions): Parser;

    nest(name: string, options: Parser.NestOptions): Parser;

    skip(length: number): Parser;

    endianess(endianess: Parser.Endianness): Parser;   /* [sic] */

    namely(alias: string): Parser;

    compile(): void;

    getCode(): string;
}

export interface ParserConstructor {
    new(): Parser;
}

export const Parser: ParserConstructor;

export namespace Parser {
    type Data = number | string | Array<number | Parsed> | Parsed | Buffer;
    interface Parsed {
        [name: string]: Data;
    }

    interface Options {
        formatter?: ((value: Data) => any);
        assert?: string | number | ((value: Data) => boolean);
    }

    interface StringOptions extends Options {
        encoding?: string;
        length?: number | string | ((this: Parsed) => number);
        zeroTerminated?: boolean;
        greedy?: boolean;
        stripNull?: boolean;
    }

    interface BufferOptions extends Options {
        clone?: boolean;
        length?: number | string | ((this: Parsed) => number);
        readUntil?: string | ((item: number, buffer: Buffer) => boolean);
    }

    interface ArrayOptions extends Options {
        type: string | Parser;
        length?: number | string | ((this: Parsed) => number);
        lengthInBytes?: number | string | ((this: Parsed) => number);
        readUntil?: string | ((item: number, buffer: Buffer) => boolean);
    }

    interface ChoiceOptions extends Options {
        tag: string | ((this: Parsed) => number);
        choices: { [item: number]: Parser | string };
        defaultChoice?: Parser | string;
    }

    interface NestOptions extends Options {
        type: Parser | string;
    }

    type Endianness =
        'little' |
        'big';

    interface Context {
        [name: string]: Parsed;
    }
}
