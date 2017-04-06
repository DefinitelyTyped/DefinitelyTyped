// Type definitions for inflection 1.5.0
// Project: https://github.com/dreamerslab/node.inflection
// Definitions by: Shogo Iwano <https://github.com/shiwano>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Inflection {
    indexOf<T, T2>(arr: T[], item: T2, from_index?: number, compare_func?: (arr_item: T, item: T2) => boolean): number;
    pluralize(str: string, plural?: string): string;
    singularize(str: string, singular?: string): string;
    inflect(str: string, count: number, singular?: string, plural?: string): string;
    camelize(str: string, low_first_letter?: boolean): string;
    underscore(str: string, all_upper_case?: boolean): string;
    humanize(str: string, low_first_letter?: boolean): string;
    capitalize(str: string): string;
    dasherize(str: string): string;
    titleize(str: string): string;
    demodulize(str: string): string;
    tableize(str: string): string;
    classify(str: string): string;
    foreign_key(str: string, drop_id_ubar?: boolean): string;
    ordinalize(str: string): string;
    transform(str: string, arr: string[]): string;
}

declare var inflection: Inflection;
export = inflection;
export as namespace inflection;
