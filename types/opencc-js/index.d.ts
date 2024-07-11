export type Locale = "cn" | "tw" | "twp" | "hk" | "jp" | "t";

export interface ConverterOptions {
    from?: Locale;
    to?: Locale;
}

export type ConvertText = (text: string) => string;

export function Converter(options: ConverterOptions): ConvertText;

export function CustomConverter(dictionary: ReadonlyArray<[string, string]>): ConvertText;

export function HTMLConverter(
    converter: ConvertText,
    rootNode: Element,
    langAttrInitial: string,
    langAttrNew: string,
): HTMLConvertHandler;

export interface HTMLConvertHandler {
    convert(): void;
    restore(): void;
}
