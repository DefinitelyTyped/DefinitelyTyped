// Type definitions for moment-duration-format 1.3
// Project: https://github.com/jsmreese/moment-duration-format
// Definitions by: Swint De Coninck <https://github.com/SwintDC>, Niklas Walter <https://github.com/TwoStone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from "moment";

declare module "moment" {
    interface Duration {
        format(template: string, precision?: number, settings?: DurationFormatSettings): string;
    }

    interface DurationFormatSettings {
        template: string;
        precision: number;
        trim: boolean;
        forceLength: boolean;
    }
}
