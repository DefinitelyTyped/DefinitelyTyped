// Type definitions for moment-duration-format v1.3.0
// Project: https://github.com/jsmreese/moment-duration-format
// Definitions by: Swint De Coninck <https://github.com/SwintDC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace moment {
    interface DurationFormatSettings {
      template?: string;
      precision?: number;
      trim?: boolean|string;
      forceLength?: boolean;
    }

    interface Duration {
        format(template: string, precision?: number, settings?: DurationFormatSettings): string;
        format(template: string, settings?: DurationFormatSettings): string;
        format(settings: DurationFormatSettings): string;
    }
}
