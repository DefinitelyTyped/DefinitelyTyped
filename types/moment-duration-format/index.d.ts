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

    type UnitOfTrimV1 = "left" | "right";
    type UnitOfTrim = "large" | "small" | "both" | "mid" | "all" | "final";

    interface DurationFormatSettings {
        trim?: false | UnitOfTrimV1 | UnitOfTrim | string | Array<UnitOfTrim | string> | undefined;
        largest?: number | undefined;
        trunc?: true | undefined;
        stopTrim?: string | undefined;

        minValue?: number | undefined;
        maxValue?: number | undefined;

        useGrouping?: boolean | undefined;
        precision?: number | undefined;
        decimalSeparator?: string | undefined;
        groupingSeparator?: string | undefined;
        grouping?: number[] | undefined;

        useSignificantDigits?: true | undefined;

        forceLength?: boolean | undefined;
        template?: string | TemplateFunction | undefined;

        userLocale?: string | undefined;
        usePlural?: boolean | undefined;
        useLeftUnits?: boolean | undefined;
        useToLocaleString?: boolean | undefined;
    }

    type DurationLabelType = "long" | "standard" | "short";
    type DurationTemplate = "HMS" | "HM" | "MS";
    type DurationToken =
        | "S"
        | "SS"
        | "SSS"
        | "s"
        | "ss"
        | "sss"
        | "m"
        | "mm"
        | "mmm"
        | "h"
        | "hh"
        | "hhh"
        | "d"
        | "dd"
        | "ddd"
        | "w"
        | "ww"
        | "www"
        | "M"
        | "MM"
        | "MMM"
        | "y"
        | "yy"
        | "yyy";

    type DurationLabelDef = { [duration in DurationToken]: string };
    type DurationTimeDef = { [template in DurationTemplate]: string };

    interface DurationLabelTypeDef {
        type: DurationLabelType;
        string: string;
    }

    interface LocaleSpecification {
        durationLabelsLong?: DurationLabelDef | undefined;
        durationLabelsStandard?: DurationLabelDef | undefined;
        durationLabelsShort?: DurationLabelDef | undefined;
        durationTimeTemplates?: DurationTimeDef | undefined;
        durationLabelTypes?: DurationLabelTypeDef[] | undefined;
        durationPluralKey?: ((token: string, integerValue: number, decimalValue: number) => string) | undefined;
    }

    type TemplateFunction = (this: DurationFormatSettings) => string;
}

declare function momentDurationFormatSetup(_moment: typeof moment): void;

export = momentDurationFormatSetup;
