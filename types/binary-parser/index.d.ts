// Type definitions for binary-parser 1.5
// Project: https://github.com/keichi/binary-parser
// Definitions by: Benjamin Riggs <https://github.com/riggs>,
//                 Dolan Miu <https://github.com/dolanmiu>,
//                 Yu Shimura <https://github.com/yuhr>,
//                 John Mark Gabriel Caguicla <https://github.com/caguiclajmg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

export interface Parser<O extends object | undefined = undefined> {
    parse(buffer: Buffer, callback?: (err?: Error, result?: any) => void): Parser.Parsed<O>;

    create(constructorFunction: ObjectConstructor): Parser;

    int8<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    uint8<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;

    int16<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    uint16<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    int16le<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    int16be<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    uint16le<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    uint16be<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;

    int32<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    uint32<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    int32le<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    int32be<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    uint32le<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    uint32be<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;

    int64<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, bigint>;
    uint64<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, bigint>;
    int64le<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, bigint>;
    int64be<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, bigint>;
    uint64le<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, bigint>;
    uint64be<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, bigint>;

    bit1<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit2<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit3<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit4<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit5<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit6<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit7<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit8<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit9<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit10<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit11<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit12<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit13<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit14<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit15<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit16<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit17<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit18<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit19<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit20<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit21<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit22<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit23<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit24<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit25<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit26<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit27<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit28<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit29<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit30<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit31<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    bit32<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;

    float<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    floatle<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    floatbe<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;

    double<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    doublele<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;
    doublebe<N extends string>(name: N, options?: Parser.Options): Parser.Next<O, N, number>;

    string<N extends string>(name: N, options?: Parser.StringOptions): Parser.Next<O, N, string>;

    buffer<N extends string>(name: N, options: Parser.BufferOptions): Parser.Next<O, N, Buffer>;

    array<N extends string, Q extends Parser.ArrayOptions>(name: N, options: Q): Parser.Next<O, N,
        Q extends { type: infer T }
            ? T extends Parser<infer O>
                ? O extends undefined ? Array<{}> : O[]
                : T extends string
                    ? number[]
                    : never
            : never
    >;

    choice<N extends string, Q extends Parser.ChoiceOptions>(name: N, options: Q): Parser.Next<O, N,
        Q extends {
            choices: infer C
        }
            ? C extends {
                [key in keyof C]: infer T
            }
                ? T extends Parser<infer O>
                    ? O extends undefined ? {} : O
                    : T extends string ? any : never
                : never
            : never
    >;

    nest<N extends string, Q extends Parser.NestOptions>(name: N, options: Q): Parser.Next<O, N,
        Q extends { type: infer T }
            ? T extends Parser<infer O>
                ? O extends undefined ? {} : O
                : never
            : never
    >;

    skip(length: number): Parser<O>;

    seek(length: number): Parser<O>;

    endianess(endianess: Parser.Endianness): Parser<O>;   /* [sic] */

    namely(alias: string): Parser<O>;

    compile(): void;

    getCode(): string;
}

export interface ParserConstructor {
    new(): Parser;
}

export const Parser: ParserConstructor;

export namespace Parser {
    type Data = number | string | Array<number | Parser<any>> | Parser<any> | Buffer;
    type Parsed<O extends object | undefined> = O extends undefined ? {} : O;

    interface Options {
        formatter?: ((value: Data) => any);
        assert?: string | number | ((value: Data) => boolean);
    }

    interface StringOptions extends Options {
        encoding?: string;
        length?: number | string | ((this: Parser<any>) => number);
        zeroTerminated?: boolean;
        greedy?: boolean;
        stripNull?: boolean;
    }

    interface BufferOptions extends Options {
        clone?: boolean;
        length?: number | string | ((this: Parser<any>) => number);
        readUntil?: string | ((item: number, buffer: Buffer) => boolean);
    }

    interface ArrayOptions extends Options {
        type: string | Parser<any>;
        length?: number | string | ((this: Parser<any>) => number);
        lengthInBytes?: number | string | ((this: Parser<any>) => number);
        readUntil?: string | ((item: number, buffer: Buffer) => boolean);
    }

    interface ChoiceOptions extends Options {
        tag: string | ((this: Parser<any>) => number);
        choices: { [item: number]: Parser<any> | string };
        defaultChoice?: Parser<any> | string;
    }

    interface NestOptions extends Options {
        type: Parser<any>;
    }

    type Endianness =
        'little' |
        'big';

    type Valid<O extends object | undefined, P extends object> =
        O extends undefined ? P : O & P;

    type Next<O extends object | undefined, N extends string, T extends any> =
        Parser<Valid<O, { [name in N]: T }>>;
}
