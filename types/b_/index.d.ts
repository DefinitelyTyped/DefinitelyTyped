interface Options {
    tailSpace?: string | undefined;
    elementSeparator?: string | undefined;
    modSeparator?: string | undefined;
    modValueSeparator?: string | undefined;
    classSeparator?: string | undefined;
    isFullModifier?: boolean | undefined;
    isFullBoolValue?: boolean | undefined;
}

interface Mods {
    [name: string]: any;
}

interface Formatter {
    (block: string, mods?: Mods): string;
    (block: string, elem: string, mods?: Mods): string;

    with(block: string): BlockFormatter;
    with(block: string, elem: string): ElemFormatter;

    lock(block: string): BlockFormatter;
    lock(block: string, elem: string): ElemFormatter;

    B(options: Options): Formatter;
}

interface BlockFormatter {
    (mods?: Mods): string;
    (elem: string, mods?: Mods): string;
}

type ElemFormatter = (mods?: Mods) => string;

declare const formatter: Formatter;
export = formatter;
