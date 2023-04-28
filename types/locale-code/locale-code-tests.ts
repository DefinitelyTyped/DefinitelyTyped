import localeCode = require('locale-code');

// $ExpectType string
localeCode.getCountryCode('en-US');
// @ts-expect-error
localeCode.getCountryCode(1);

// $ExpectType string
localeCode.getCountryName('en-US');
// @ts-expect-error
localeCode.getCountryName(1);

// $ExpectType boolean
localeCode.validateCountryName('en-US');
// @ts-expect-error
localeCode.validateCountryName(1);

// $ExpectType boolean
localeCode.validate('en-US');
// @ts-expect-error
localeCode.validate(1);

// $ExpectType string
localeCode.getLanguageCode('en-US');
// @ts-expect-error
localeCode.getLanguageCode(1);

// $ExpectType string
localeCode.getLanguageName('en-US');
// @ts-expect-error
localeCode.getLanguageName(1);

// $ExpectType string
localeCode.getLanguageNativeName('en-US');
// @ts-expect-error
localeCode.getLanguageNativeName(1);

// $ExpectType boolean
localeCode.validateLanguageCode('en-US');
// @ts-expect-error
localeCode.validateLanguageCode(1);

// $ExpectType { [propName: string]: any; name: string; code: string; nativeName: string; }[]
localeCode.getLanguages(['en-US']);
// @ts-expect-error
localeCode.getLanguages(1);
