// Type definitions for inflected 2.1.0
// Project: https://github.com/martinandert/inflected
// Definitions by: Daniel Schmidt <https://github.com/dsci>
//                 Jon Clerck <https://github.com/Jclerck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Inflected {
    namespace Options {
        interface Humanize {
            capitalize?: boolean;
        }

        interface Parameterize {
            preserveCase?: boolean;
            separator?: string;
        }

        interface Transliterate {
            locale?: string;
            replacement?: string;
        }
    }

    interface Inflections {
        acronym(word: string): void;
        plural(rule: RegExp, replacement: string): void;
        plural(rule: string): void;
        singular(rule: RegExp, replacement: string): void;
        singular(rule: string): void;
        irregular(singular: string, plural: string): void;
        uncountable(...words: string[]): void;
        human(rule: RegExp | string, replacement: string): void;
        clear(scope?: string): void;
    }

    interface Transliterations {
        approximate(original: string, replacement: string): void;
    }
}

interface Inflected {
    pluralize(word: string, locale?: string): string;
    singularize(word: string, locale?: string): string;
    camelize(term: string, uppercaseFirstLetter?: boolean): string;
    underscore(camelCaseWord: string): string;
    humanize(lowerCaseAndUnderscoredWord: string, options?: Inflected.Options.Humanize): string;
    titleize(sentence: string): string;
    tableize(className: string): string;
    classify(tableName: string): string;
    dasherize(underscoredWord: string): string;
    foreignKey(className: string, separateClassNameAndIdWithUnderscore?: boolean): string;
    ordinal(number: number): string;
    ordinalize(number: number): string;
    inflections(locale: string, inflect?: (inflect: Inflected.Inflections) => void): void;
    inflections(inflect?: (inflect: Inflected.Inflections) => void): void;
    transliterate(sentence: string, options?: Inflected.Options.Transliterate): string;
    transliterations(locale: string, transliterate?: (transliterate: Inflected.Transliterations) => void): void;
    transliterations(transliterate?: (transliterate: Inflected.Transliterations) => void): void;
    parameterize(sentence: string, options?: Inflected.Options.Parameterize): string;
    constantify(words: string): string;
}

declare let Inflector: Inflected;
export = Inflector;
