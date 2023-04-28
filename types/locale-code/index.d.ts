// Type definitions for locale-code 2.0
// Project: https://github.com/meikidd/locale-code#readme
// Definitions by: OyewoleOyedeji <https://github.com/OyewoleOyedeji>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = localeCode;

declare function localeCode(): void;

declare namespace localeCode {
    function getLanguageCode(code: string): string;
    function getLanguageName(code: string): string;
    function getLanguageNativeName(code: string): string;
    function validateLanguageCode(code: string): boolean;
    function getLanguages(
        codes: string[],
    ): Array<{ name: string; code: string; nativeName: string; [propName: string]: any }>;
    function getCountryCode(code: string): string;
    function getCountryName(code: string): string;
    function validateCountryName(code: string): boolean;
    function validate(code: string): boolean;
}
