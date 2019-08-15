// Type definitions for localized-countries 1.0
// Project: https://github.com/marcbachmann/localized-countries#readme
// Definitions by: coderslagoon <https://github.com/coderslagoon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface LocalizedCountries {
    get(code: string): string;
    array(): Array<{
        code: string;
        label: string;
    }>;
    object(): { [code: string]: string };
}

declare function localizedCountries(locale: string|object): LocalizedCountries;

export = localizedCountries;
