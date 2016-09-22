/// <reference path='./validator-es6.d.ts' />
import validator from 'validator';


/************************************************
*                                               *
*                  IMPORT TESTS                 *
*                                               *
************************************************/
import _blacklist from 'validator/lib/blacklist';
import * as blacklistObj from 'validator/lib/blacklist';
import { blacklist as _blacklistFunc } from 'validator/lib/blacklist';

import _contains from 'validator/lib/contains';
import * as containsObj from 'validator/lib/contains';
import { contains as _containsFunc } from 'validator/lib/contains';

import _equals from 'validator/lib/equals';
import * as equalsObj from 'validator/lib/equals';
import { equals as _equalsFunc } from 'validator/lib/equals';

import _escape from 'validator/lib/escape';
import * as escapeObj from 'validator/lib/escape';
import { escape as _escapeFunc } from 'validator/lib/escape';

import _isAfter from 'validator/lib/isAfter';
import * as isAfterObj from 'validator/lib/isAfter';
import { isAfter as _isAfterFunc } from 'validator/lib/isAfter';

import _isAlpha from 'validator/lib/isAlpha';
import * as isAlphaObj from 'validator/lib/isAlpha';
import { isAlpha as _isAlphaFunc } from 'validator/lib/isAlpha';

import _isAlphanumeric from 'validator/lib/isAlphanumeric';
import * as isAlphanumericObj from 'validator/lib/isAlphanumeric';
import { isAlphanumeric as _isAlphanumericFunc } from 'validator/lib/isAlphanumeric';

import _isAscii from 'validator/lib/isAscii';
import * as isAsciiObj from 'validator/lib/isAscii';
import { isAscii as _isAsciiFunc } from 'validator/lib/isAscii';

import _isBase64 from 'validator/lib/isBase64';
import * as isBase64Obj from 'validator/lib/isBase64';
import { isBase64 as _isBase64Func } from 'validator/lib/isBase64';

import _isBefore from 'validator/lib/isBefore';
import * as isBeforeObj from 'validator/lib/isBefore';
import { isBefore as _isBeforeFunc } from 'validator/lib/isBefore';

import _isBoolean from 'validator/lib/isBoolean';
import * as isBooleanObj from 'validator/lib/isBoolean';
import { isBoolean as _isBooleanFunc } from 'validator/lib/isBoolean';

import _isByteLength from 'validator/lib/isByteLength';
import * as isByteLengthObj from 'validator/lib/isByteLength';
import { isByteLength as _isByteLengthFunc } from 'validator/lib/isByteLength';

import _isCreditCard from 'validator/lib/isCreditCard';
import * as isCreditCardObj from 'validator/lib/isCreditCard';
import { isCreditCard as _isCreditCardFunc } from 'validator/lib/isCreditCard';

import _isCurrency from 'validator/lib/isCurrency';
import * as isCurrencyObj from 'validator/lib/isCurrency';
import { isCurrency as _isCurrencyFunc } from 'validator/lib/isCurrency';

import _isDataURI from 'validator/lib/isDataURI';
import * as isDataURIObj from 'validator/lib/isDataURI';
import { isDataURI as _isDataURIFunc } from 'validator/lib/isDataURI';

import _isDate from 'validator/lib/isDate';
import * as isDateObj from 'validator/lib/isDate';
import { isDate as _isDateFunc } from 'validator/lib/isDate';

import _isDecimal from 'validator/lib/isDecimal';
import * as isDecimalObj from 'validator/lib/isDecimal';
import { isDecimal as _isDecimalFunc } from 'validator/lib/isDecimal';

import _isDivisibleBy from 'validator/lib/isDivisibleBy';
import * as isDivisibleByObj from 'validator/lib/isDivisibleBy';
import { isDivisibleBy as _isDivisibleByFunc } from 'validator/lib/isDivisibleBy';

import _isEmail from 'validator/lib/isEmail';
import * as isEmailObj from 'validator/lib/isEmail';
import { isEmail as _isEmailFunc } from 'validator/lib/isEmail';

import _isFQDN from 'validator/lib/isFQDN';
import * as isFQDNObj from 'validator/lib/isFQDN';
import { isFQDN as _isFQDNFunc } from 'validator/lib/isFQDN';

import _isFloat from 'validator/lib/isFloat';
import * as isFloatObj from 'validator/lib/isFloat';
import { isFloat as _isFloatFunc } from 'validator/lib/isFloat';

import _isFullWidth from 'validator/lib/isFullWidth';
import * as isFullWidthObj from 'validator/lib/isFullWidth';
import { isFullWidth as _isFullWidthFunc } from 'validator/lib/isFullWidth';

import _isHalfWidth from 'validator/lib/isHalfWidth';
import * as isHalfWidthObj from 'validator/lib/isHalfWidth';
import { isHalfWidth as _isHalfWidthFunc } from 'validator/lib/isHalfWidth';

import _isHexColor from 'validator/lib/isHexColor';
import * as isHexColorObj from 'validator/lib/isHexColor';
import { isHexColor as _isHexColorFunc } from 'validator/lib/isHexColor';

import _isHexadecimal from 'validator/lib/isHexadecimal';
import * as isHexadecimalObj from 'validator/lib/isHexadecimal';
import { isHexadecimal as _isHexadecimalFunc } from 'validator/lib/isHexadecimal';

import _isIP from 'validator/lib/isIP';
import * as isIPObj from 'validator/lib/isIP';
import { isIP as _isIPFunc } from 'validator/lib/isIP';

import _isISBN from 'validator/lib/isISBN';
import * as isISBNObj from 'validator/lib/isISBN';
import { isISBN as _isISBNFunc } from 'validator/lib/isISBN';

import _isISIN from 'validator/lib/isISIN';
import * as isISINObj from 'validator/lib/isISIN';
import { isISIN as _isISINFunc } from 'validator/lib/isISIN';

import _isISO8601 from 'validator/lib/isISO8601';
import * as isISO8601Obj from 'validator/lib/isISO8601';
import { isISO8601 as _isISO8601Func } from 'validator/lib/isISO8601';

import _isIn from 'validator/lib/isIn';
import * as isInObj from 'validator/lib/isIn';
import { isIn as _isInFunc } from 'validator/lib/isIn';

import _isInt from 'validator/lib/isInt';
import * as isIntObj from 'validator/lib/isInt';
import { isInt as _isIntFunc } from 'validator/lib/isInt';

import _isJSON from 'validator/lib/isJSON';
import * as isJSONObj from 'validator/lib/isJSON';
import { isJSON as _isJSONFunc } from 'validator/lib/isJSON';

import _isLength from 'validator/lib/isLength';
import * as isLengthObj from 'validator/lib/isLength';
import { isLength as _isLengthFunc } from 'validator/lib/isLength';

import _isLowercase from 'validator/lib/isLowercase';
import * as isLowercaseObj from 'validator/lib/isLowercase';
import { isLowercase as _isLowercaseFunc } from 'validator/lib/isLowercase';

import _isMACAddress from 'validator/lib/isMACAddress';
import * as isMACAddressObj from 'validator/lib/isMACAddress';
import { isMACAddress as _isMACAddressFunc } from 'validator/lib/isMACAddress';

import _isMD5 from 'validator/lib/isMD5';
import * as isMD5Obj from 'validator/lib/isMD5';
import { isMD5 as _isMD5Func } from 'validator/lib/isMD5';

import _isMobilePhone from 'validator/lib/isMobilePhone';
import * as isMobilePhoneObj from 'validator/lib/isMobilePhone';
import { isMobilePhone as _isMobilePhoneFunc } from 'validator/lib/isMobilePhone';

import _isMongoId from 'validator/lib/isMongoId';
import * as isMongoIdObj from 'validator/lib/isMongoId';
import { isMongoId as _isMongoIdFunc } from 'validator/lib/isMongoId';

import _isMultibyte from 'validator/lib/isMultibyte';
import * as isMultibyteObj from 'validator/lib/isMultibyte';
import { isMultibyte as _isMultibyteFunc } from 'validator/lib/isMultibyte';

import _isNull from 'validator/lib/isNull';
import * as isNullObj from 'validator/lib/isNull';
import { isNull as _isNullFunc } from 'validator/lib/isNull';

import _isNumeric from 'validator/lib/isNumeric';
import * as isNumericObj from 'validator/lib/isNumeric';
import { isNumeric as _isNumericFunc } from 'validator/lib/isNumeric';

import _isSurrogatePair from 'validator/lib/isSurrogatePair';
import * as isSurrogatePairObj from 'validator/lib/isSurrogatePair';
import { isSurrogatePair as _isSurrogatePairFunc } from 'validator/lib/isSurrogatePair';

import _isURL from 'validator/lib/isURL';
import * as isURLObj from 'validator/lib/isURL';
import { isURL as _isURLFunc } from 'validator/lib/isURL';

import _isUUID from 'validator/lib/isUUID';
import * as isUUIDObj from 'validator/lib/isUUID';
import { isUUID as _isUUIDFunc } from 'validator/lib/isUUID';

import _isUppercase from 'validator/lib/isUppercase';
import * as isUppercaseObj from 'validator/lib/isUppercase';
import { isUppercase as _isUppercaseFunc } from 'validator/lib/isUppercase';

import _isVariableWidth from 'validator/lib/isVariableWidth';
import * as isVariableWidthObj from 'validator/lib/isVariableWidth';
import { isVariableWidth as _isVariableWidthFunc } from 'validator/lib/isVariableWidth';

import _isWhitelisted from 'validator/lib/isWhitelisted';
import * as isWhitelistedObj from 'validator/lib/isWhitelisted';
import { isWhitelisted as _isWhitelistedFunc } from 'validator/lib/isWhitelisted';

import _ltrim from 'validator/lib/ltrim';
import * as ltrimObj from 'validator/lib/ltrim';
import { ltrim as _ltrimFunc } from 'validator/lib/ltrim';

import _matches from 'validator/lib/matches';
import * as matchesObj from 'validator/lib/matches';
import { matches as _matchesFunc } from 'validator/lib/matches';

import _normalizeEmail from 'validator/lib/normalizeEmail';
import * as normalizeEmailObj from 'validator/lib/normalizeEmail';
import { normalizeEmail as _normalizeEmailFunc } from 'validator/lib/normalizeEmail';

import _rtrim from 'validator/lib/rtrim';
import * as rtrimObj from 'validator/lib/rtrim';
import { rtrim as _rtrimFunc } from 'validator/lib/rtrim';

import _stripLow from 'validator/lib/stripLow';
import * as stripLowObj from 'validator/lib/stripLow';
import { stripLow as _stripLowFunc } from 'validator/lib/stripLow';

import _toBoolean from 'validator/lib/toBoolean';
import * as toBooleanObj from 'validator/lib/toBoolean';
import { toBoolean as _toBooleanFunc } from 'validator/lib/toBoolean';

import _toDate from 'validator/lib/toDate';
import * as toDateObj from 'validator/lib/toDate';
import { toDate as _toDateFunc } from 'validator/lib/toDate';

import _toFloat from 'validator/lib/toFloat';
import * as toFloatObj from 'validator/lib/toFloat';
import { toFloat as _toFloatFunc } from 'validator/lib/toFloat';

import _toInt from 'validator/lib/toInt';
import * as toIntObj from 'validator/lib/toInt';
import { toInt as _toIntFunc } from 'validator/lib/toInt';

import _trim from 'validator/lib/trim';
import * as trimObj from 'validator/lib/trim';
import { trim as _trimFunc } from 'validator/lib/trim';

import _unescape from 'validator/lib/unescape';
import * as unescapeObj from 'validator/lib/unescape';
import { unescape as _unescapeFunc } from 'validator/lib/unescape';

import _whitelist from 'validator/lib/whitelist';
import * as whitelistObj from 'validator/lib/whitelist';
import { whitelist as _whitelistFunc } from 'validator/lib/whitelist';

namespace import_validators_tests {
    let __contains: ValidatorJS.Validators.contains;
    __contains = _contains
    __contains = containsObj.contains
    __contains = _containsFunc
    let __equals: ValidatorJS.Validators.equals;
    __equals = _equals
    __equals = equalsObj.equals
    __equals = _equalsFunc
    let __isAfter: ValidatorJS.Validators.isAfter;
    __isAfter = _isAfter
    __isAfter = isAfterObj.isAfter
    __isAfter = _isAfterFunc
    let __isAlpha: ValidatorJS.Validators.isAlpha;
    __isAlpha = _isAlpha
    __isAlpha = isAlphaObj.isAlpha
    __isAlpha = _isAlphaFunc
    let __isAlphanumeric: ValidatorJS.Validators.isAlphanumeric;
    __isAlphanumeric = _isAlphanumeric
    __isAlphanumeric = isAlphanumericObj.isAlphanumeric
    __isAlphanumeric = _isAlphanumericFunc
    let __isAscii: ValidatorJS.Validators.isAscii;
    __isAscii = _isAscii
    __isAscii = isAsciiObj.isAscii
    __isAscii = _isAsciiFunc
    let __isBase64: ValidatorJS.Validators.isBase64;
    __isBase64 = _isBase64
    __isBase64 = isBase64Obj.isBase64
    __isBase64 = _isBase64Func
    let __isBefore: ValidatorJS.Validators.isBefore;
    __isBefore = _isBefore
    __isBefore = isBeforeObj.isBefore
    __isBefore = _isBeforeFunc
    let __isBoolean: ValidatorJS.Validators.isBoolean;
    __isBoolean = _isBoolean
    __isBoolean = isBooleanObj.isBoolean
    __isBoolean = _isBooleanFunc
    let __isByteLength: ValidatorJS.Validators.isByteLength;
    __isByteLength = _isByteLength
    __isByteLength = isByteLengthObj.isByteLength
    __isByteLength = _isByteLengthFunc
    let __isCreditCard: ValidatorJS.Validators.isCreditCard;
    __isCreditCard = _isCreditCard
    __isCreditCard = isCreditCardObj.isCreditCard
    __isCreditCard = _isCreditCardFunc
    let __isCurrency: ValidatorJS.Validators.isCurrency;
    __isCurrency = _isCurrency
    __isCurrency = isCurrencyObj.isCurrency
    __isCurrency = _isCurrencyFunc
    let __isDataURI: ValidatorJS.Validators.isDataURI;
    __isDataURI = _isDataURI
    __isDataURI = isDataURIObj.isDataURI
    __isDataURI = _isDataURIFunc
    let __isDate: ValidatorJS.Validators.isDate;
    __isDate = _isDate
    __isDate = isDateObj.isDate
    __isDate = _isDateFunc
    let __isDecimal: ValidatorJS.Validators.isDecimal;
    __isDecimal = _isDecimal
    __isDecimal = isDecimalObj.isDecimal
    __isDecimal = _isDecimalFunc
    let __isDivisibleBy: ValidatorJS.Validators.isDivisibleBy;
    __isDivisibleBy = _isDivisibleBy
    __isDivisibleBy = isDivisibleByObj.isDivisibleBy
    __isDivisibleBy = _isDivisibleByFunc
    let __isEmail: ValidatorJS.Validators.isEmail;
    __isEmail = _isEmail
    __isEmail = isEmailObj.isEmail
    __isEmail = _isEmailFunc
    let __isFQDN: ValidatorJS.Validators.isFQDN;
    __isFQDN = _isFQDN
    __isFQDN = isFQDNObj.isFQDN
    __isFQDN = _isFQDNFunc
    let __isFloat: ValidatorJS.Validators.isFloat;
    __isFloat = _isFloat
    __isFloat = isFloatObj.isFloat
    __isFloat = _isFloatFunc
    let __isFullWidth: ValidatorJS.Validators.isFullWidth;
    __isFullWidth = _isFullWidth
    __isFullWidth = isFullWidthObj.isFullWidth
    __isFullWidth = _isFullWidthFunc
    let __isHalfWidth: ValidatorJS.Validators.isHalfWidth;
    __isHalfWidth = _isHalfWidth
    __isHalfWidth = isHalfWidthObj.isHalfWidth
    __isHalfWidth = _isHalfWidthFunc
    let __isHexColor: ValidatorJS.Validators.isHexColor;
    __isHexColor = _isHexColor
    __isHexColor = isHexColorObj.isHexColor
    __isHexColor = _isHexColorFunc
    let __isHexadecimal: ValidatorJS.Validators.isHexadecimal;
    __isHexadecimal = _isHexadecimal
    __isHexadecimal = isHexadecimalObj.isHexadecimal
    __isHexadecimal = _isHexadecimalFunc
    let __isIP: ValidatorJS.Validators.isIP;
    __isIP = _isIP
    __isIP = isIPObj.isIP
    __isIP = _isIPFunc
    let __isISBN: ValidatorJS.Validators.isISBN;
    __isISBN = _isISBN
    __isISBN = isISBNObj.isISBN
    __isISBN = _isISBNFunc
    let __isISIN: ValidatorJS.Validators.isISIN;
    __isISIN = _isISIN
    __isISIN = isISINObj.isISIN
    __isISIN = _isISINFunc
    let __isISO8601: ValidatorJS.Validators.isISO8601;
    __isISO8601 = _isISO8601
    __isISO8601 = isISO8601Obj.isISO8601
    __isISO8601 = _isISO8601Func
    let __isIn: ValidatorJS.Validators.isIn;
    __isIn = _isIn
    __isIn = isInObj.isIn
    __isIn = _isInFunc
    let __isInt: ValidatorJS.Validators.isInt;
    __isInt = _isInt
    __isInt = isIntObj.isInt
    __isInt = _isIntFunc
    let __isJSON: ValidatorJS.Validators.isJSON;
    __isJSON = _isJSON
    __isJSON = isJSONObj.isJSON
    __isJSON = _isJSONFunc
    let __isLength: ValidatorJS.Validators.isLength;
    __isLength = _isLength
    __isLength = isLengthObj.isLength
    __isLength = _isLengthFunc
    let __isLowercase: ValidatorJS.Validators.isLowercase;
    __isLowercase = _isLowercase
    __isLowercase = isLowercaseObj.isLowercase
    __isLowercase = _isLowercaseFunc
    let __isMACAddress: ValidatorJS.Validators.isMACAddress;
    __isMACAddress = _isMACAddress
    __isMACAddress = isMACAddressObj.isMACAddress
    __isMACAddress = _isMACAddressFunc
    let __isMD5: ValidatorJS.Validators.isMD5;
    __isMD5 = _isMD5
    __isMD5 = isMD5Obj.isMD5
    __isMD5 = _isMD5Func
    let __isMobilePhone: ValidatorJS.Validators.isMobilePhone;
    __isMobilePhone = _isMobilePhone
    __isMobilePhone = isMobilePhoneObj.isMobilePhone
    __isMobilePhone = _isMobilePhoneFunc
    let __isMongoId: ValidatorJS.Validators.isMongoId;
    __isMongoId = _isMongoId
    __isMongoId = isMongoIdObj.isMongoId
    __isMongoId = _isMongoIdFunc
    let __isMultibyte: ValidatorJS.Validators.isMultibyte;
    __isMultibyte = _isMultibyte
    __isMultibyte = isMultibyteObj.isMultibyte
    __isMultibyte = _isMultibyteFunc
    let __isNull: ValidatorJS.Validators.isNull;
    __isNull = _isNull
    __isNull = isNullObj.isNull
    __isNull = _isNullFunc
    let __isNumeric: ValidatorJS.Validators.isNumeric;
    __isNumeric = _isNumeric
    __isNumeric = isNumericObj.isNumeric
    __isNumeric = _isNumericFunc
    let __isSurrogatePair: ValidatorJS.Validators.isSurrogatePair;
    __isSurrogatePair = _isSurrogatePair
    __isSurrogatePair = isSurrogatePairObj.isSurrogatePair
    __isSurrogatePair = _isSurrogatePairFunc
    let __isURL: ValidatorJS.Validators.isURL;
    __isURL = _isURL
    __isURL = isURLObj.isURL
    __isURL = _isURLFunc
    let __isUUID: ValidatorJS.Validators.isUUID;
    __isUUID = _isUUID
    __isUUID = isUUIDObj.isUUID
    __isUUID = _isUUIDFunc
    let __isUppercase: ValidatorJS.Validators.isUppercase;
    __isUppercase = _isUppercase
    __isUppercase = isUppercaseObj.isUppercase
    __isUppercase = _isUppercaseFunc
    let __isVariableWidth: ValidatorJS.Validators.isVariableWidth;
    __isVariableWidth = _isVariableWidth
    __isVariableWidth = isVariableWidthObj.isVariableWidth
    __isVariableWidth = _isVariableWidthFunc
    let __isWhitelisted: ValidatorJS.Validators.isWhitelisted;
    __isWhitelisted = _isWhitelisted
    __isWhitelisted = isWhitelistedObj.isWhitelisted
    __isWhitelisted = _isWhitelistedFunc
    let __matches: ValidatorJS.Validators.matches;
    __matches = _matches
    __matches = matchesObj.matches
    __matches = _matchesFunc
}

namespace import_sanitizers_tests {
    let __blacklist: ValidatorJS.Sanitizers.blacklist;
    __blacklist = _blacklist
    __blacklist = blacklistObj.blacklist
    __blacklist = _blacklistFunc
    let __escape: ValidatorJS.Sanitizers.escape;
    __escape = _escape
    __escape = escapeObj.escape
    __escape = _escapeFunc
    let __ltrim: ValidatorJS.Sanitizers.ltrim;
    __ltrim = _ltrim
    __ltrim = ltrimObj.ltrim
    __ltrim = _ltrimFunc

    let __normalizeEmail: ValidatorJS.Sanitizers.normalizeEmail;
    __normalizeEmail = _normalizeEmail
    __normalizeEmail = normalizeEmailObj.normalizeEmail
    __normalizeEmail = _normalizeEmailFunc
    let __rtrim: ValidatorJS.Sanitizers.rtrim;
    __rtrim = _rtrim
    __rtrim = rtrimObj.rtrim
    __rtrim = _rtrimFunc
    let __stripLow: ValidatorJS.Sanitizers.stripLow;
    __stripLow = _stripLow
    __stripLow = stripLowObj.stripLow
    __stripLow = _stripLowFunc
    let __toBoolean: ValidatorJS.Sanitizers.toBoolean;
    __toBoolean = _toBoolean
    __toBoolean = toBooleanObj.toBoolean
    __toBoolean = _toBooleanFunc
    let __toDate: ValidatorJS.Sanitizers.toDate;
    __toDate = _toDate
    __toDate = toDateObj.toDate
    __toDate = _toDateFunc
    let __toFloat: ValidatorJS.Sanitizers.toFloat;
    __toFloat = _toFloat
    __toFloat = toFloatObj.toFloat
    __toFloat = _toFloatFunc
    let __toInt: ValidatorJS.Sanitizers.toInt;
    __toInt = _toInt
    __toInt = toIntObj.toInt
    __toInt = _toIntFunc
    let __trim: ValidatorJS.Sanitizers.trim;
    __trim = _trim
    __trim = trimObj.trim
    __trim = _trimFunc
    let __unescape: ValidatorJS.Sanitizers.unescape;
    __unescape = _unescape
    __unescape = unescapeObj.unescape
    __unescape = _unescapeFunc
    let __whitelist: ValidatorJS.Sanitizers.whitelist;
    __whitelist = _whitelist
    __whitelist = whitelistObj.whitelist
    __whitelist = _whitelistFunc
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
