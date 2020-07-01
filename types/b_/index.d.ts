// Type definitions for b_ 1.3
// Project: https://github.com/azproduction/b_
// Definitions by: Vasya Aksyonov <https://github.com/outring>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    tailSpace?: string;
    elementSeparator?: string;
    modSeparator?: string;
    modValueSeparator?: string;
    classSeparator?: string;
    isFullModifier?: boolean;
    isFullBoolValue?: boolean;
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
