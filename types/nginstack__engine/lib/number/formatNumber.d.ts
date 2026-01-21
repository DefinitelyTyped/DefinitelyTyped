declare namespace _exports {
    export { FormatOptions, LocaleConfig, NumberParts };
}
declare function _exports(value: number, options: FormatOptions): string;
export = _exports;
interface FormatOptions {
    /**
     * Formato a ser utilizado. Deve ser um dos valores exportados por NumberFormat.
     */
    format: number;
    /**
     * Localidade a ser utilizada. Por padrão é
     * considerado 'pt-br', mas também é aceito 'en-us'.
     */
    locale?: 'pt-br' | 'en-us';
    /**
     * Número mínimo de casas decimais.
     */
    minPrecision?: number;
    /**
     * Número máximo de casas decimais.
     */
    maxPrecision?: number;
}
interface LocaleConfig {
    /**
     * Separador de milhares.
     */
    thousandSeparator: string;
    /**
     * Separador decimal.
     */
    decimalSeparator: string;
}
interface NumberParts {
    /**
     * Parte inteira do número.
     */
    integerPart: string;
    /**
     * Parte fracionária do número.
     */
    fractionPart: string;
    /**
     * Se o número é negativo.
     */
    isNegative: boolean;
}
