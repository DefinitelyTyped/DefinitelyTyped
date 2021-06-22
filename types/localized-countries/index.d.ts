// Type definitions for localized-countries 2.0
// Project: https://github.com/marcbachmann/localized-countries#readme
// Definitions by: coderslagoon <https://github.com/coderslagoon>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function localizedCountries(locale: string | object): localizedCountries.LocalizedCountries;

declare namespace localizedCountries {
    interface LocalizedCountries {
        get(code: string): string;
        array(): Array<{
            code: string;
            label: string;
        }>;
        object(): { [code: string]: string };
    }

    const languages: string[];
}

export = localizedCountries;
