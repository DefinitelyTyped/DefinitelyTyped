import { Gradation, Unit } from '../gradation';
import { Locale } from '../locale';

export type Flavour = 'tiny' | 'short-time' | 'narrow' | 'short' | 'long';

export interface CustomFormatterOptions {
    now: number;
    date?: Date;
    time: number;
    elapsed: number;
    locale: Locale;
}

export type CustomFormatter = (options: CustomFormatterOptions) => string | undefined;

export interface FormatStyle {
    units?: Unit;
    gradation?: Gradation[];
    flavour?: Flavour[];
    custom?: CustomFormatter;
    format?(date: Date | number, locale: Locale): string;
}

export { default as timeStyle } from './time';
export { default as twitterStyle } from './twitter';
export { default as defaultStyle } from './default';
