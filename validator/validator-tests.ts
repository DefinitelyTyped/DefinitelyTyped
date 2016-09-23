/// <reference types="validator" />

import * as validator from 'validator';

let any: any;

// **************
// * Validators *
// **************

{
  let result: boolean;

  result = validator.contains('sample', 'sample');

  result = validator.equals('sample', 'sample');

  result = validator.isAfter('sample');
  result = validator.isAfter('sample', new Date().toString());

  result = validator.isAlpha('sample');
  result = validator.isAlpha('sample', 'ar');
  result = validator.isAlpha('sample', 'ar-AE');
  result = validator.isAlpha('sample', 'ar-BH');
  result = validator.isAlpha('sample', 'ar-DZ');
  result = validator.isAlpha('sample', 'ar-EG');
  result = validator.isAlpha('sample', 'ar-IQ');
  result = validator.isAlpha('sample', 'ar-JO');
  result = validator.isAlpha('sample', 'ar-KW');
  result = validator.isAlpha('sample', 'ar-LB');
  result = validator.isAlpha('sample', 'ar-LY');
  result = validator.isAlpha('sample', 'ar-MA');
  result = validator.isAlpha('sample', 'ar-QA');
  result = validator.isAlpha('sample', 'ar-QM');
  result = validator.isAlpha('sample', 'ar-SA');
  result = validator.isAlpha('sample', 'ar-SD');
  result = validator.isAlpha('sample', 'ar-SY');
  result = validator.isAlpha('sample', 'ar-TN');
  result = validator.isAlpha('sample', 'ar-YE');
  result = validator.isAlpha('sample', 'cs-CZ');
  result = validator.isAlpha('sample', 'de-DE');
  result = validator.isAlpha('sample', 'en-AU');
  result = validator.isAlpha('sample', 'en-GB');
  result = validator.isAlpha('sample', 'en-HK');
  result = validator.isAlpha('sample', 'en-IN');
  result = validator.isAlpha('sample', 'en-NZ');
  result = validator.isAlpha('sample', 'en-US');
  result = validator.isAlpha('sample', 'en-ZA');
  result = validator.isAlpha('sample', 'en-ZM');
  result = validator.isAlpha('sample', 'es-ES');
  result = validator.isAlpha('sample', 'fr-FR');
  result = validator.isAlpha('sample', 'hu-HU');
  result = validator.isAlpha('sample', 'nl-NL');
  result = validator.isAlpha('sample', 'pl-PL');
  result = validator.isAlpha('sample', 'pt-BR');
  result = validator.isAlpha('sample', 'pt-PT');
  result = validator.isAlpha('sample', 'ru-RU');
  result = validator.isAlpha('sample', 'sr-RS');
  result = validator.isAlpha('sample', 'sr-RS@latin');
  result = validator.isAlpha('sample', 'tr-TR');

  result = validator.isAlphanumeric('sample', 'ar');
  result = validator.isAlphanumeric('sample', 'ar-AE');
  result = validator.isAlphanumeric('sample', 'ar-BH');
  result = validator.isAlphanumeric('sample', 'ar-DZ');
  result = validator.isAlphanumeric('sample', 'ar-EG');
  result = validator.isAlphanumeric('sample', 'ar-IQ');
  result = validator.isAlphanumeric('sample', 'ar-JO');
  result = validator.isAlphanumeric('sample', 'ar-KW');
  result = validator.isAlphanumeric('sample', 'ar-LB');
  result = validator.isAlphanumeric('sample', 'ar-LY');
  result = validator.isAlphanumeric('sample', 'ar-MA');
  result = validator.isAlphanumeric('sample', 'ar-QA');
  result = validator.isAlphanumeric('sample', 'ar-QM');
  result = validator.isAlphanumeric('sample', 'ar-SA');
  result = validator.isAlphanumeric('sample', 'ar-SD');
  result = validator.isAlphanumeric('sample', 'ar-SY');
  result = validator.isAlphanumeric('sample', 'ar-TN');
  result = validator.isAlphanumeric('sample', 'ar-YE');
  result = validator.isAlphanumeric('sample', 'cs-CZ');
  result = validator.isAlphanumeric('sample', 'de-DE');
  result = validator.isAlphanumeric('sample', 'en-AU');
  result = validator.isAlphanumeric('sample', 'en-GB');
  result = validator.isAlphanumeric('sample', 'en-HK');
  result = validator.isAlphanumeric('sample', 'en-IN');
  result = validator.isAlphanumeric('sample', 'en-NZ');
  result = validator.isAlphanumeric('sample', 'en-US');
  result = validator.isAlphanumeric('sample', 'en-ZA');
  result = validator.isAlphanumeric('sample', 'en-ZM');
  result = validator.isAlphanumeric('sample', 'es-ES');
  result = validator.isAlphanumeric('sample', 'fr-FR');
  result = validator.isAlphanumeric('sample', 'fr-BE');
  result = validator.isAlphanumeric('sample', 'hu-HU');
  result = validator.isAlphanumeric('sample', 'nl-BE');
  result = validator.isAlphanumeric('sample', 'nl-NL');
  result = validator.isAlphanumeric('sample', 'pl-PL');
  result = validator.isAlphanumeric('sample', 'pt-BR');
  result = validator.isAlphanumeric('sample', 'pt-PT');
  result = validator.isAlphanumeric('sample', 'ru-RU');
  result = validator.isAlphanumeric('sample', 'sr-RS');
  result = validator.isAlphanumeric('sample', 'sr-RS@latin');
  result = validator.isAlphanumeric('sample', 'tr-TR');

  result = validator.isAscii('sample');

  result = validator.isBase64('sample');

  result = validator.isBefore('sample');
  result = validator.isBefore('sample', new Date().toString());

  result = validator.isBoolean('sample');

  let isByteLengthOptions: ValidatorJS.IsByteLengthOptions;
  result = validator.isByteLength('sample', isByteLengthOptions);
  result = validator.isByteLength('sample', 0);
  result = validator.isByteLength('sample', 0, 42);

  result = validator.isCreditCard('sample');

  let isCurrencyOptions: ValidatorJS.IsCurrencyOptions;
  result = validator.isCurrency('sample');
  result = validator.isCurrency('sample', isCurrencyOptions);

  result = validator.isDataURI('sample');

  result = validator.isDate('sample');

  result = validator.isDecimal('sample');

  result = validator.isDivisibleBy('sample', 2);

  let isEmailOptions: ValidatorJS.IsEmailOptions;
  result = validator.isEmail('sample');
  result = validator.isEmail('sample', isEmailOptions);

  let isFQDNOptions: ValidatorJS.IsFQDNOptions;
  result = validator.isFQDN('sample');
  result = validator.isFQDN('sample', isFQDNOptions);

  let isFloatOptions: ValidatorJS.IsFloatOptions;
  result = validator.isFloat('sample');
  result = validator.isFloat('sample', isFloatOptions);

  result = validator.isFullWidth('sample');

  result = validator.isHalfWidth('sample');

  result = validator.isHexColor('sample');

  result = validator.isHexadecimal('sample');

  result = validator.isIP('sample');
  result = validator.isIP('sample', 6);

  result = validator.isISBN('sample');
  result = validator.isISBN('sample', 13);

  result = validator.isISIN('sample');

  result = validator.isISO8601('sample');

  result = validator.isIn('sample', []);

  let isIntOptions: ValidatorJS.IsIntOptions;
  result = validator.isInt('sample');
  result = validator.isInt('sample', isIntOptions);

  result = validator.isJSON('sample');

  let isLengthOptions: ValidatorJS.IsLengthOptions;
  result = validator.isLength('sample', isLengthOptions);
  result = validator.isLength('sample', 3);
  result = validator.isLength('sample', 3, 5);

  result = validator.isLowercase('sample');

  result = validator.isMACAddress('sample');

  result = validator.isMD5('sample');

  result = validator.isMobilePhone('sample', 'en-US');

  result = validator.isMongoId('sample');

  result = validator.isMultibyte('sample');

  result = validator.isNull('sample');

  result = validator.isNumeric('sample');

  result = validator.isSurrogatePair('sample');

  let isURLOptions: ValidatorJS.IsURLOptions;
  result = validator.isURL('sample');
  result = validator.isURL('sample', isURLOptions);

  result = validator.isUUID('sample');
  result = validator.isUUID('sample', 5);
  result = validator.isUUID('sample', 'all');

  result = validator.isUppercase('sample');

  result = validator.isVariableWidth('sample');

  result = validator.isWhitelisted('sample', 'abc');
  result = validator.isWhitelisted('sample', ['a', 'b', 'c']);

  result = validator.matches('foobar', 'foo/i');
  result = validator.matches('foobar', 'foo', 'i');
}

// **************
// * Sanitizers *
// **************

{
  let result: string;

  result = validator.blacklist('sample', 'abc');

  result = validator.escape('sample');

  result = validator.unescape('sample');

  result = validator.ltrim('sample');
  result = validator.ltrim('sample', ' ');

  let normalizeEmailOptions: ValidatorJS.NormalizeEmailOptions;
  result = validator.normalizeEmail('sample');
  result = validator.normalizeEmail('sample', normalizeEmailOptions);

  result = validator.rtrim('sample');
  result = validator.rtrim('sample', ' ');

  result = validator.stripLow('sample');
  result = validator.stripLow('sample', true);
}

{
  let result: boolean;

  result = validator.toBoolean(any);
  result = validator.toBoolean(any, true);
}

{
  let result: Date;

  result = validator.toDate(any);
}

{
  let result: number;

  result = validator.toFloat(any);

  result = validator.toInt(any);
  result = validator.toInt(any, 10);
}

{
  let result: string;

  result = validator.trim('sample');
  result = validator.trim('sample', ' ');

  result = validator.whitelist('sample', 'abc');
}

// **************
// * Extensions *
// **************

validator.extend<(str: string, options: {}) => boolean>('isTest', (str: any, options: {}) => !str);
