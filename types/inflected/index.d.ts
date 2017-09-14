// Type definitions for inflected 1.1.6
// Project: https://github.com/martinandert/inflected
// Definitions by: Daniel Schmidt <https://github.com/dsci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace Options {
    interface Humanize {
        capitalize: boolean;
    }

    interface Transliterate {
        locale: string;
        replacement: string;
    }

    interface Parameterize {
        separator: string;
    }
}

interface Inflected {
    pluralize(word: string, locale?: string): string;
    singularize(word: string, locale?: string): string;
    camelize(term: string, uppercaseFirstLetter?: boolean): string;
    underscore(camelCaseWord: string): string;
    humanize(lowerCaseAndUnderscoredWord: string,
        options?: Options.Humanize): string;
    titleize(sentence: string): string;
    tableize(className: string): string;
    classify(tableName: string): string;
    dasherize(underscoredWord: string): string;
    foreignKey(className: string,
        separateClassNameAndIdWithUnderscore?: boolean): string;
    ordinal(number: number): string;
    ordinalize(number: number): string;
    transliterate(sentence: string, options?: Options.Transliterate): string;
    parameterize(sentence: string, options?: Options.Parameterize): string;
}

declare var Inflector: Inflected;
export = Inflector;
