// Type definitions for text-mask-addons 3.8
// Project: https://github.com/text-mask/text-mask/tree/master/addons/#readme
// Definitions by: josh <https://github.com/huntjosh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Pipe } from 'text-mask-core';

export interface DatePipeYears {
    minYear: number;
    maxYear: number;
}
export function createAutoCorrectedDatePipe(dateFormat?: string, validYears?: DatePipeYears): Pipe;
