/// <reference path='./validator.d.ts' />

import * as validator from 'validator';


/************************************************
*                                               *
*                  IMPORT TESTS                 *
*                                               *
************************************************/
import * as blacklistFunc from 'validator/lib/blacklist';
import * as containsFunc from 'validator/lib/contains';
import * as equalsFunc from 'validator/lib/equals';
import * as escapeFunc from 'validator/lib/escape';
import * as isAfterFunc from 'validator/lib/isAfter';
import * as isAlphaFunc from 'validator/lib/isAlpha';
import * as isAlphanumericFunc from 'validator/lib/isAlphanumeric';
import * as isAsciiFunc from 'validator/lib/isAscii';
import * as isBase64Func from 'validator/lib/isBase64';
import * as isBeforeFunc from 'validator/lib/isBefore';
import * as isBooleanFunc from 'validator/lib/isBoolean';
import * as isByteLengthFunc from 'validator/lib/isByteLength';
import * as isCreditCardFunc from 'validator/lib/isCreditCard';
import * as isCurrencyFunc from 'validator/lib/isCurrency';
import * as isDataURIFunc from 'validator/lib/isDataURI';
import * as isDateFunc from 'validator/lib/isDate';
import * as isDecimalFunc from 'validator/lib/isDecimal';
import * as isDivisibleByFunc from 'validator/lib/isDivisibleBy';
import * as isEmailFunc from 'validator/lib/isEmail';
import * as isFQDNFunc from 'validator/lib/isFQDN';
import * as isFloatFunc from 'validator/lib/isFloat';
import * as isFullWidthFunc from 'validator/lib/isFullWidth';
import * as isHalfWidthFunc from 'validator/lib/isHalfWidth';
import * as isHexColorFunc from 'validator/lib/isHexColor';
import * as isHexadecimalFunc from 'validator/lib/isHexadecimal';
import * as isIPFunc from 'validator/lib/isIP';
import * as isISBNFunc from 'validator/lib/isISBN';
import * as isISINFunc from 'validator/lib/isISIN';
import * as isISO8601Func from 'validator/lib/isISO8601';
import * as isInFunc from 'validator/lib/isIn';
import * as isIntFunc from 'validator/lib/isInt';
import * as isJSONFunc from 'validator/lib/isJSON';
import * as isLengthFunc from 'validator/lib/isLength';
import * as isLowercaseFunc from 'validator/lib/isLowercase';
import * as isMACAddressFunc from 'validator/lib/isMACAddress';
import * as isMD5Func from 'validator/lib/isMD5';
import * as isMobilePhoneFunc from 'validator/lib/isMobilePhone';
import * as isMongoIdFunc from 'validator/lib/isMongoId';
import * as isMultibyteFunc from 'validator/lib/isMultibyte';
import * as isNullFunc from 'validator/lib/isNull';
import * as isNumericFunc from 'validator/lib/isNumeric';
import * as isSurrogatePairFunc from 'validator/lib/isSurrogatePair';
import * as isURLFunc from 'validator/lib/isURL';
import * as isUUIDFunc from 'validator/lib/isUUID';
import * as isUppercaseFunc from 'validator/lib/isUppercase';
import * as isVariableWidthFunc from 'validator/lib/isVariableWidth';
import * as isWhitelistedFunc from 'validator/lib/isWhitelisted';
import * as ltrimFunc from 'validator/lib/ltrim';
import * as matchesFunc from 'validator/lib/matches';
import * as normalizeEmailFunc from 'validator/lib/normalizeEmail';
import * as rtrimFunc from 'validator/lib/rtrim';
import * as stripLowFunc from 'validator/lib/stripLow';
import * as toBooleanFunc from 'validator/lib/toBoolean';
import * as toDateFunc from 'validator/lib/toDate';
import * as toFloatFunc from 'validator/lib/toFloat';
import * as toIntFunc from 'validator/lib/toInt';
import * as trimFunc from 'validator/lib/trim';
import * as unescapeFunc from 'validator/lib/unescape';
import * as whitelistFunc from 'validator/lib/whitelist';

namespace import_tests {
  let _blacklist = validator.blacklist;
  _blacklist = blacklistFunc;

  let _contains = validator.contains;
  _contains = containsFunc;

  let _equals = validator.equals;
  _equals = equalsFunc;

  let _escape = validator.escape;
  _escape = escapeFunc;

  let _isAfter = validator.isAfter;
  _isAfter = isAfterFunc;

  let _isAlpha = validator.isAlpha;
  _isAlpha = isAlphaFunc;

  let _isAlphanumeric = validator.isAlphanumeric;
  _isAlphanumeric = isAlphanumericFunc;

  let _isAscii = validator.isAscii;
  _isAscii = isAsciiFunc;

  let _isBase64 = validator.isBase64;
  _isBase64 = isBase64Func;

  let _isBefore = validator.isBefore;
  _isBefore = isBeforeFunc;

  let _isBoolean = validator.isBoolean;
  _isBoolean = isBooleanFunc;

  let _isByteLength = validator.isByteLength;
  _isByteLength = isByteLengthFunc;

  let _isCreditCard = validator.isCreditCard;
  _isCreditCard = isCreditCardFunc;

  let _isCurrency = validator.isCurrency;
  _isCurrency = isCurrencyFunc;

  let _isDataURI = validator.isDataURI;
  _isDataURI = isDataURIFunc;

  let _isDate = validator.isDate;
  _isDate = isDateFunc;

  let _isDecimal = validator.isDecimal;
  _isDecimal = isDecimalFunc;

  let _isDivisibleBy = validator.isDivisibleBy;
  _isDivisibleBy = isDivisibleByFunc;

  let _isEmail = validator.isEmail;
  _isEmail = isEmailFunc;

  let _isFQDN = validator.isFQDN;
  _isFQDN = isFQDNFunc;

  let _isFloat = validator.isFloat;
  _isFloat = isFloatFunc;

  let _isFullWidth = validator.isFullWidth;
  _isFullWidth = isFullWidthFunc;

  let _isHalfWidth = validator.isHalfWidth;
  _isHalfWidth = isHalfWidthFunc;

  let _isHexColor = validator.isHexColor;
  _isHexColor = isHexColorFunc;

  let _isHexadecimal = validator.isHexadecimal;
  _isHexadecimal = isHexadecimalFunc;

  let _isIP = validator.isIP;
  _isIP = isIPFunc;

  let _isISBN = validator.isISBN;
  _isISBN = isISBNFunc;

  let _isISIN = validator.isISIN;
  _isISIN = isISINFunc;

  let _isISO8601 = validator.isISO8601;
  _isISO8601 = isISO8601Func;

  let _isIn = validator.isIn;
  _isIn = isInFunc;

  let _isInt = validator.isInt;
  _isInt = isIntFunc;

  let _isJSON = validator.isJSON;
  _isJSON = isJSONFunc;

  let _isLength = validator.isLength;
  _isLength = isLengthFunc;

  let _isLowercase = validator.isLowercase;
  _isLowercase = isLowercaseFunc;

  let _isMACAddress = validator.isMACAddress;
  _isMACAddress = isMACAddressFunc;

  let _isMD5 = validator.isMD5;
  _isMD5 = isMD5Func;

  let _isMobilePhone = validator.isMobilePhone;
  _isMobilePhone = isMobilePhoneFunc;

  let _isMongoId = validator.isMongoId;
  _isMongoId = isMongoIdFunc;

  let _isMultibyte = validator.isMultibyte;
  _isMultibyte = isMultibyteFunc;

  let _isNull = validator.isNull;
  _isNull = isNullFunc;

  let _isNumeric = validator.isNumeric;
  _isNumeric = isNumericFunc;

  let _isSurrogatePair = validator.isSurrogatePair;
  _isSurrogatePair = isSurrogatePairFunc;

  let _isURL = validator.isURL;
  _isURL = isURLFunc;

  let _isUUID = validator.isUUID;
  _isUUID = isUUIDFunc;

  let _isUppercase = validator.isUppercase;
  _isUppercase = isUppercaseFunc;

  let _isVariableWidth = validator.isVariableWidth;
  _isVariableWidth = isVariableWidthFunc;

  let _isWhitelisted = validator.isWhitelisted;
  _isWhitelisted = isWhitelistedFunc;

  let _ltrim = validator.ltrim;
  _ltrim = ltrimFunc;

  let _matches = validator.matches;
  _matches = matchesFunc;

  let _normalizeEmail = validator.normalizeEmail;
  _normalizeEmail = normalizeEmailFunc;

  let _rtrim = validator.rtrim;
  _rtrim = rtrimFunc;

  let _stripLow = validator.stripLow;
  _stripLow = stripLowFunc;

  let _toBoolean = validator.toBoolean;
  _toBoolean = toBooleanFunc;

  let _toDate = validator.toDate;
  _toDate = toDateFunc;

  let _toFloat = validator.toFloat;
  _toFloat = toFloatFunc;

  let _toInt = validator.toInt;
  _toInt = toIntFunc;

  let _trim = validator.trim;
  _trim = trimFunc;

  let _unescape = validator.unescape;
  _unescape = unescapeFunc;

  let _whitelist = validator.whitelist;
  _whitelist = whitelistFunc;
}

/************************************************
*                                               *
*                  API TESTS                    *
*                                               *
************************************************/
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

  result = validator.isMobilePhone('sample', 'ar-DZ');
  result = validator.isMobilePhone('sample', 'ar-SA');
  result = validator.isMobilePhone('sample', 'ar-SY');
  result = validator.isMobilePhone('sample', 'cs-CZ');
  result = validator.isMobilePhone('sample', 'de-DE');
  result = validator.isMobilePhone('sample', 'da-DK');
  result = validator.isMobilePhone('sample', 'el-GR');
  result = validator.isMobilePhone('sample', 'en-AU');
  result = validator.isMobilePhone('sample', 'en-GB');
  result = validator.isMobilePhone('sample', 'en-HK');
  result = validator.isMobilePhone('sample', 'en-IN');
  result = validator.isMobilePhone('sample', 'en-NZ');
  result = validator.isMobilePhone('sample', 'en-US');
  result = validator.isMobilePhone('sample', 'en-CA');
  result = validator.isMobilePhone('sample', 'en-ZA');
  result = validator.isMobilePhone('sample', 'en-ZM');
  result = validator.isMobilePhone('sample', 'es-ES');
  result = validator.isMobilePhone('sample', 'fi-FI');
  result = validator.isMobilePhone('sample', 'fr-FR');
  result = validator.isMobilePhone('sample', 'hu-HU');
  result = validator.isMobilePhone('sample', 'it-IT');
  result = validator.isMobilePhone('sample', 'ja-JP');
  result = validator.isMobilePhone('sample', 'ms-MY');
  result = validator.isMobilePhone('sample', 'nb-NO');
  result = validator.isMobilePhone('sample', 'nn-NO');
  result = validator.isMobilePhone('sample', 'pl-PL');
  result = validator.isMobilePhone('sample', 'pt-PT');
  result = validator.isMobilePhone('sample', 'ru-RU');
  result = validator.isMobilePhone('sample', 'sr-RS');
  result = validator.isMobilePhone('sample', 'tr-TR');
  result = validator.isMobilePhone('sample', 'vi-VN');
  result = validator.isMobilePhone('sample', 'zh-CN');
  result = validator.isMobilePhone('sample', 'zh-TW');

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

{
  let str: string;
  str = validator.toString([123, 456, '123', '456', true, false]);
}

{
  let ver: string;
  ver = validator.version;
}

// **************
// * Extensions *
// **************

validator.extend<(str: string, options: {}) => boolean>('isTest', (str: any, options: {}) => !str);
