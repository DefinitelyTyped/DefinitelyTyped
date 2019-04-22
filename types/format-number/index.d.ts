// Type definitions for format-number 2.0
// Project: https://github.com/componitable/format-number
// Definitions by: Fedai Kaya <https://github.com/codelovesme>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function(options?: {
    negativeType?: "right" | "left" | "brackets" | null;
    negativeLeftSymbol?: string;
    negative?: "R" | null;
    negativeRightSymbol?: string;
    negativeLeftOut?: boolean;
    negativeOut?: boolean;
    prefix?: string;
    suffix?: string;
    integerSeparator?: string;
    separator?: string;
    decimalsSeparator?: string;
    decimal?: string;
    padLeft?: number;
    padRight?: number;
    round?: number;
    truncate?: number;
    allowedSeparators?: string[];
}): (
    number: number,
    overrideOptions?: {
        noUnits: boolean;
        noSeparator: boolean;
    }
) => string;
