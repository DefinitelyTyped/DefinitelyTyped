import validator from 'validator';

/************************************************
 *                                               *
 *                  IMPORT TESTS                 *
 *                                               *
 ************************************************/
import blacklistFunc from 'validator/lib/blacklist';
import containsFunc from 'validator/lib/contains';
import equalsFunc from 'validator/lib/equals';
import escapeFunc from 'validator/lib/escape';
import isAfterFunc from 'validator/lib/isAfter';
import isAlphaFunc from 'validator/lib/isAlpha';
import isAlphanumericFunc from 'validator/lib/isAlphanumeric';
import isAsciiFunc from 'validator/lib/isAscii';
import isBase58Func from 'validator/lib/isBase58';
import isBase64Func from 'validator/lib/isBase64';
import isBeforeFunc from 'validator/lib/isBefore';
import isIBANFunc, { locales } from 'validator/lib/isIBAN';
import isBICFunc from 'validator/lib/isBIC';
import isBooleanFunc from 'validator/lib/isBoolean';
import isByteLengthFunc from 'validator/lib/isByteLength';
import isCreditCardFunc from 'validator/lib/isCreditCard';
import isCurrencyFunc from 'validator/lib/isCurrency';
import isEthereumAddressFunc from 'validator/lib/isEthereumAddress';
import isBtcAddressFunc from 'validator/lib/isBtcAddress';
import isDataURIFunc from 'validator/lib/isDataURI';
import isDateFunc from 'validator/lib/isDate';
import isDecimalFunc from 'validator/lib/isDecimal';
import isDivisibleByFunc from 'validator/lib/isDivisibleBy';
import isEmailFunc from 'validator/lib/isEmail';
import isEmptyFunc from 'validator/lib/isEmpty';
import isFQDNFunc, { IsFQDNOptions } from 'validator/lib/isFQDN';
import isFloatFunc from 'validator/lib/isFloat';
import isFullWidthFunc from 'validator/lib/isFullWidth';
import isHalfWidthFunc from 'validator/lib/isHalfWidth';
import isHashFunc from 'validator/lib/isHash';
import isHexColorFunc from 'validator/lib/isHexColor';
import isHSLFunc from 'validator/lib/isHSL';
import isRgbColorFunc from 'validator/lib/isRgbColor';
import isHexadecimalFunc from 'validator/lib/isHexadecimal';
import isIPFunc from 'validator/lib/isIP';
import isIPRange from 'validator/lib/isIPRange';
import isISBNFunc from 'validator/lib/isISBN';
import isEANFunc from 'validator/lib/isEAN';
import isISSNFunc from 'validator/lib/isISSN';
import isISINFunc from 'validator/lib/isISIN';
import isISO8601Func from 'validator/lib/isISO8601';
import isISO31661Alpha2Func from 'validator/lib/isISO31661Alpha2';
import isISO31661Alpha3Func from 'validator/lib/isISO31661Alpha3';
import isISO4217Func from 'validator/lib/isISO4217';
import isISRCFunc from 'validator/lib/isISRC';
import isInFunc from 'validator/lib/isIn';
import isIntFunc from 'validator/lib/isInt';
import isJSONFunc from 'validator/lib/isJSON';
import isJWTFunc from 'validator/lib/isJWT';
import isLatLongFunc from 'validator/lib/isLatLong';
import isLengthFunc from 'validator/lib/isLength';
import isLocaleFunc from 'validator/lib/isLocale';
import isLowercaseFunc from 'validator/lib/isLowercase';
import isMACAddressFunc from 'validator/lib/isMACAddress';
import isMD5Func from 'validator/lib/isMD5';
import isMimeTypeFunc from 'validator/lib/isMimeType';
import isMobilePhoneFunc from 'validator/lib/isMobilePhone';
import isMongoIdFunc from 'validator/lib/isMongoId';
import isMultibyteFunc from 'validator/lib/isMultibyte';
import isNumericFunc from 'validator/lib/isNumeric';
import isOctalFunc from 'validator/lib/isOctal';
import isPassportNumberFunc from 'validator/lib/isPassportNumber';
import isPortFunc from 'validator/lib/isPort';
import isPostalCodeFunc from 'validator/lib/isPostalCode';
import isSemVerFunc from 'validator/lib/isSemVer';
import isStrongPasswordFunc from 'validator/lib/isStrongPassword';
import isSurrogatePairFunc from 'validator/lib/isSurrogatePair';
import isURLFunc from 'validator/lib/isURL';
import isUUIDFunc from 'validator/lib/isUUID';
import isTaxIDFunc from 'validator/lib/isTaxID';
import isUppercaseFunc from 'validator/lib/isUppercase';
import isVariableWidthFunc from 'validator/lib/isVariableWidth';
import isWhitelistedFunc from 'validator/lib/isWhitelisted';
import ltrimFunc from 'validator/lib/ltrim';
import matchesFunc from 'validator/lib/matches';
import normalizeEmailFunc from 'validator/lib/normalizeEmail';
import rtrimFunc from 'validator/lib/rtrim';
import stripLowFunc from 'validator/lib/stripLow';
import toBooleanFunc from 'validator/lib/toBoolean';
import toDateFunc from 'validator/lib/toDate';
import toFloatFunc from 'validator/lib/toFloat';
import toIntFunc from 'validator/lib/toInt';
import trimFunc from 'validator/lib/trim';
import unescapeFunc from 'validator/lib/unescape';
import whitelistFunc from 'validator/lib/whitelist';
import isSlugFunc from 'validator/lib/isSlug';
import isVatFunc from 'validator/lib/isVAT';

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

    validator.isIBAN; // $ExpectType (str: string) => boolean
    isIBANFunc; // $ExpectType (str: string) => boolean
    validator.ibanLocales;

    let _isBIC = validator.isBIC;
    _isBIC = isBICFunc;

    validator.isBoolean; // $ExpectType (str: string, options?: Options | undefined) => boolean
    isBooleanFunc; // $ExpectType (str: string, options?: Options | undefined) => boolean

    let _isByteLength = validator.isByteLength;
    _isByteLength = isByteLengthFunc;

    let _isCreditCard = validator.isCreditCard;
    _isCreditCard = isCreditCardFunc;

    let _isCurrency = validator.isCurrency;
    _isCurrency = isCurrencyFunc;

    let _isEthereumAddress = validator.isEthereumAddress;
    _isEthereumAddress = isEthereumAddressFunc;

    let _isBtcAddress = validator.isBtcAddress;
    _isBtcAddress = isBtcAddressFunc;

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

    let _isEmpty = validator.isEmpty;
    _isEmpty = isEmptyFunc;

    validator.isFQDN; // $ExpectType (str: string, options?: IsFQDNOptions | undefined) => boolean
    isFQDNFunc; // $ExpectType (str: string, options?: IsFQDNOptions | undefined) => boolean
    const isFQDNOptions: IsFQDNOptions = {
        allow_numeric_tld: true,
    };

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

    let _isHSL = validator.isHSL;
    _isHSL = isHSLFunc;

    let _isRgbColor = validator.isRgbColor;
    _isRgbColor = isRgbColorFunc;

    let _isHexadecimal = validator.isHexadecimal;
    _isHexadecimal = isHexadecimalFunc;

    let _isIP = validator.isIP;
    _isIP = isIPFunc;

    let _isIPRange = validator.isIPRange;
    _isIPRange = isIPRange;

    let _isISBN = validator.isISBN;
    _isISBN = isISBNFunc;

    let _isEAN = validator.isEAN;
    _isEAN = isEANFunc;

    let _isISSN = validator.isISSN;
    _isISSN = isISSNFunc;

    let _isISIN = validator.isISIN;
    _isISIN = isISINFunc;

    let _isISO8601 = validator.isISO8601;
    _isISO8601 = isISO8601Func;

    validator.isISO31661Alpha2; // $ExpectType (str: string) => boolean
    isISO31661Alpha2Func; // $ExpectType (str: string) => boolean

    let _isISO31661Alpha3 = validator.isISO31661Alpha3;
    _isISO31661Alpha3 = isISO31661Alpha3Func;

    validator.isISO4217; // $ExpectType (str: string) => boolean
    isISO4217Func; // $ExpectType (str: string) => boolean

    let _isISRC = validator.isISRC;
    _isISRC = isISRCFunc;

    let _isIn = validator.isIn;
    _isIn = isInFunc;

    let _isInt = validator.isInt;
    _isInt = isIntFunc;

    let _isJSON = validator.isJSON;
    _isJSON = isJSONFunc;

    let _isJWT = validator.isJWT;
    _isJWT = isJWTFunc;

    let _isLatLong = validator.isLatLong;
    _isLatLong = isLatLongFunc;

    let _isLength = validator.isLength;
    _isLength = isLengthFunc;

    let _isLocale = validator.isLocale;
    _isLocale = isLocaleFunc;

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

    let _isOctal = validator.isOctal;
    _isOctal = isOctalFunc;

    let _isPassportNumber = validator.isPassportNumber;
    _isPassportNumber = isPassportNumberFunc;

    let _isPort = validator.isPort;
    _isPort = isPortFunc;

    let _isPostalCode = validator.isPostalCode;
    _isPostalCode = isPostalCodeFunc;

    let _isSemVer = validator.isSemVer;
    _isSemVer = isSemVerFunc;

    let _isStrongPassword = validator.isStrongPassword;
    _isStrongPassword = isStrongPasswordFunc;

    let _isSurrogatePair = validator.isSurrogatePair;
    _isSurrogatePair = isSurrogatePairFunc;

    let _isURL = validator.isURL;
    _isURL = isURLFunc;

    let _isUUID = validator.isUUID;
    _isUUID = isUUIDFunc;

    let _isTaxID = validator.isTaxID;
    _isTaxID = isTaxIDFunc;

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

    let _isSlug = validator.isSlug;
    _isSlug = isSlugFunc;
}

/************************************************
 *                                               *
 *                  ES IMPORT TESTS              *
 *                                               *
 ************************************************/
import blacklistFuncEs from 'validator/es/lib/blacklist';
import containsFuncEs from 'validator/es/lib/contains';
import equalsFuncEs from 'validator/es/lib/equals';
import escapeFuncEs from 'validator/es/lib/escape';
import isAfterFuncEs from 'validator/es/lib/isAfter';
import isAlphaFuncEs from 'validator/es/lib/isAlpha';
import isAlphanumericFuncEs from 'validator/es/lib/isAlphanumeric';
import isAsciiFuncEs from 'validator/es/lib/isAscii';
import isBase64FuncEs from 'validator/es/lib/isBase64';
import isBeforeFuncEs from 'validator/es/lib/isBefore';
import isIBANFuncEs from 'validator/es/lib/isIBAN';
import isBICFuncEs from 'validator/es/lib/isBIC';
import isBooleanFuncEs from 'validator/es/lib/isBoolean';
import isByteLengthFuncEs from 'validator/es/lib/isByteLength';
import isCreditCardFuncEs from 'validator/es/lib/isCreditCard';
import isCurrencyFuncEs from 'validator/es/lib/isCurrency';
import isEthereumAddressFuncEs from 'validator/es/lib/isEthereumAddress';
import isBtcAddressFuncEs from 'validator/es/lib/isBtcAddress';
import isDataURIFuncEs from 'validator/es/lib/isDataURI';
import isDateFuncEs from 'validator/es/lib/isDate';
import isDecimalFuncEs from 'validator/es/lib/isDecimal';
import isDivisibleByFuncEs from 'validator/es/lib/isDivisibleBy';
import isEmailFuncEs from 'validator/es/lib/isEmail';
import isEmptyFuncEs from 'validator/es/lib/isEmpty';
import isFQDNFuncEs from 'validator/es/lib/isFQDN';
import isFloatFuncEs from 'validator/es/lib/isFloat';
import isFullWidthFuncEs from 'validator/es/lib/isFullWidth';
import isHalfWidthFuncEs from 'validator/es/lib/isHalfWidth';
import isHashFuncEs from 'validator/es/lib/isHash';
import isHexColorFuncEs from 'validator/es/lib/isHexColor';
import isHSLFuncEs from 'validator/es/lib/isHSL';
import isRgbColorFuncEs from 'validator/es/lib/isRgbColor';
import isHexadecimalFuncEs from 'validator/es/lib/isHexadecimal';
import isIPFuncEs from 'validator/es/lib/isIP';
import isIPRangeFuncEs from 'validator/es/lib/isIPRange';
import isISBNFuncEs from 'validator/es/lib/isISBN';
import isEANFuncEs from 'validator/es/lib/isEAN';
import isISSNFuncEs from 'validator/es/lib/isISSN';
import isISINFuncEs from 'validator/es/lib/isISIN';
import isISO8601FuncEs from 'validator/es/lib/isISO8601';
import isISO31661Alpha2FuncEs, { CountryCodes } from 'validator/es/lib/isISO31661Alpha2';
import isISO31661Alpha3FuncEs from 'validator/es/lib/isISO31661Alpha3';
import isISO4217FuncEs, { CurrencyCodes } from 'validator/es/lib/isISO4217';
import isISRCFuncEs from 'validator/es/lib/isISRC';
import isInFuncEs from 'validator/es/lib/isIn';
import isIntFuncEs from 'validator/es/lib/isInt';
import isJSONFuncEs from 'validator/es/lib/isJSON';
import isJWTFuncEs from 'validator/es/lib/isJWT';
import isLatLongFuncEs from 'validator/es/lib/isLatLong';
import isLengthFuncEs from 'validator/es/lib/isLength';
import isLocaleFuncEs from 'validator/es/lib/isLocale';
import isLowercaseFuncEs from 'validator/es/lib/isLowercase';
import isMACAddressFuncEs from 'validator/es/lib/isMACAddress';
import isMD5FuncEs from 'validator/es/lib/isMD5';
import isMimeTypeFuncEs from 'validator/es/lib/isMimeType';
import isMobilePhoneFuncEs from 'validator/es/lib/isMobilePhone';
import isMongoIdFuncEs from 'validator/es/lib/isMongoId';
import isMultibyteFuncEs from 'validator/es/lib/isMultibyte';
import isNumericFuncEs from 'validator/es/lib/isNumeric';
import isOctalFuncEs from 'validator/es/lib/isOctal';
import isPassportNumberFuncEs from 'validator/es/lib/isPassportNumber';
import isPortFuncEs from 'validator/es/lib/isPort';
import isPostalCodeFuncEs from 'validator/es/lib/isPostalCode';
import isSemVerFuncEs from 'validator/es/lib/isSemVer';
import isStrongPasswordFuncEs from 'validator/es/lib/isStrongPassword';
import isSurrogatePairFuncEs from 'validator/es/lib/isSurrogatePair';
import isURLFuncEs from 'validator/es/lib/isURL';
import isUUIDFuncEs from 'validator/es/lib/isUUID';
import isTaxIDFuncEs from 'validator/es/lib/isTaxID';
import isUppercaseFuncEs from 'validator/es/lib/isUppercase';
import isVariableWidthFuncEs from 'validator/es/lib/isVariableWidth';
import isWhitelistedFuncEs from 'validator/es/lib/isWhitelisted';
import ltrimFuncEs from 'validator/es/lib/ltrim';
import matchesFuncEs from 'validator/es/lib/matches';
import normalizeEmailFuncEs from 'validator/es/lib/normalizeEmail';
import rtrimFuncEs from 'validator/es/lib/rtrim';
import stripLowFuncEs from 'validator/es/lib/stripLow';
import toBooleanFuncEs from 'validator/es/lib/toBoolean';
import toDateFuncEs from 'validator/es/lib/toDate';
import toFloatFuncEs from 'validator/es/lib/toFloat';
import toIntFuncEs from 'validator/es/lib/toInt';
import trimFuncEs from 'validator/es/lib/trim';
import unescapeFuncEs from 'validator/es/lib/unescape';
import whitelistFuncEs from 'validator/es/lib/whitelist';
import isSlugFuncEs from 'validator/es/lib/isSlug';
import isBase58FuncEs from 'validator/es/lib/isBase58';
import isVATFuncEs from 'validator/es/lib/isVAT';

/************************************************
 *                                               *
 *                  API TESTS                    *
 *                                               *
 ************************************************/
const any: any = null;

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
    result = validator.isAlpha('sample', undefined, { ignore: /[\s!?]/g });
    result = validator.isAlpha('sample', 'fr-FR', { ignore: /[\s!?]/g });
    result = validator.isAlpha('sample', 'fr-FR', { ignore: ' !?' });

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
    result = validator.isAlphanumeric('sample', undefined, { ignore: /[\s!?]/g });
    result = validator.isAlphanumeric('sample', 'fr-FR', { ignore: /[\s!?]/g });
    result = validator.isAlphanumeric('sample', 'fr-FR', { ignore: ' !?' });

    result = validator.isAscii('sample');

    isBase58Func('sample'); // $ExpectType boolean
    const isBase64Options: validator.IsBase64Options = {};
    result = validator.isBase64('sample');
    result = validator.isBase64('sample', isBase64Options);

    result = validator.isBefore('sample');
    result = validator.isBefore('sample', new Date().toString());

    result = validator.isIBAN('sample');

    result = validator.isBIC('SBICKEN1345');

    result = validator.isBoolean('sample');

    const isByteLengthOptions: validator.IsByteLengthOptions = {};
    result = validator.isByteLength('sample', isByteLengthOptions);

    result = validator.isCreditCard('sample');

    const isCurrencyOptions: validator.IsCurrencyOptions = {};
    result = validator.isCurrency('sample');
    result = validator.isCurrency('sample', isCurrencyOptions);

    result = validator.isEthereumAddress('sample');

    result = validator.isBtcAddress('sample');

    result = validator.isDataURI('sample');

    const isDateOptions: validator.IsDateOptions = {};
    result = validator.isDate('sample');
    result = validator.isDate('sample', isDateOptions);

    const isDecimalOptions: validator.IsDecimalOptions = {};
    result = validator.isDecimal('sample');
    result = validator.isDecimal('sample', isDecimalOptions);

    result = validator.isDivisibleBy('sample', 2);

    const isEmailOptions: validator.IsEmailOptions = {
        host_blacklist: ['domain'],
    };

    const isEmailOptionsWithBlacklistedCharacters: validator.IsEmailOptions = {
        blacklisted_chars: 'sample',
    };

    result = validator.isEmail('sample');
    result = validator.isEmail('sample', isEmailOptions);
    result = validator.isEmail('sample', isEmailOptionsWithBlacklistedCharacters);

    const isEmptyOptions: validator.IsEmptyOptions = {};
    result = validator.isEmpty('sample');
    result = validator.isEmpty('sample', isEmptyOptions);

    const isFQDNOptions: validator.IsFQDNOptions = {
        allow_wildcard: true,
    };
    result = validator.isFQDN('sample');
    result = validator.isFQDN('sample', isFQDNOptions);

    const isFloatOptions: validator.IsFloatOptions = {};
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

    result = validator.isHSL('sample');

    result = validator.isRgbColor('sample');
    result = validator.isRgbColor('sample', true);

    result = validator.isHexadecimal('sample');

    result = validator.isIP('sample');
    result = validator.isIP('sample', '6');

    result = validator.isIPRange('sample');
    result = validator.isIPRange('sample', '6');

    result = validator.isISBN('sample');
    result = validator.isISBN('sample', '13');

    result = validator.isEAN('sample');

    const isISSNOptions: validator.IsISSNOptions = {
        case_sensitive: true,
        require_hyphen: true,
    };
    result = validator.isISSN('sample');
    result = validator.isISSN('sample', isISSNOptions);

    result = validator.isISIN('sample');

    const isISO8601Options: validator.IsISO8601Options = {
        strict: true,
    };
    result = validator.isISO8601('sample');
    result = validator.isISO8601('sample', isISO8601Options);

    result = validator.isISO31661Alpha2('sample');
    result = validator.isISO31661Alpha3('sample');

    result = validator.isISRC('sample');

    result = validator.isIn('sample', []);

    const isIntOptions: validator.IsIntOptions = {};
    result = validator.isInt('sample');
    result = validator.isInt('sample', isIntOptions);

    result = validator.isJSON('sample');

    result = validator.isLatLong('sample');

    const isLengthOptions: validator.IsLengthOptions = {};
    result = validator.isLength('sample', isLengthOptions);
    result = validator.isLength('sample');

    result = validator.isLocale('sample');

    result = validator.isLowercase('sample');

    const isMACAddressOptions: validator.IsMACAddressOptions = {
        no_colons: true,
    };
    result = validator.isMACAddress('sample', isMACAddressOptions);
    result = validator.isMACAddress('sample');

    result = validator.isMD5('sample');

    result = validator.isMimeType('sample');

    const isMobilePhoneOptions: validator.IsMobilePhoneOptions = {
        strictMode: true,
    };
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
    result = validator.isMobilePhone('sample');
    result = validator.isMobilePhone('sample', ['pl-PL', 'pt-PT']);
    result = validator.isMobilePhone('sample', ['es-AR', 'es-CO']); // $ExpectType boolean

    result = validator.isMongoId('sample');

    result = validator.isMultibyte('sample');

    result = validator.isNumeric('sample');
    result = validator.isNumeric('+358', { no_symbols: true });
    result = validator.isNumeric('358,50', { locale: 'pt-BR' });

    result = validator.isOctal('076543210');

    result = validator.isPassportNumber('sample', 'US');

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

    result = validator.isSemVer('sample');

    result = validator.isSurrogatePair('sample');

    const isURLOptions: validator.IsURLOptions = {
        require_host: true,
    };
    result = validator.isURL('sample');
    result = validator.isURL('sample', isURLOptions);

    result = validator.isUUID('sample');
    result = validator.isUUID('sample', 5);
    result = validator.isUUID('sample', 'all');

    result = validator.isUppercase('sample');

    result = validator.isVariableWidth('sample');
    validator.isVAT('GB999 9999 00', 'GB'); // $ExpectType boolean
    isVatFunc('foo', 'GB'); // $ExpectType boolean

    result = validator.isWhitelisted('sample', 'abc');
    result = validator.isWhitelisted('sample', ['a', 'b', 'c']);

    result = validator.matches('foobar', 'foo/i');
    result = validator.matches('foobar', 'foo', 'i');

    result = validator.isSlug('cs_67CZ');
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

    const normalizeEmailOptions: validator.NormalizeEmailOptions = {};
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
    let result: Date | null;

    result = validator.toDate(any);
}

{
    let result: number;

    result = validator.toFloat(any);

    result = validator.toInt(any);
    result = validator.toInt(any, 10);
}

{
    // $ExpectType boolean
    validator.isStrongPassword('sample23#@test');
    // $ExpectType boolean
    validator.isStrongPassword('sample23#@test', {
        minLength: 10,
    });
    // $ExpectType boolean
    validator.isStrongPassword('sample23#@test', { returnScore: false });
    // $ExpectType boolean
    validator.isStrongPassword('abc', {
        minLength: 10,
        returnScore: false,
    });
    // $ExpectType number
    validator.isStrongPassword('sample23#@test', { returnScore: true });
    // $ExpectType number
    validator.isStrongPassword('sample23#@test', { minLength: 10, returnScore: true });
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
