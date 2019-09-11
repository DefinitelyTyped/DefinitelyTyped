// Type definitions for multibase 0.6
// Project: https://github.com/multiformats/js-multibase#readme
// Definitions by: Henrique Barcelos <https://github.com/hbarcelos> and Victor Santana <https://github.com/victorSantana09>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = multibase;

type Input = Buffer | string;

declare function multibase(nameOrCode: string | number, buf: Buffer): Buffer;

declare namespace multibase {
    interface Engine {
        encode(input: Input): string;
        decode(input: Input): Buffer;
    }

    interface BaseImplementationFactory {
        (alphabet: string): Engine;
    }

    class Base {
        name: string;
        code: string;
        alphabet: string;
        engine?: Engine;
        constructor(name: string, code: string, implementation: BaseImplementationFactory, alphabet: string);
        encode: Engine['encode'];
        decode: Engine['encode'];
        isImplemented(): boolean;
    }

    function encode(nameOrCode: string | number, buf: Buffer): Buffer;
    function decode(bufOrString: Input): Buffer;
    function isEncoded(bufOrString: any): boolean;
    function validEncode(name: string, buf: Buffer): void | never;
    function getBase(nameOrCode: string | number): Base | never;

    const codes: Partial<{
        [key: string]: Base;
    }>;

    const names: Partial<{
        [key: string]: Base;
    }>;
}
