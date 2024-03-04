export type CountryLanguageCallback<T, R> = (error: Error | null, data: T) => R;
export type CodeType = 1 | 2 | 3;
export type Direction = "LTR" | "RTL";

export interface LanguageData {
    iso639_1: string;
    iso639_2: string;
    iso639_3: string;
}

export interface ExtendedLanguageData extends LanguageData {
    iso639_2en: string;
    name: string[];
    nativeName: string[];
    direction: Direction;
    family: string;
    countries: string[];
    langCultureMs?: LanguageCultureData[];
}

export type DetailedLanguageData = Omit<ExtendedLanguageData, "countries"> & {
    countries: DetailedCountryData[];
};

export interface LanguageCultureData {
    langCultureName: string;
    displayName: string;
    cultureCode: string;
}

export interface CountryData {
    code_2: string;
    code_3: string;
    numCode: string;
}

export interface ExtendedCountryData extends CountryData {
    name: string;
    languages: string[];
    langCultureMs?: LanguageCultureData[];
}

export type DetailedCountryData = Omit<ExtendedCountryData, "languages"> & {
    languages: ExtendedLanguageData[];
};

export function getLanguageCodes<T>(languageCodeType: CodeType, callback: CountryLanguageCallback<string[], T>): T;
export function getLanguageCodes<T>(callback: CountryLanguageCallback<string[], T>): T;
export function getLanguageCodes(languageCodeType?: CodeType): string[];

export function getCountryCodes<T>(countryCodeType: CodeType, callback: CountryLanguageCallback<string[], T>): T;
export function getCountryCodes<T>(callback: CountryLanguageCallback<string[], T>): T;
export function getCountryCodes(countryCodeType?: CodeType): string[];

export function languageCodeExists(languageCode: string): boolean;

export function countryCodeExists(countryCode: string): boolean;

export function getCountry<T>(countryCode: string, callback: CountryLanguageCallback<DetailedCountryData, T>): T;
export function getCountry(countryCode: string): DetailedCountryData;

export function getLanguage<T>(languageCode: string, callback: CountryLanguageCallback<DetailedLanguageData, T>): T;
export function getLanguage(languageCode: string): DetailedLanguageData;

export function getCountryLanguages<T>(countryCode: string, callback: CountryLanguageCallback<LanguageData[], T>): T;
export function getCountryLanguages(countryCode: string): LanguageData[];

export function getLanguageCountries<T>(languageCode: string, callback: CountryLanguageCallback<CountryData[], T>): T;
export function getLanguageCountries(languageCode: string): CountryData[];

export function getCountryMsLocales<T>(
    countryCode: string,
    callback: CountryLanguageCallback<LanguageCultureData[], T>,
): T;
export function getCountryMsLocales(countryCode: string): LanguageCultureData[];

export function getLanguageMsLocales<T>(
    languageCode: string,
    callback: CountryLanguageCallback<LanguageCultureData[], T>,
): T;
export function getLanguageMsLocales(languageCode: string): LanguageCultureData[];

export function getCountries(): ExtendedCountryData[];

export function getLanguages(): ExtendedLanguageData[];

export function getLanguageFamilies(): string[];

export function getLocales(mode?: boolean): string[];

export function getLanguageFamilyMembers<T>(
    family: string,
    callback: CountryLanguageCallback<DetailedLanguageData[], T>,
): T;
export function getLanguageFamilyMembers(family: string): DetailedLanguageData[];
