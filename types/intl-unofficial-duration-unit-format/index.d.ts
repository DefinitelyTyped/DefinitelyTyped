// Type definitions for intl-unofficial-duration-unit-format 3.1
// Project: https://github.com/piuccio/intl-unofficial-duration-unit-format
// Definitions by: Maxim Khvatalin <https://github.com/khmm12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

export type DurationUnitFormatStyle = typeof DurationUnitFormat.styles[keyof typeof DurationUnitFormat.styles];

export type DurationUnitFormatUnit = typeof DurationUnitFormat.units[keyof typeof DurationUnitFormat.units];

export type DurationUnitFormatPartType = DurationUnitFormatUnit | "literal" | "group" | "unit";

export interface DurationUnitFormatPart {
    type: DurationUnitFormatPartType;
    value: string;
}

export interface DurationUnitFormatOptions {
    style?: DurationUnitFormatStyle;
    format?: string;
    formatDuration?: string;
    formatUnits?: Record<DurationUnitFormatUnit, string>;
    round?: boolean;
}

export default class DurationUnitFormat {
    constructor(locales?: string | ReadonlyArray<string>, options?: DurationUnitFormatOptions);

    static styles: {
        CUSTOM: "custom";
        TIMER: "timer";
        LONG: "long";
        SHORT: "short";
        NARROW: "narrow";
    };

    static units: {
        DAY: "day";
        HOUR: "hour";
        MINUTE: "minute";
        SECOND: "second";
    };

    format: (value: number) => string;
    formatToParts: (value: number) => DurationUnitFormatPart[];
}
