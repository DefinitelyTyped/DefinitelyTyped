export = anyBase;
export as namespace anyBase;

declare const anyBase: AnyBase;

interface AnyBase {
    BIN: "01";
    OCT: "01234567";
    DEC: "0123456789";
    HEX: "0123456789abcdef";
    (srcAlphabet: string, dstAlphabet: string): anyBase.Converter;
}

declare namespace anyBase {
    interface Converter {
        (number: string): string;
    }
}
