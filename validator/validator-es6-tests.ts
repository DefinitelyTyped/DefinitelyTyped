/// <reference path='./validator-es6.d.ts' />
import validator from 'validator';

/************************************************
*                                               *
*                  IMPORT TESTS                 *
*                                               *
************************************************/
import {
    blacklist as blacklist_1,
    contains as contains_1,
    equals as equals_1,
    escape as escape_1,
    isAfter as isAfter_1,
    isAlpha as isAlpha_1,
    isAlphanumeric as isAlphanumeric_1,
    isAscii as isAscii_1,
    isBase64 as isBase64_1,
    isBefore as isBefore_1,
    isBoolean as isBoolean_1,
    isByteLength as isByteLength_1,
    isCreditCard as isCreditCard_1,
    isCurrency as isCurrency_1,
    isDataURI as isDataURI_1,
    isDate as isDate_1,
    isDecimal as isDecimal_1,
    isDivisibleBy as isDivisibleBy_1,
    isEmail as isEmail_1,
    isFQDN as isFQDN_1,
    isFloat as isFloat_1,
    isFullWidth as isFullWidth_1,
    isHalfWidth as isHalfWidth_1,
    isHexColor as isHexColor_1,
    isHexadecimal as isHexadecimal_1,
    isIP as isIP_1,
    isISBN as isISBN_1,
    isISIN as isISIN_1,
    isISO8601 as isISO8601_1,
    isIn as isIn_1,
    isInt as isInt_1,
    isJSON as isJSON_1,
    isLength as isLength_1,
    isLowercase as isLowercase_1,
    isMACAddress as isMACAddress_1,
    isMD5 as isMD5_1,
    isMobilePhone as isMobilePhone_1,
    isMongoId as isMongoId_1,
    isMultibyte as isMultibyte_1,
    isNull as isNull_1,
    isNumeric as isNumeric_1,
    isSurrogatePair as isSurrogatePair_1,
    isURL as isURL_1,
    isUUID as isUUID_1,
    isUppercase as isUppercase_1,
    isVariableWidth as isVariableWidth_1,
    isWhitelisted as isWhitelisted_1,
    ltrim as ltrim_1,
    matches as matches_1,
    normalizeEmail as normalizeEmail_1,
    rtrim as rtrim_1,
    stripLow as stripLow_1,
    toBoolean as toBoolean_1,
    toDate as toDate_1,
    toFloat as toFloat_1,
    toInt as toInt_1,
    trim as trim_1,
    unescape as unescape_1,
    whitelist as whitelist_1,
} from 'validator';

import blacklistDefault from 'validator/lib/blacklist';
import * as blacklistObj from 'validator/lib/blacklist';
import { blacklist as blacklist_2 } from 'validator/lib/blacklist';

import containsDefault from 'validator/lib/contains';
import * as containsObj from 'validator/lib/contains';
import { contains as contains_2 } from 'validator/lib/contains';

import equalsDefault from 'validator/lib/equals';
import * as equalsObj from 'validator/lib/equals';
import { equals as equals_2 } from 'validator/lib/equals';

import escapeDefault from 'validator/lib/escape';
import * as escapeObj from 'validator/lib/escape';
import { escape as escape_2 } from 'validator/lib/escape';

import isAfterDefault from 'validator/lib/isAfter';
import * as isAfterObj from 'validator/lib/isAfter';
import { isAfter as isAfter_2 } from 'validator/lib/isAfter';

import isAlphaDefault from 'validator/lib/isAlpha';
import * as isAlphaObj from 'validator/lib/isAlpha';
import { isAlpha as isAlpha_2 } from 'validator/lib/isAlpha';

import isAlphanumericDefault from 'validator/lib/isAlphanumeric';
import * as isAlphanumericObj from 'validator/lib/isAlphanumeric';
import { isAlphanumeric as isAlphanumeric_2 } from 'validator/lib/isAlphanumeric';

import isAsciiDefault from 'validator/lib/isAscii';
import * as isAsciiObj from 'validator/lib/isAscii';
import { isAscii as isAscii_2 } from 'validator/lib/isAscii';

import isBase64Default from 'validator/lib/isBase64';
import * as isBase64Obj from 'validator/lib/isBase64';
import { isBase64 as isBase64_2 } from 'validator/lib/isBase64';

import isBeforeDefault from 'validator/lib/isBefore';
import * as isBeforeObj from 'validator/lib/isBefore';
import { isBefore as isBefore_2 } from 'validator/lib/isBefore';

import isBooleanDefault from 'validator/lib/isBoolean';
import * as isBooleanObj from 'validator/lib/isBoolean';
import { isBoolean as isBoolean_2 } from 'validator/lib/isBoolean';

import isByteLengthDefault from 'validator/lib/isByteLength';
import * as isByteLengthObj from 'validator/lib/isByteLength';
import { isByteLength as isByteLength_2 } from 'validator/lib/isByteLength';

import isCreditCardDefault from 'validator/lib/isCreditCard';
import * as isCreditCardObj from 'validator/lib/isCreditCard';
import { isCreditCard as isCreditCard_2 } from 'validator/lib/isCreditCard';

import isCurrencyDefault from 'validator/lib/isCurrency';
import * as isCurrencyObj from 'validator/lib/isCurrency';
import { isCurrency as isCurrency_2 } from 'validator/lib/isCurrency';

import isDataURIDefault from 'validator/lib/isDataURI';
import * as isDataURIObj from 'validator/lib/isDataURI';
import { isDataURI as isDataURI_2 } from 'validator/lib/isDataURI';

import isDateDefault from 'validator/lib/isDate';
import * as isDateObj from 'validator/lib/isDate';
import { isDate as isDate_2 } from 'validator/lib/isDate';

import isDecimalDefault from 'validator/lib/isDecimal';
import * as isDecimalObj from 'validator/lib/isDecimal';
import { isDecimal as isDecimal_2 } from 'validator/lib/isDecimal';

import isDivisibleByDefault from 'validator/lib/isDivisibleBy';
import * as isDivisibleByObj from 'validator/lib/isDivisibleBy';
import { isDivisibleBy as isDivisibleBy_2 } from 'validator/lib/isDivisibleBy';

import isEmailDefault from 'validator/lib/isEmail';
import * as isEmailObj from 'validator/lib/isEmail';
import { isEmail as isEmail_2 } from 'validator/lib/isEmail';

import isFQDNDefault from 'validator/lib/isFQDN';
import * as isFQDNObj from 'validator/lib/isFQDN';
import { isFQDN as isFQDN_2 } from 'validator/lib/isFQDN';

import isFloatDefault from 'validator/lib/isFloat';
import * as isFloatObj from 'validator/lib/isFloat';
import { isFloat as isFloat_2 } from 'validator/lib/isFloat';

import isFullWidthDefault from 'validator/lib/isFullWidth';
import * as isFullWidthObj from 'validator/lib/isFullWidth';
import { isFullWidth as isFullWidth_2 } from 'validator/lib/isFullWidth';

import isHalfWidthDefault from 'validator/lib/isHalfWidth';
import * as isHalfWidthObj from 'validator/lib/isHalfWidth';
import { isHalfWidth as isHalfWidth_2 } from 'validator/lib/isHalfWidth';

import isHexColorDefault from 'validator/lib/isHexColor';
import * as isHexColorObj from 'validator/lib/isHexColor';
import { isHexColor as isHexColor_2 } from 'validator/lib/isHexColor';

import isHexadecimalDefault from 'validator/lib/isHexadecimal';
import * as isHexadecimalObj from 'validator/lib/isHexadecimal';
import { isHexadecimal as isHexadecimal_2 } from 'validator/lib/isHexadecimal';

import isIPDefault from 'validator/lib/isIP';
import * as isIPObj from 'validator/lib/isIP';
import { isIP as isIP_2 } from 'validator/lib/isIP';

import isISBNDefault from 'validator/lib/isISBN';
import * as isISBNObj from 'validator/lib/isISBN';
import { isISBN as isISBN_2 } from 'validator/lib/isISBN';

import isISINDefault from 'validator/lib/isISIN';
import * as isISINObj from 'validator/lib/isISIN';
import { isISIN as isISIN_2 } from 'validator/lib/isISIN';

import isISO8601Default from 'validator/lib/isISO8601';
import * as isISO8601Obj from 'validator/lib/isISO8601';
import { isISO8601 as isISO8601_2 } from 'validator/lib/isISO8601';

import isInDefault from 'validator/lib/isIn';
import * as isInObj from 'validator/lib/isIn';
import { isIn as isIn_2 } from 'validator/lib/isIn';

import isIntDefault from 'validator/lib/isInt';
import * as isIntObj from 'validator/lib/isInt';
import { isInt as isInt_2 } from 'validator/lib/isInt';

import isJSONDefault from 'validator/lib/isJSON';
import * as isJSONObj from 'validator/lib/isJSON';
import { isJSON as isJSON_2 } from 'validator/lib/isJSON';

import isLengthDefault from 'validator/lib/isLength';
import * as isLengthObj from 'validator/lib/isLength';
import { isLength as isLength_2 } from 'validator/lib/isLength';

import isLowercaseDefault from 'validator/lib/isLowercase';
import * as isLowercaseObj from 'validator/lib/isLowercase';
import { isLowercase as isLowercase_2 } from 'validator/lib/isLowercase';

import isMACAddressDefault from 'validator/lib/isMACAddress';
import * as isMACAddressObj from 'validator/lib/isMACAddress';
import { isMACAddress as isMACAddress_2 } from 'validator/lib/isMACAddress';

import isMD5Default from 'validator/lib/isMD5';
import * as isMD5Obj from 'validator/lib/isMD5';
import { isMD5 as isMD5_2 } from 'validator/lib/isMD5';

import isMobilePhoneDefault from 'validator/lib/isMobilePhone';
import * as isMobilePhoneObj from 'validator/lib/isMobilePhone';
import { isMobilePhone as isMobilePhone_2 } from 'validator/lib/isMobilePhone';

import isMongoIdDefault from 'validator/lib/isMongoId';
import * as isMongoIdObj from 'validator/lib/isMongoId';
import { isMongoId as isMongoId_2 } from 'validator/lib/isMongoId';

import isMultibyteDefault from 'validator/lib/isMultibyte';
import * as isMultibyteObj from 'validator/lib/isMultibyte';
import { isMultibyte as isMultibyte_2 } from 'validator/lib/isMultibyte';

import isNullDefault from 'validator/lib/isNull';
import * as isNullObj from 'validator/lib/isNull';
import { isNull as isNull_2 } from 'validator/lib/isNull';

import isNumericDefault from 'validator/lib/isNumeric';
import * as isNumericObj from 'validator/lib/isNumeric';
import { isNumeric as isNumeric_2 } from 'validator/lib/isNumeric';

import isSurrogatePairDefault from 'validator/lib/isSurrogatePair';
import * as isSurrogatePairObj from 'validator/lib/isSurrogatePair';
import { isSurrogatePair as isSurrogatePair_2 } from 'validator/lib/isSurrogatePair';

import isURLDefault from 'validator/lib/isURL';
import * as isURLObj from 'validator/lib/isURL';
import { isURL as isURL_2 } from 'validator/lib/isURL';

import isUUIDDefault from 'validator/lib/isUUID';
import * as isUUIDObj from 'validator/lib/isUUID';
import { isUUID as isUUID_2 } from 'validator/lib/isUUID';

import isUppercaseDefault from 'validator/lib/isUppercase';
import * as isUppercaseObj from 'validator/lib/isUppercase';
import { isUppercase as isUppercase_2 } from 'validator/lib/isUppercase';

import isVariableWidthDefault from 'validator/lib/isVariableWidth';
import * as isVariableWidthObj from 'validator/lib/isVariableWidth';
import { isVariableWidth as isVariableWidth_2 } from 'validator/lib/isVariableWidth';

import isWhitelistedDefault from 'validator/lib/isWhitelisted';
import * as isWhitelistedObj from 'validator/lib/isWhitelisted';
import { isWhitelisted as isWhitelisted_2 } from 'validator/lib/isWhitelisted';

import ltrimDefault from 'validator/lib/ltrim';
import * as ltrimObj from 'validator/lib/ltrim';
import { ltrim as ltrim_2 } from 'validator/lib/ltrim';

import matchesDefault from 'validator/lib/matches';
import * as matchesObj from 'validator/lib/matches';
import { matches as matches_2 } from 'validator/lib/matches';

import normalizeEmailDefault from 'validator/lib/normalizeEmail';
import * as normalizeEmailObj from 'validator/lib/normalizeEmail';
import { normalizeEmail as normalizeEmail_2 } from 'validator/lib/normalizeEmail';

import rtrimDefault from 'validator/lib/rtrim';
import * as rtrimObj from 'validator/lib/rtrim';
import { rtrim as rtrim_2 } from 'validator/lib/rtrim';

import stripLowDefault from 'validator/lib/stripLow';
import * as stripLowObj from 'validator/lib/stripLow';
import { stripLow as stripLow_2 } from 'validator/lib/stripLow';

import toBooleanDefault from 'validator/lib/toBoolean';
import * as toBooleanObj from 'validator/lib/toBoolean';
import { toBoolean as toBoolean_2 } from 'validator/lib/toBoolean';

import toDateDefault from 'validator/lib/toDate';
import * as toDateObj from 'validator/lib/toDate';
import { toDate as toDate_2 } from 'validator/lib/toDate';

import toFloatDefault from 'validator/lib/toFloat';
import * as toFloatObj from 'validator/lib/toFloat';
import { toFloat as toFloat_2 } from 'validator/lib/toFloat';

import toIntDefault from 'validator/lib/toInt';
import * as toIntObj from 'validator/lib/toInt';
import { toInt as toInt_2 } from 'validator/lib/toInt';

import trimDefault from 'validator/lib/trim';
import * as trimObj from 'validator/lib/trim';
import { trim as trim_2 } from 'validator/lib/trim';

import unescapeDefault from 'validator/lib/unescape';
import * as unescapeObj from 'validator/lib/unescape';
import { unescape as unescape_2 } from 'validator/lib/unescape';

import whitelistDefault from 'validator/lib/whitelist';
import * as whitelistObj from 'validator/lib/whitelist';
import { whitelist as whitelist_2 } from 'validator/lib/whitelist';

namespace import_validators_tests {
    let _contains: ValidatorJS.Validators.contains;
    _contains = validator.contains;
    _contains = contains_1;
    _contains = containsDefault;
    _contains = containsObj.contains;
    _contains = contains_2;

    let _equals: ValidatorJS.Validators.equals;
    _equals = validator.equals;
    _equals = equals_1;
    _equals = equalsDefault;
    _equals = equalsObj.equals;
    _equals = equals_2;

    let _isAfter: ValidatorJS.Validators.isAfter;
    _isAfter = validator.isAfter;
    _isAfter = isAfter_1;
    _isAfter = isAfterDefault;
    _isAfter = isAfterObj.isAfter;
    _isAfter = isAfter_2;

    let _isAlpha: ValidatorJS.Validators.isAlpha;
    _isAlpha = validator.isAlpha;
    _isAlpha = isAlpha_1;
    _isAlpha = isAlphaDefault;
    _isAlpha = isAlphaObj.isAlpha;
    _isAlpha = isAlpha_2;

    let _isAlphanumeric: ValidatorJS.Validators.isAlphanumeric;
    _isAlphanumeric = validator.isAlphanumeric;
    _isAlphanumeric = isAlphanumeric_1;
    _isAlphanumeric = isAlphanumericDefault;
    _isAlphanumeric = isAlphanumericObj.isAlphanumeric;
    _isAlphanumeric = isAlphanumeric_2;

    let _isAscii: ValidatorJS.Validators.isAscii;
    _isAscii = validator.isAscii;
    _isAscii = isAscii_1;
    _isAscii = isAsciiDefault;
    _isAscii = isAsciiObj.isAscii;
    _isAscii = isAscii_2;

    let _isBase64: ValidatorJS.Validators.isBase64;
    _isBase64 = validator.isBase64;
    _isBase64 = isBase64_1;
    _isBase64 = isBase64Default;
    _isBase64 = isBase64Obj.isBase64;
    _isBase64 = isBase64_2;

    let _isBefore: ValidatorJS.Validators.isBefore;
    _isBefore = validator.isBefore;
    _isBefore = isBefore_1;
    _isBefore = isBeforeDefault;
    _isBefore = isBeforeObj.isBefore;
    _isBefore = isBefore_2;

    let _isBoolean: ValidatorJS.Validators.isBoolean;
    _isBoolean = validator.isBoolean;
    _isBoolean = isBoolean_1;
    _isBoolean = isBooleanDefault;
    _isBoolean = isBooleanObj.isBoolean;
    _isBoolean = isBoolean_2;

    let _isByteLength: ValidatorJS.Validators.isByteLength;
    _isByteLength = validator.isByteLength;
    _isByteLength = isByteLength_1;
    _isByteLength = isByteLengthDefault;
    _isByteLength = isByteLengthObj.isByteLength;
    _isByteLength = isByteLength_2;

    let _isCreditCard: ValidatorJS.Validators.isCreditCard;
    _isCreditCard = validator.isCreditCard;
    _isCreditCard = isCreditCard_1;
    _isCreditCard = isCreditCardDefault;
    _isCreditCard = isCreditCardObj.isCreditCard;
    _isCreditCard = isCreditCard_2;

    let _isCurrency: ValidatorJS.Validators.isCurrency;
    _isCurrency = validator.isCurrency;
    _isCurrency = isCurrency_1;
    _isCurrency = isCurrencyDefault;
    _isCurrency = isCurrencyObj.isCurrency;
    _isCurrency = isCurrency_2;

    let _isDataURI: ValidatorJS.Validators.isDataURI;
    _isDataURI = validator.isDataURI;
    _isDataURI = isDataURI_1;
    _isDataURI = isDataURIDefault;
    _isDataURI = isDataURIObj.isDataURI;
    _isDataURI = isDataURI_2;

    let _isDate: ValidatorJS.Validators.isDate;
    _isDate = validator.isDate;
    _isDate = isDate_1;
    _isDate = isDateDefault;
    _isDate = isDateObj.isDate;
    _isDate = isDate_2;

    let _isDecimal: ValidatorJS.Validators.isDecimal;
    _isDecimal = validator.isDecimal;
    _isDecimal = isDecimal_1;
    _isDecimal = isDecimalDefault;
    _isDecimal = isDecimalObj.isDecimal;
    _isDecimal = isDecimal_2;

    let _isDivisibleBy: ValidatorJS.Validators.isDivisibleBy;
    _isDivisibleBy = validator.isDivisibleBy;
    _isDivisibleBy = isDivisibleBy_1;
    _isDivisibleBy = isDivisibleByDefault;
    _isDivisibleBy = isDivisibleByObj.isDivisibleBy;
    _isDivisibleBy = isDivisibleBy_2;

    let _isEmail: ValidatorJS.Validators.isEmail;
    _isEmail = validator.isEmail;
    _isEmail = isEmail_1;
    _isEmail = isEmailDefault;
    _isEmail = isEmailObj.isEmail;
    _isEmail = isEmail_2;

    let _isFQDN: ValidatorJS.Validators.isFQDN;
    _isFQDN = validator.isFQDN;
    _isFQDN = isFQDN_1;
    _isFQDN = isFQDNDefault;
    _isFQDN = isFQDNObj.isFQDN;
    _isFQDN = isFQDN_2;

    let _isFloat: ValidatorJS.Validators.isFloat;
    _isFloat = validator.isFloat;
    _isFloat = isFloat_1;
    _isFloat = isFloatDefault;
    _isFloat = isFloatObj.isFloat;
    _isFloat = isFloat_2;

    let _isFullWidth: ValidatorJS.Validators.isFullWidth;
    _isFullWidth = validator.isFullWidth;
    _isFullWidth = isFullWidth_1;
    _isFullWidth = isFullWidthDefault;
    _isFullWidth = isFullWidthObj.isFullWidth;
    _isFullWidth = isFullWidth_2;

    let _isHalfWidth: ValidatorJS.Validators.isHalfWidth;
    _isHalfWidth = validator.isHalfWidth;
    _isHalfWidth = isHalfWidth_1;
    _isHalfWidth = isHalfWidthDefault;
    _isHalfWidth = isHalfWidthObj.isHalfWidth;
    _isHalfWidth = isHalfWidth_2;

    let _isHexColor: ValidatorJS.Validators.isHexColor;
    _isHexColor = validator.isHexColor;
    _isHexColor = isHexColor_1;
    _isHexColor = isHexColorDefault;
    _isHexColor = isHexColorObj.isHexColor;
    _isHexColor = isHexColor_2;

    let _isHexadecimal: ValidatorJS.Validators.isHexadecimal;
    _isHexadecimal = validator.isHexadecimal;
    _isHexadecimal = isHexadecimal_1;
    _isHexadecimal = isHexadecimalDefault;
    _isHexadecimal = isHexadecimalObj.isHexadecimal;
    _isHexadecimal = isHexadecimal_2;

    let _isIP: ValidatorJS.Validators.isIP;
    _isIP = validator.isIP;
    _isIP = isIP_1;
    _isIP = isIPDefault;
    _isIP = isIPObj.isIP;
    _isIP = isIP_2;

    let _isISBN: ValidatorJS.Validators.isISBN;
    _isISBN = validator.isISBN;
    _isISBN = isISBN_1;
    _isISBN = isISBNDefault;
    _isISBN = isISBNObj.isISBN;
    _isISBN = isISBN_2;

    let _isISIN: ValidatorJS.Validators.isISIN;
    _isISIN = validator.isISIN;
    _isISIN = isISIN_1;
    _isISIN = isISINDefault;
    _isISIN = isISINObj.isISIN;
    _isISIN = isISIN_2;

    let _isISO8601: ValidatorJS.Validators.isISO8601;
    _isISO8601 = validator.isISO8601;
    _isISO8601 = isISO8601_1;
    _isISO8601 = isISO8601Default;
    _isISO8601 = isISO8601Obj.isISO8601;
    _isISO8601 = isISO8601_2;

    let _isIn: ValidatorJS.Validators.isIn;
    _isIn = validator.isIn;
    _isIn = isIn_1;
    _isIn = isInDefault;
    _isIn = isInObj.isIn;
    _isIn = isIn_2;

    let _isInt: ValidatorJS.Validators.isInt;
    _isInt = validator.isInt;
    _isInt = isInt_1;
    _isInt = isIntDefault;
    _isInt = isIntObj.isInt;
    _isInt = isInt_2;

    let _isJSON: ValidatorJS.Validators.isJSON;
    _isJSON = validator.isJSON;
    _isJSON = isJSON_1;
    _isJSON = isJSONDefault;
    _isJSON = isJSONObj.isJSON;
    _isJSON = isJSON_2;

    let _isLength: ValidatorJS.Validators.isLength;
    _isLength = validator.isLength;
    _isLength = isLength_1;
    _isLength = isLengthDefault;
    _isLength = isLengthObj.isLength;
    _isLength = isLength_2;

    let _isLowercase: ValidatorJS.Validators.isLowercase;
    _isLowercase = validator.isLowercase;
    _isLowercase = isLowercase_1;
    _isLowercase = isLowercaseDefault;
    _isLowercase = isLowercaseObj.isLowercase;
    _isLowercase = isLowercase_2;

    let _isMACAddress: ValidatorJS.Validators.isMACAddress;
    _isMACAddress = validator.isMACAddress;
    _isMACAddress = isMACAddress_1;
    _isMACAddress = isMACAddressDefault;
    _isMACAddress = isMACAddressObj.isMACAddress;
    _isMACAddress = isMACAddress_2;

    let _isMD5: ValidatorJS.Validators.isMD5;
    _isMD5 = validator.isMD5;
    _isMD5 = isMD5_1;
    _isMD5 = isMD5Default;
    _isMD5 = isMD5Obj.isMD5;
    _isMD5 = isMD5_2;

    let _isMobilePhone: ValidatorJS.Validators.isMobilePhone;
    _isMobilePhone = validator.isMobilePhone;
    _isMobilePhone = isMobilePhone_1;
    _isMobilePhone = isMobilePhoneDefault;
    _isMobilePhone = isMobilePhoneObj.isMobilePhone;
    _isMobilePhone = isMobilePhone_2;

    let _isMongoId: ValidatorJS.Validators.isMongoId;
    _isMongoId = validator.isMongoId;
    _isMongoId = isMongoId_1;
    _isMongoId = isMongoIdDefault;
    _isMongoId = isMongoIdObj.isMongoId;
    _isMongoId = isMongoId_2;

    let _isMultibyte: ValidatorJS.Validators.isMultibyte;
    _isMultibyte = validator.isMultibyte;
    _isMultibyte = isMultibyte_1;
    _isMultibyte = isMultibyteDefault;
    _isMultibyte = isMultibyteObj.isMultibyte;
    _isMultibyte = isMultibyte_2;

    let _isNull: ValidatorJS.Validators.isNull;
    _isNull = validator.isNull;
    _isNull = isNull_1;
    _isNull = isNullDefault;
    _isNull = isNullObj.isNull;
    _isNull = isNull_2;

    let _isNumeric: ValidatorJS.Validators.isNumeric;
    _isNumeric = validator.isNumeric;
    _isNumeric = isNumeric_1;
    _isNumeric = isNumericDefault;
    _isNumeric = isNumericObj.isNumeric;
    _isNumeric = isNumeric_2;

    let _isSurrogatePair: ValidatorJS.Validators.isSurrogatePair;
    _isSurrogatePair = validator.isSurrogatePair;
    _isSurrogatePair = isSurrogatePair_1;
    _isSurrogatePair = isSurrogatePairDefault;
    _isSurrogatePair = isSurrogatePairObj.isSurrogatePair;
    _isSurrogatePair = isSurrogatePair_2;

    let _isURL: ValidatorJS.Validators.isURL;
    _isURL = validator.isURL;
    _isURL = isURL_1;
    _isURL = isURLDefault;
    _isURL = isURLObj.isURL;
    _isURL = isURL_2;

    let _isUUID: ValidatorJS.Validators.isUUID;
    _isUUID = validator.isUUID;
    _isUUID = isUUID_1;
    _isUUID = isUUIDDefault;
    _isUUID = isUUIDObj.isUUID;
    _isUUID = isUUID_2;

    let _isUppercase: ValidatorJS.Validators.isUppercase;
    _isUppercase = validator.isUppercase;
    _isUppercase = isUppercase_1;
    _isUppercase = isUppercaseDefault;
    _isUppercase = isUppercaseObj.isUppercase;
    _isUppercase = isUppercase_2;

    let _isVariableWidth: ValidatorJS.Validators.isVariableWidth;
    _isVariableWidth = validator.isVariableWidth;
    _isVariableWidth = isVariableWidth_1;
    _isVariableWidth = isVariableWidthDefault;
    _isVariableWidth = isVariableWidthObj.isVariableWidth;
    _isVariableWidth = isVariableWidth_2;

    let _isWhitelisted: ValidatorJS.Validators.isWhitelisted;
    _isWhitelisted = validator.isWhitelisted;
    _isWhitelisted = isWhitelisted_1;
    _isWhitelisted = isWhitelistedDefault;
    _isWhitelisted = isWhitelistedObj.isWhitelisted;
    _isWhitelisted = isWhitelisted_2;

    let _matches: ValidatorJS.Validators.matches;
    _matches = validator.matches;
    _matches = matches_1;
    _matches = matchesDefault;
    _matches = matchesObj.matches;
    _matches = matches_2;
}

namespace import_sanitizers_tests {
    let _blacklist: ValidatorJS.Sanitizers.blacklist;
    _blacklist = validator.blacklist;
    _blacklist = blacklist_1;
    _blacklist = blacklistDefault;
    _blacklist = blacklistObj.blacklist;
    _blacklist = blacklist_2;

    let _escape: ValidatorJS.Sanitizers.escape;
    _escape = validator.escape;
    _escape = escape_1;
    _escape = escapeDefault;
    _escape = escapeObj.escape;
    _escape = escape_2;

    let _ltrim: ValidatorJS.Sanitizers.ltrim;
    _ltrim = validator.ltrim;
    _ltrim = ltrim_1;
    _ltrim = ltrimDefault;
    _ltrim = ltrimObj.ltrim;
    _ltrim = ltrim_2;

    let _normalizeEmail: ValidatorJS.Sanitizers.normalizeEmail;
    _normalizeEmail = validator.normalizeEmail;
    _normalizeEmail = normalizeEmail_1;
    _normalizeEmail = normalizeEmailDefault;
    _normalizeEmail = normalizeEmailObj.normalizeEmail;
    _normalizeEmail = normalizeEmail_2;

    let _rtrim: ValidatorJS.Sanitizers.rtrim;
    _rtrim = validator.rtrim;
    _rtrim = rtrim_1;
    _rtrim = rtrimDefault;
    _rtrim = rtrimObj.rtrim;
    _rtrim = rtrim_2;

    let _stripLow: ValidatorJS.Sanitizers.stripLow;
    _stripLow = validator.stripLow;
    _stripLow = stripLow_1;
    _stripLow = stripLowDefault;
    _stripLow = stripLowObj.stripLow;
    _stripLow = stripLow_2;

    let _toBoolean: ValidatorJS.Sanitizers.toBoolean;
    _toBoolean = validator.toBoolean;
    _toBoolean = toBoolean_1;
    _toBoolean = toBooleanDefault;
    _toBoolean = toBooleanObj.toBoolean;
    _toBoolean = toBoolean_2;

    let _toDate: ValidatorJS.Sanitizers.toDate;
    _toDate = validator.toDate;
    _toDate = toDate_1;
    _toDate = toDateDefault;
    _toDate = toDateObj.toDate;
    _toDate = toDate_2;

    let _toFloat: ValidatorJS.Sanitizers.toFloat;
    _toFloat = validator.toFloat;
    _toFloat = toFloat_1;
    _toFloat = toFloatDefault;
    _toFloat = toFloatObj.toFloat;
    _toFloat = toFloat_2;

    let _toInt: ValidatorJS.Sanitizers.toInt;
    _toInt = validator.toInt;
    _toInt = toInt_1;
    _toInt = toIntDefault;
    _toInt = toIntObj.toInt;
    _toInt = toInt_2;

    let _trim: ValidatorJS.Sanitizers.trim;
    _trim = validator.trim;
    _trim = trim_1;
    _trim = trimDefault;
    _trim = trimObj.trim;
    _trim = trim_2;

    let _unescape: ValidatorJS.Sanitizers.unescape;
    _unescape = validator.unescape;
    _unescape = unescape_1;
    _unescape = unescapeDefault;
    _unescape = unescapeObj.unescape;
    _unescape = unescape_2;

    let _whitelist: ValidatorJS.Sanitizers.whitelist;
    _whitelist = validator.whitelist;
    _whitelist = whitelist_1;
    _whitelist = whitelistDefault;
    _whitelist = whitelistObj.whitelist;
    _whitelist = whitelist_2;
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
