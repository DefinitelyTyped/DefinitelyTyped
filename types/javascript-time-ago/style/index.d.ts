import { Gradation, Unit } from "../gradation";
import { Locale } from "../locale";

export type Flavour = "tiny" | "short-time" | "narrow" | "short" | "long";

export interface CustomFormatterOptions {
    now: number;
    date?: Date | undefined;
    time: number;
    elapsed: number;
    locale: Locale;
}

export type CustomFormatter = (options: CustomFormatterOptions) => string | undefined;

export interface FormatStyle {
    units?: Unit | undefined;
    gradation?: Gradation[] | undefined;
    flavour?: Flavour[] | undefined;
    custom?: CustomFormatter | undefined;
    format?(date: Date | number, locale: Locale): string;
}

export { default as defaultStyle } from "./default";
export { default as timeStyle } from "./time";
export { default as twitterStyle } from "./twitter";
