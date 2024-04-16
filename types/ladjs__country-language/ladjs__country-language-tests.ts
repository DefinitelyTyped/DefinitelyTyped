import CountryLanguage = require("@ladjs/country-language");

// $ExpectType string[]
CountryLanguage.getLanguageCodes(2);

// $ExpectType string[]
CountryLanguage.getLanguageCodes(3);

// $ExpectType string[]
CountryLanguage.getLanguageCodes();

// $ExpectType string[]
CountryLanguage.getLanguageCodes(1);

// @ts-expect-error
CountryLanguage.getLanguageCodes(4);

// $ExpectType number[]
CountryLanguage.getLanguageCodes((error, data) => {
    // $ExpectType Error | null
    error;
    // $ExpectType string[]
    data;

    return data.map((lang) => lang.length);
});

// $ExpectType string[]
CountryLanguage.getCountryCodes(2);

// $ExpectType string[]
CountryLanguage.getCountryCodes(3);

// $ExpectType string[]
CountryLanguage.getCountryCodes();

// $ExpectType string[]
CountryLanguage.getCountryCodes(1);

// @ts-expect-error
CountryLanguage.getCountryCodes(4);

// $ExpectType number[]
CountryLanguage.getCountryCodes((error, data) => {
    // $ExpectType Error | null
    error;
    // $ExpectType string[]
    data;

    return data.map((country) => country.length);
});

// @ts-expect-error
CountryLanguage.getCountryCodes("foo");

// $ExpectType boolean
CountryLanguage.languageCodeExists("en");

// $ExpectType boolean
CountryLanguage.countryCodeExists("US");

// @ts-expect-error
CountryLanguage.countryCodeExists(Symbol());

// $ExpectType boolean
CountryLanguage.countryCodeExists("RHB");

// $ExpectType boolean
CountryLanguage.countryCodeExists("test");

// @ts-expect-error
CountryLanguage.countryCodeExists(5);

// $ExpectType DetailedCountryData
const country = CountryLanguage.getCountry("US");

// $ExpectType string
country.code_2;

// @ts-expect-error
country.code_6;

// @ts-expect-error
CountryLanguage.getCountry();

// @ts-expect-error
CountryLanguage.getCountry(5);

CountryLanguage.getCountry("GB", function(err, country) {
    if (err) {
        // $ExpectType Error
        err;
    } else {
        // $ExpectType ExtendedLanguageData[]
        country.languages;
    }
});

// $ExpectType DetailedLanguageData
const language = CountryLanguage.getLanguage("en");

// $ExpectType string
language.iso639_1;

// @ts-expect-error
language.iso639_4;

// @ts-expect-error
CountryLanguage.getLanguage();

// @ts-expect-error
CountryLanguage.getLanguage(5);

// $ExpectType number
CountryLanguage.getLanguage("en", (error, data) => {
    // $ExpectType Error | null
    error;
    // $ExpectType DetailedLanguageData
    data;

    return 5;
});

// $ExpectType void
CountryLanguage.getLanguage("en", function(err, language) {
    if (err) {
        // $ExpectType Error
        err;
    } else {
        // $ExpectType DetailedCountryData[]
        language.countries;
    }
});

// $ExpectType LanguageData[]
CountryLanguage.getCountryLanguages("LA");

// $ExpectType LanguageData[]
CountryLanguage.getCountryLanguages("GB");

// $ExpectType void
CountryLanguage.getCountryLanguages("GB", function(err, languages) {
    if (err) {
        // $ExpectType Error
        err;
    } else {
        languages.forEach((languageCodes) => {
            // $ExpectType string
            languageCodes.iso639_1;
        });
    }
});

// @ts-expect-error
CountryLanguage.getCountryLanguages();

// @ts-expect-error
CountryLanguage.getCountryLanguages(5);

// $ExpectType LanguageData[][]
CountryLanguage.getCountryLanguages("US", (error, data) => {
    // $ExpectType Error | null
    error;
    // $ExpectType LanguageData[]
    data;

    return [data];
});

// $ExpectType CountryData[]
CountryLanguage.getLanguageCountries("en");

// $ExpectType CountryData[]
CountryLanguage.getLanguageCountries("eng");

// $ExpectType void
CountryLanguage.getLanguageCountries("en", function(err, countries) {
    if (err) {
        // $ExpectType Error
        err;
    } else {
        countries.forEach((countryCodes) => {
            // $ExpectType string
            countryCodes.code_3;
        });
    }
});

// @ts-expect-error
CountryLanguage.getLanguageCountries();

// $ExpectType LanguageCultureData[]
CountryLanguage.getCountryMsLocales("US");

// $ExpectType LanguageCultureData[]
CountryLanguage.getCountryMsLocales("USA");

// $ExpectType void
CountryLanguage.getCountryMsLocales("GB", function(err, locales) {
    if (err) {
        // $ExpectType Error
        err;
    } else {
        locales.forEach(function(locale) {
            // $ExpectType string
            locale.langCultureName;
        });
    }
});

// @ts-expect-error
CountryLanguage.getCountryMsLocales();

// $ExpectType LanguageCultureData[]
CountryLanguage.getLanguageMsLocales("en");

// $ExpectType LanguageCultureData[]
CountryLanguage.getCountryMsLocales("en-US");

// $ExpectType void
CountryLanguage.getCountryMsLocales("en", function(err, locales) {
    if (err) {
        // $ExpectType Error
        err;
    } else {
        locales.forEach(function(locale) {
            // $ExpectType string
            locale.langCultureName;
        });
    }
});

// @ts-expect-error
CountryLanguage.getCountryMsLocales();

// $ExpectType ExtendedCountryData[]
CountryLanguage.getCountries();

// @ts-expect-error
CountryLanguage.getCountries("CA");

// $ExpectType ExtendedLanguageData[]
CountryLanguage.getLanguages();

// @ts-expect-error
CountryLanguage.getLanguages("en");

// $ExpectType string[]
CountryLanguage.getLanguageFamilies();

// @ts-expect-error
CountryLanguage.getLanguageFamilies("en");

// $ExpectType string[]
CountryLanguage.getLocales();

// $ExpectType string[]
CountryLanguage.getLocales(true);

// $ExpectType string[]
CountryLanguage.getLocales(false);

// @ts-expect-error
CountryLanguage.getLocales(5);

// $ExpectType void
CountryLanguage.getLanguageFamilyMembers("Indo-European", function(err, languages) {
    if (err) {
        // $ExpectType Error
        err;
    } else {
        languages.forEach(function(language) {
            // $ExpectType string[]
            language.name;
        });
    }
});
