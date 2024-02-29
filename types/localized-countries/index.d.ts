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
