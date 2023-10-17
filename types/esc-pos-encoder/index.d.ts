type codepageType =
    | "cp437"
    | "cp737"
    | "cp850"
    | "cp775"
    | "cp852"
    | "cp855"
    | "cp857"
    | "cp858"
    | "cp860"
    | "cp861"
    | "cp862"
    | "cp863"
    | "cp864"
    | "cp865"
    | "cp866"
    | "cp869"
    | "cp936"
    | "cp949"
    | "cp950"
    | "cp1252"
    | "iso88596"
    | "shiftjis"
    | "windows1250"
    | "windows1251"
    | "windows1252"
    | "windows1253"
    | "windows1254"
    | "windows1255"
    | "windows1256"
    | "windows1257"
    | "windows1258";

type sizeType = "small" | "normal";

type alignType = "left" | "center" | "right";
type verticalAlignType = "top" | "bottom";

type symbologyType = "upca" | "upce" | "ean13" | "ean8" | "coda39" | "itf" | "codabar";

type qrSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type qrErrorLevelType = "l" | "m" | "q" | "h";

type imgAlgType = "threshold" | "bayer" | "floydsteinberg" | "atkinson";

type cutType = "full" | "partial";

type styleType = "single" | "double";

type deviceType = 0 | 1;

declare class EscPosEncoder {
    constructor();

    align(value: alignType): EscPosEncoder;

    barcode(value: string, symbology: symbologyType, height: number): EscPosEncoder;

    bold(value?: boolean): EscPosEncoder;

    codepage(value: codepageType): EscPosEncoder;

    cut(value?: cutType): EscPosEncoder;

    encode(): Uint8Array;

    image(element: any, width: number, height: number, algorithm?: imgAlgType, threshold?: number): EscPosEncoder;

    initialize(): EscPosEncoder;

    italic(value?: boolean): EscPosEncoder;

    line(value: string, wrap?: number): EscPosEncoder;

    newline(): EscPosEncoder;

    qrcode(value: string, model?: 1 | 2, size?: qrSizeType, errorLevel?: qrErrorLevelType): EscPosEncoder;

    raw(data: ReadonlyArray<number> | Uint8Array): EscPosEncoder;

    size(value: sizeType): EscPosEncoder;

    text(value: string, wrap?: number): EscPosEncoder;

    underline(value?: boolean | 2): EscPosEncoder;

    invert(value?: boolean): EscPosEncoder;

    width(value: number): EscPosEncoder;

    height(value: number): EscPosEncoder;

    box(
        options: {
            marginLeft?: number;
            marginRight?: number;
            paddingLeft?: number;
            paddingRight?: number;
            style?: styleType;
            width?: number;
        },
        value: string | ((encoder: EscPosEncoder) => EscPosEncoder),
    ): EscPosEncoder;

    table(
        columns: ReadonlyArray<{
            align?: alignType;
            marginLeft?: number;
            marginRight?: number;
            verticalAlign?: verticalAlignType;
            width?: number;
        }>,
        data: ReadonlyArray<ReadonlyArray<string | ((encoder: EscPosEncoder) => EscPosEncoder)>>,
    ): EscPosEncoder;

    rule(options: { style?: styleType; width?: number }): EscPosEncoder;

    pulse(device: deviceType, on: number, off: number): EscPosEncoder;
}

export = EscPosEncoder;
