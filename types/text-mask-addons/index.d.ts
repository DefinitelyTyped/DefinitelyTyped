// Type definitions for text-mask-addons 3.8
// Project: https://github.com/text-mask/text-mask/tree/master/addons/#readme
// Definitions by: josh <https://github.com/huntjosh>
//                 Aerophite <https://github.com/Aerophite>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Mask, Pipe } from 'text-mask-core';

export interface DatePipeYears {
    minYear: number;
    maxYear: number;
}
export function createAutoCorrectedDatePipe(dateFormat?: string, validYears?: DatePipeYears): Pipe;

export interface NumberMaskOptions {
    prefix: string;
    suffix: string;
    includeThousandsSeparator: boolean;
    thousandsSeparatorSymbol: string;
    allowDecimal: boolean;
    decimalSymbol: string;
    decimalLimit: number;
    requireDecimal: boolean;
    allowNegative: boolean;
    allowLeadingZeroes: boolean;
    integerLimit: number | null;
}
export function createNumberMask(maskOptions?: Partial<NumberMaskOptions>): (rawValue: string) => Mask;
