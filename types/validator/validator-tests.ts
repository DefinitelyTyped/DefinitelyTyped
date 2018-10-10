import * as validator from 'validator';

/************************************************
*                                               *
*                  IMPORT TESTS                 *
*                                               *
************************************************/
import blacklistFunc = require('validator/lib/blacklist');
import containsFunc = require('validator/lib/contains');
import equalsFunc = require('validator/lib/equals');
import escapeFunc = require('validator/lib/escape');
import isAfterFunc = require('validator/lib/isAfter');
import isAlphaFunc = require('validator/lib/isAlpha');
import isAlphanumericFunc = require('validator/lib/isAlphanumeric');
import isAsciiFunc = require('validator/lib/isAscii');
import isBase64Func = require('validator/lib/isBase64');
import isBeforeFunc = require('validator/lib/isBefore');
import isBooleanFunc = require('validator/lib/isBoolean');
import isByteLengthFunc = require('validator/lib/isByteLength');
import isCreditCardFunc = require('validator/lib/isCreditCard');
import isCurrencyFunc = require('validator/lib/isCurrency');
import isDataURIFunc = require('validator/lib/isDataURI');
import isDecimalFunc = require('validator/lib/isDecimal');
import isDivisibleByFunc = require('validator/lib/isDivisibleBy');
import isEmailFunc = require('validator/lib/isEmail');
import isEmptyFunc = require('validator/lib/isEmpty');
import isFQDNFunc = require('validator/lib/isFQDN');
import isFloatFunc = require('validator/lib/isFloat');
import isFullWidthFunc = require('validator/lib/isFullWidth');
import isHalfWidthFunc = require('validator/lib/isHalfWidth');
import isHashFunc = require('validator/lib/isHash');
import isHexColorFunc = require('validator/lib/isHexColor');
import isHexadecimalFunc = require('validator/lib/isHexadecimal');
import isIPFunc = require('validator/lib/isIP');
import isISBNFunc = require('validator/lib/isISBN');
import isISSNFunc = require('validator/lib/isISSN');
import isISINFunc = require('validator/lib/isISIN');
import isISO8601Func = require('validator/lib/isISO8601');
import isISO31661Alpha2Func = require('validator/lib/isISO31661Alpha2');
import isISRCFunc = require('validator/lib/isISRC');
import isInFunc = require('validator/lib/isIn');
import isIntFunc = require('validator/lib/isInt');
import isJSONFunc = require('validator/lib/isJSON');
import isLatLongFunc = require('validator/lib/isLatLong');
import isLengthFunc = require('validator/lib/isLength');
import isLowercaseFunc = require('validator/lib/isLowercase');
import isMACAddressFunc = require('validator/lib/isMACAddress');
import isMD5Func = require('validator/lib/isMD5');
import isMimeTypeFunc = require('validator/lib/isMimeType');
import isMobilePhoneFunc = require('validator/lib/isMobilePhone');
import isMongoIdFunc = require('validator/lib/isMongoId');
import isMultibyteFunc = require('validator/lib/isMultibyte');
import isNumericFunc = require('validator/lib/isNumeric');
import isPortFunc = require('validator/lib/isPort');
import isPostalCodeFunc = require('validator/lib/isPostalCode');
import isSurrogatePairFunc = require('validator/lib/isSurrogatePair');
import isURLFunc = require('validator/lib/isURL');
import isUUIDFunc = require('validator/lib/isUUID');
import isUppercaseFunc = require('validator/lib/isUppercase');
import isVariableWidthFunc = require('validator/lib/isVariableWidth');
import isWhitelistedFunc = require('validator/lib/isWhitelisted');
import ltrimFunc = require('validator/lib/ltrim');
import matchesFunc = require('validator/lib/matches');
import normalizeEmailFunc = require('validator/lib/normalizeEmail');
import rtrimFunc = require('validator/lib/rtrim');
import stripLowFunc = require('validator/lib/stripLow');
import toBooleanFunc = require('validator/lib/toBoolean');
import toDateFunc = require('validator/lib/toDate');
import toFloatFunc = require('validator/lib/toFloat');
import toIntFunc = require('validator/lib/toInt');
import trimFunc = require('validator/lib/trim');
import unescapeFunc = require('validator/lib/unescape');
import whitelistFunc = require('validator/lib/whitelist');

{
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

  let _isDecimal = validator.isDecimal;
  _isDecimal = isDecimalFunc;

  let _isDivisibleBy = validator.isDivisibleBy;
  _isDivisibleBy = isDivisibleByFunc;

  let _isEmail = validator.isEmail;
  _isEmail = isEmailFunc;

  let _isEmpty = validator.isEmpty;
  _isEmpty = isEmptyFunc;

  let _isFQDN = validator.isFQDN;
  _isFQDN = isFQDNFunc;

  let _isFloat = validator.isFloat;
  _isFloat = isFloatFunc;

  let _isFullWidth = validator.isFullWidth;
  _isFullWidth = isFullWidthFunc;

  let _isHalfWidth = validator.isHalfWidth;
  _isHalfWidth = isHalfWidthFunc;

  let _isHash = validator.isHash;
  _isHash = isHashFunc;

  let _isHexColor = validator.isHexColor;
  _isHexColor = isHexColorFunc;

  let _isHexadecimal = validator.isHexadecimal;
  _isHexadecimal = isHexadecimalFunc;

  let _isIP = validator.isIP;
  _isIP = isIPFunc;

  let _isISBN = validator.isISBN;
  _isISBN = isISBNFunc;

  let _isISSN = validator.isISSN;
  _isISSN = isISSNFunc;

  let _isISIN = validator.isISIN;
  _isISIN = isISINFunc;

  let _isISO8601 = validator.isISO8601;
  _isISO8601 = isISO8601Func;

  let _isISO31661Alpha2 = validator.isISO31661Alpha2;
  _isISO31661Alpha2 = isISO31661Alpha2Func;

  let _isISRC = validator.isISRC;
  _isISRC = isISRCFunc;

  let _isIn = validator.isIn;
  _isIn = isInFunc;

  let _isInt = validator.isInt;
  _isInt = isIntFunc;

  let _isJSON = validator.isJSON;
  _isJSON = isJSONFunc;

  let _isLatLong = validator.isLatLong;
  _isLatLong = isLatLongFunc;

  let _isLength = validator.isLength;
  _isLength = isLengthFunc;

  let _isLowercase = validator.isLowercase;
  _isLowercase = isLowercaseFunc;

  let _isMACAddress = validator.isMACAddress;
  _isMACAddress = isMACAddressFunc;

  let _isMD5 = validator.isMD5;
  _isMD5 = isMD5Func;

  let _isMimeType = validator.isMimeType;
  _isMimeType = isMimeTypeFunc;

  let _isMobilePhone = validator.isMobilePhone;
  _isMobilePhone = isMobilePhoneFunc;

  let _isMongoId = validator.isMongoId;
  _isMongoId = isMongoIdFunc;

  let _isMultibyte = validator.isMultibyte;
  _isMultibyte = isMultibyteFunc;

  let _isNumeric = validator.isNumeric;
  _isNumeric = isNumericFunc;

  let _isPort = validator.isPort;
  _isPort = isPortFunc;

  let _isPostalCode = validator.isPostalCode;
  _isPostalCode = isPostalCodeFunc;

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
  result = validator.isAlpha('sample', 'bg-BG');
  result = validator.isAlpha('sample', 'cs-CZ');
  result = validator.isAlpha('sample', 'da-DK');
  result = validator.isAlpha('sample', 'de-DE');
  result = validator.isAlpha('sample', 'el-GR');
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
  result = validator.isAlpha('sample', 'it-IT');
  result = validator.isAlpha('sample', 'nb-NO');
  result = validator.isAlpha('sample', 'nl-NL');
  result = validator.isAlpha('sample', 'nn-NO');
  result = validator.isAlpha('sample', 'pl-PL');
  result = validator.isAlpha('sample', 'pt-BR');
  result = validator.isAlpha('sample', 'pt-PT');
  result = validator.isAlpha('sample', 'ru-RU');
  result = validator.isAlpha('sample', 'sk-SK');
  result = validator.isAlpha('sample', 'sr-RS');
  result = validator.isAlpha('sample', 'sr-RS@latin');
  result = validator.isAlpha('sample', 'sv-SE');
  result = validator.isAlpha('sample', 'tr-TR');
  result = validator.isAlpha('sample', 'uk-UA');

  result = validator.isAlphanumeric('sample');
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
  result = validator.isAlphanumeric('sample', 'bg-BG');
  result = validator.isAlphanumeric('sample', 'cs-CZ');
  result = validator.isAlphanumeric('sample', 'da-DK');
  result = validator.isAlphanumeric('sample', 'de-DE');
  result = validator.isAlphanumeric('sample', 'el-GR');
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
  result = validator.isAlphanumeric('sample', 'hu-HU');
  result = validator.isAlphanumeric('sample', 'it-IT');
  result = validator.isAlphanumeric('sample', 'nb-NO');
  result = validator.isAlphanumeric('sample', 'nl-NL');
  result = validator.isAlphanumeric('sample', 'nn-NO');
  result = validator.isAlphanumeric('sample', 'pl-PL');
  result = validator.isAlphanumeric('sample', 'pt-BR');
  result = validator.isAlphanumeric('sample', 'pt-PT');
  result = validator.isAlphanumeric('sample', 'ru-RU');
  result = validator.isAlphanumeric('sample', 'sk-SK');
  result = validator.isAlphanumeric('sample', 'sr-RS');
  result = validator.isAlphanumeric('sample', 'sr-RS@latin');
  result = validator.isAlphanumeric('sample', 'sv-SE');
  result = validator.isAlphanumeric('sample', 'tr-TR');
  result = validator.isAlphanumeric('sample', 'uk-UA');

  result = validator.isAscii('sample');

  result = validator.isBase64('sample');

  result = validator.isBefore('sample');
  result = validator.isBefore('sample', new Date().toString());

  result = validator.isBoolean('sample');

  let isByteLengthOptions: ValidatorJS.IsByteLengthOptions = {};
  result = validator.isByteLength('sample', isByteLengthOptions);
  result = validator.isByteLength('sample', 0);
  result = validator.isByteLength('sample', 0, 42);

  result = validator.isCreditCard('sample');

  let isCurrencyOptions: ValidatorJS.IsCurrencyOptions = {};
  result = validator.isCurrency('sample');
  result = validator.isCurrency('sample', isCurrencyOptions);

  result = validator.isDataURI('sample');

  let isDecimalOptions: ValidatorJS.IsDecimalOptions = {};
  result = validator.isDecimal('sample');
  result = validator.isDecimal('sample', isDecimalOptions);

  result = validator.isDivisibleBy('sample', 2);

  let isEmailOptions: ValidatorJS.IsEmailOptions = {};
  result = validator.isEmail('sample');
  result = validator.isEmail('sample', isEmailOptions);

  result = validator.isEmpty('sample');

  let isFQDNOptions: ValidatorJS.IsFQDNOptions = {};
  result = validator.isFQDN('sample');
  result = validator.isFQDN('sample', isFQDNOptions);

  let isFloatOptions: ValidatorJS.IsFloatOptions = {};
  result = validator.isFloat('sample');
  result = validator.isFloat('sample', isFloatOptions);

  result = validator.isFullWidth('sample');

  result = validator.isHalfWidth('sample');

  result = validator.isHash('sample', 'md4');
  result = validator.isHash('sample', 'md5');
  result = validator.isHash('sample', 'sha1');
  result = validator.isHash('sample', 'sha256');
  result = validator.isHash('sample', 'sha384');
  result = validator.isHash('sample', 'sha512');
  result = validator.isHash('sample', 'ripemd128');
  result = validator.isHash('sample', 'ripemd160');
  result = validator.isHash('sample', 'tiger128');
  result = validator.isHash('sample', 'tiger160');
  result = validator.isHash('sample', 'tiger192');
  result = validator.isHash('sample', 'crc32');
  result = validator.isHash('sample', 'crc32b');

  result = validator.isHexColor('sample');

  result = validator.isHexadecimal('sample');

  result = validator.isIP('sample');
  result = validator.isIP('sample', 6);

  result = validator.isISBN('sample');
  result = validator.isISBN('sample', 13);

  let isISSNOptions: ValidatorJS.IsISSNOptions = {};
  result = validator.isISSN('sample');
  result = validator.isISSN('sample', isISSNOptions);

  result = validator.isISIN('sample');

  result = validator.isISO8601('sample');

  result = validator.isISO31661Alpha2('sample');

  result = validator.isISRC('sample');

  result = validator.isIn('sample', []);

  let isIntOptions: ValidatorJS.IsIntOptions = {};
  result = validator.isInt('sample');
  result = validator.isInt('sample', isIntOptions);

  result = validator.isJSON('sample');

  result = validator.isLatLong('sample');

  let isLengthOptions: ValidatorJS.IsLengthOptions = {};
  result = validator.isLength('sample', isLengthOptions);
  result = validator.isLength('sample', 3);
  result = validator.isLength('sample', 3, 5);

  result = validator.isLowercase('sample');

  result = validator.isMACAddress('sample');

  result = validator.isMD5('sample');

  result = validator.isMimeType('sample');

  let isMobilePhoneOptions: ValidatorJS.IsMobilePhoneOptions = {};
  result = validator.isMobilePhone('sample', 'any', isMobilePhoneOptions);
  result = validator.isMobilePhone('sample', 'ar-AE');
  result = validator.isMobilePhone('sample', 'ar-DZ');
  result = validator.isMobilePhone('sample', 'ar-EG');
  result = validator.isMobilePhone('sample', 'ar-JO');
  result = validator.isMobilePhone('sample', 'ar-SA');
  result = validator.isMobilePhone('sample', 'ar-SY');
  result = validator.isMobilePhone('sample', 'be-BY');
  result = validator.isMobilePhone('sample', 'bg-BG');
  result = validator.isMobilePhone('sample', 'cs-CZ');
  result = validator.isMobilePhone('sample', 'de-DE');
  result = validator.isMobilePhone('sample', 'da-DK');
  result = validator.isMobilePhone('sample', 'el-GR');
  result = validator.isMobilePhone('sample', 'en-AU');
  result = validator.isMobilePhone('sample', 'en-GB');
  result = validator.isMobilePhone('sample', 'en-HK');
  result = validator.isMobilePhone('sample', 'en-IN');
  result = validator.isMobilePhone('sample', 'en-KE');
  result = validator.isMobilePhone('sample', 'en-NG');
  result = validator.isMobilePhone('sample', 'en-NZ');
  result = validator.isMobilePhone('sample', 'en-UG');
  result = validator.isMobilePhone('sample', 'en-RW');
  result = validator.isMobilePhone('sample', 'en-SG');
  result = validator.isMobilePhone('sample', 'en-TZ');
  result = validator.isMobilePhone('sample', 'en-PK');
  result = validator.isMobilePhone('sample', 'en-US');
  result = validator.isMobilePhone('sample', 'en-CA');
  result = validator.isMobilePhone('sample', 'en-ZA');
  result = validator.isMobilePhone('sample', 'en-ZM');
  result = validator.isMobilePhone('sample', 'es-ES');
  result = validator.isMobilePhone('sample', 'fa-IR');
  result = validator.isMobilePhone('sample', 'fi-FI');
  result = validator.isMobilePhone('sample', 'fo-FO');
  result = validator.isMobilePhone('sample', 'fr-FR');
  result = validator.isMobilePhone('sample', 'he-IL');
  result = validator.isMobilePhone('sample', 'hu-HU');
  result = validator.isMobilePhone('sample', 'id-ID');
  result = validator.isMobilePhone('sample', 'it-IT');
  result = validator.isMobilePhone('sample', 'ja-JP');
  result = validator.isMobilePhone('sample', 'kk-KZ');
  result = validator.isMobilePhone('sample', 'kl-GL');
  result = validator.isMobilePhone('sample', 'ko-KR');
  result = validator.isMobilePhone('sample', 'lt-LT');
  result = validator.isMobilePhone('sample', 'ms-MY');
  result = validator.isMobilePhone('sample', 'nb-NO');
  result = validator.isMobilePhone('sample', 'nn-NO');
  result = validator.isMobilePhone('sample', 'pl-PL');
  result = validator.isMobilePhone('sample', 'pt-PT');
  result = validator.isMobilePhone('sample', 'ro-RO');
  result = validator.isMobilePhone('sample', 'ru-RU');
  result = validator.isMobilePhone('sample', 'sr-RS');
  result = validator.isMobilePhone('sample', 'sk-SK');
  result = validator.isMobilePhone('sample', 'th-TH');
  result = validator.isMobilePhone('sample', 'tr-TR');
  result = validator.isMobilePhone('sample', 'uk-UA');
  result = validator.isMobilePhone('sample', 'vi-VN');
  result = validator.isMobilePhone('sample', 'zh-CN');
  result = validator.isMobilePhone('sample', 'zh-HK');
  result = validator.isMobilePhone('sample', 'zh-TW');
  result = validator.isMobilePhone('sample', 'any');

  result = validator.isMongoId('sample');

  result = validator.isMultibyte('sample');

  result = validator.isNumeric('sample');
  result = validator.isNumeric('+358', { no_symbols: true });

  result = validator.isPort('sample');

  result = validator.isPostalCode('sample', 'AT');
  result = validator.isPostalCode('sample', 'AU');
  result = validator.isPostalCode('sample', 'BE');
  result = validator.isPostalCode('sample', 'BG');
  result = validator.isPostalCode('sample', 'CA');
  result = validator.isPostalCode('sample', 'CH');
  result = validator.isPostalCode('sample', 'CZ');
  result = validator.isPostalCode('sample', 'DE');
  result = validator.isPostalCode('sample', 'DK');
  result = validator.isPostalCode('sample', 'DZ');
  result = validator.isPostalCode('sample', 'ES');
  result = validator.isPostalCode('sample', 'FI');
  result = validator.isPostalCode('sample', 'FR');
  result = validator.isPostalCode('sample', 'GB');
  result = validator.isPostalCode('sample', 'GR');
  result = validator.isPostalCode('sample', 'IL');
  result = validator.isPostalCode('sample', 'IN');
  result = validator.isPostalCode('sample', 'IS');
  result = validator.isPostalCode('sample', 'IT');
  result = validator.isPostalCode('sample', 'JP');
  result = validator.isPostalCode('sample', 'KE');
  result = validator.isPostalCode('sample', 'LI');
  result = validator.isPostalCode('sample', 'MX');
  result = validator.isPostalCode('sample', 'NL');
  result = validator.isPostalCode('sample', 'NO');
  result = validator.isPostalCode('sample', 'PL');
  result = validator.isPostalCode('sample', 'PT');
  result = validator.isPostalCode('sample', 'RO');
  result = validator.isPostalCode('sample', 'RU');
  result = validator.isPostalCode('sample', 'SA');
  result = validator.isPostalCode('sample', 'SE');
  result = validator.isPostalCode('sample', 'TW');
  result = validator.isPostalCode('sample', 'US');
  result = validator.isPostalCode('sample', 'ZA');
  result = validator.isPostalCode('sample', 'ZM');
  result = validator.isPostalCode('sample', 'any');

  result = validator.isSurrogatePair('sample');

  let isURLOptions: ValidatorJS.IsURLOptions = {};
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

  let normalizeEmailOptions: ValidatorJS.NormalizeEmailOptions = {};
  let normalizeResult: string | false;
  normalizeResult = validator.normalizeEmail('sample');
  normalizeResult = validator.normalizeEmail('sample', normalizeEmailOptions);

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
