// Type definitions for moment-duration-format 1.3
// Project: https://github.com/jsmreese/moment-duration-format
// Definitions by: Swint De Coninck <https://github.com/SwintDC>, Niklas Walter <https://github.com/TwoStone>, Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from "moment";

declare module "moment" {
    namespace duration {
        const fn: Duration;
    }

    interface Duration {
        format: Format;
    }

    interface Format {
        defaults: DurationFormatSettings;

        (template: string | TemplateFunction, precision: number, settings?: DurationFormatSettings): string;
        (template: string | TemplateFunction, settings?: DurationFormatSettings): string;
        (settings?: DurationFormatSettings): string;
    }

    interface DurationFormatSettings {
        escape?: RegExp;
        years?: RegExp;
        months?: RegExp;
        weeks?: RegExp;
        days?: RegExp;
        hours?: RegExp;
        minutes?: RegExp;
        seconds?: RegExp;
        milliseconds?: RegExp;
        general?: RegExp;

        types?: string;

        // "left" - template tokens are trimmed from the left until the first moment token that has a value >= 1
        // "right" - template tokens are trimmed from the right until the first moment token that has a value >= 1
        // (the final moment token is not trimmed, regardless of value)
        // `false` - template tokens are not trimmed
        trim?: 'left' | 'right' | false;

        // number of decimal digits to include after (to the right of) the decimal point (positive integer)
        // or the number of digits to truncate to 0 before (to the left of) the decimal point (negative integer)
        precision?: number;

        // force first moment token with a value to render at full length even when template is trimmed and first moment token has length of 1
        forceLength?: boolean | null;
        template?: string | TemplateFunction;
    }

    type TemplateFunction = ((this: DurationFormatSettings) => string);
}
