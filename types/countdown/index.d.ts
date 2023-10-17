declare namespace countdown {
    type DateFunction = (timespan: Timespan) => void;
    type DateTime = number | Date | DateFunction | null | undefined;

    interface Timespan {
        start?: Date | undefined;
        end?: Date | undefined;
        units?: number | undefined;
        value?: number | undefined;
        millennia?: number | undefined;
        centuries?: number | undefined;
        decades?: number | undefined;
        years?: number | undefined;
        months?: number | undefined;
        weeks?: number | undefined;
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
        milliseconds?: number | undefined;
        toString(label?: string): string;
        toHTML(tagName?: string, label?: string): string;
    }

    interface Format {
        singular?: string | Array<string> | undefined;
        plural?: string | Array<string> | undefined;
        last?: string | undefined;
        delim?: string | undefined;
        empty?: string | undefined;
        formatNumber?(value: number): string;
        formatter?(value: number, unit: number): string;
    }

    interface CountdownStatic {
        (start: DateTime, end?: DateTime, units?: number, max?: number, digits?: number): Timespan | number;
        MILLENNIA: number;
        CENTURIES: number;
        DECADES: number;
        YEARS: number;
        MONTHS: number;
        WEEKS: number;
        DAYS: number;
        HOURS: number;
        MINUTES: number;
        SECONDS: number;
        MILLISECONDS: number;
        ALL: number;
        DEFAULTS: number;
        resetLabels(): void;
        setLabels(
            singular?: string,
            plural?: string,
            last?: string,
            delim?: string,
            empty?: string,
            formatNumber?: (value: number) => string,
            formatter?: (value: number, unit: number) => string,
        ): void;
        resetFormat(): void;
        setFormat(format: Format): void;
    }
}

declare module "countdown" {
    let countdown: countdown.CountdownStatic;
    export = countdown;
}
