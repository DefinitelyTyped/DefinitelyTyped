// Type definitions for validator.js v5.7.0
// Project: https://github.com/chriso/validator.js
// Definitions by: tgfjt <https://github.com/tgfjt>, Ilya Mochalov <https://github.com/chrootsu>, Ayman Nedjmeddine <https://github.com/IOAyman>, Louy Alakkad <https://github.com/louy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/************************************************
*                                               *
*                  NAMESPACE                    *
*                                               *
************************************************/
declare namespace ValidatorJS {
    /////////////////////
    // ValidatorStatic //
    /////////////////////
    namespace ValidatorStatic {
        interface Validator {
            ///////////////////////////////////////
            /// export function form Validators ///
            ///////////////////////////////////////
            contains: Validators.contains
            equals: Validators.equals
            isAfter: Validators.isAfter
            isAlpha: Validators.isAlpha
            isAlphanumeric: Validators.isAlphanumeric
            isAscii: Validators.isAscii
            isBase64: Validators.isBase64
            isBefore: Validators.isBefore
            isBoolean: Validators.isBoolean
            isByteLength: Validators.isByteLength
            isCreditCard: Validators.isCreditCard
            isCurrency: Validators.isCurrency
            isDataURI: Validators.isDataURI
            isDate: Validators.isDate
            isDecimal: Validators.isDecimal
            isDivisibleBy: Validators.isDivisibleBy
            isEmail: Validators.isEmail
            isFQDN: Validators.isFQDN
            isFloat: Validators.isFloat
            isFullWidth: Validators.isFullWidth
            isHalfWidth: Validators.isHalfWidth
            isHexColor: Validators.isHexColor
            isHexadecimal: Validators.isHexadecimal
            isIP: Validators.isIP
            isISBN: Validators.isISBN
            isISIN: Validators.isISIN
            isISO8601: Validators.isISO8601
            isIn: Validators.isIn
            isInt: Validators.isInt
            isJSON: Validators.isJSON
            isLength: Validators.isLength
            isLowercase: Validators.isLowercase
            isMACAddress: Validators.isMACAddress
            isMD5: Validators.isMD5
            isMobilePhone: Validators.isMobilePhone
            isMongoId: Validators.isMongoId
            isMultibyte: Validators.isMultibyte
            isNull: Validators.isNull
            isNumeric: Validators.isNumeric
            isSurrogatePair: Validators.isSurrogatePair
            isURL: Validators.isURL
            isUUID: Validators.isUUID
            isUppercase: Validators.isUppercase
            isVariableWidth: Validators.isVariableWidth
            isWhitelisted: Validators.isWhitelisted
            matches: Validators.matches
            /*
            IsCurrencyOptions: Validators.IsCurrencyOptions
            IsEmailOptions: Validators.IsEmailOptions
            IsFQDNOptions: Validators.IsFQDNOptions
            IsFloatOptions: Validators.IsFloatOptions
            IsIntOptions: Validators.IsIntOptions
            IsLengthOptions: Validators.IsLengthOptions
            IsURLOptions: Validators.IsURLOptions
            */
            ///////////////////////////////////////
            /// export function form Sanitizers ///
            ///////////////////////////////////////
            blacklist: Sanitizers.blacklist
            escape: Sanitizers.escape
            ltrim: Sanitizers.ltrim
            normalizeEmail: Sanitizers.normalizeEmail
            rtrim: Sanitizers.rtrim
            stripLow: Sanitizers.stripLow
            toBoolean: Sanitizers.toBoolean
            toDate: Sanitizers.toDate
            toFloat: Sanitizers.toFloat
            toInt: Sanitizers.toInt
            trim: Sanitizers.trim
            unescape: Sanitizers.unescape
            whitelist: Sanitizers.whitelist
        }
    }

    ////////////////
    // Validators //
    ////////////////
    namespace Validators {
        type AlphaLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "cs-CZ" | "de-DE" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "hu-HU" | "nl-NL" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sr-RS" | "sr-RS@latin" | "tr-TR";

        type AlphanumericLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "cs-CZ" | "de-DE" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "fr-BE" | "hu-HU" | "nl-BE" | "nl-NL" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sr-RS" | "sr-RS@latin" | "tr-TR";

        // check if the string contains the seed.
        type contains = (str: string, elem: any) => boolean;

        // check if the string matches the comparison.
        type equals = (str: string, comparison: any) => boolean;

        // check if the string is a date that's after the specified date (defaults to now).
        type isAfter = (str: string, date?: string) => boolean;

        // check if the string contains only letters (a-zA-Z). Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
        // 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE',
        // 'cs-CZ', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU',
        // 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sr-RS', 'sr-RS@latin', 'tr-TR']) and defaults to en-US
        type isAlpha = (str: string, locale?: AlphaLocale) => boolean;

        // check if the string contains only letters and numbers. Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
        // 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE',
        // 'cs-CZ', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU',
        // 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sr-RS', 'sr-RS@latin', 'tr-TR']) and defaults to en-US
        type isAlphanumeric = (str: string, locale?: AlphanumericLocale) => boolean;

        // check if the string contains ASCII chars only.
        type isAscii = (str: string) => boolean;

        // check if a string is base64 encoded.
        type isBase64 = (str: string) => boolean;

        // check if the string is a date that's before the specified date.
        type isBefore = (str: string, date?: string) => boolean;

        // check if a string is a boolean.
        type isBoolean = (str: string) => boolean;

        // check if the string's length (in bytes) falls in a range.
        interface isByteLength {
            (str: string, options: IsByteLengthOptions): boolean;
            (str: string, min: number, max?: number): boolean;
        }

        // check if the string is a credit card.
        type isCreditCard = (str: string) => boolean;

        // check if the string is a valid currency amount.
        type isCurrency = (str: string, options?: IsCurrencyOptions) => boolean;

        // check if the string is a data uri format (https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs)
        type isDataURI = (str: string) => boolean;

        // check if the string is a date.
        type isDate = (str: string) => boolean;

        // check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.
        type isDecimal = (str: string) => boolean;

        // check if the string is a number that's divisible by another.
        type isDivisibleBy = (str: string, number: number) => boolean;

        // check if the string is an email.
        type isEmail = (str: string, options?: IsEmailOptions) => boolean;

        // check if the string is a fully qualified domain name (e.g. domain.com).
        type isFQDN = (str: string, options?: IsFQDNOptions) => boolean;

        // check if the string is a float.
        type isFloat = (str: string, options?: IsFloatOptions) => boolean;

        // check if the string contains any full-width chars.
        type isFullWidth = (str: string) => boolean;

        // check if the string contains any half-width chars.
        type isHalfWidth = (str: string) => boolean;

        // check if the string is a hexadecimal color.
        type isHexColor = (str: string) => boolean;

        // check if the string is a hexadecimal number.
        type isHexadecimal = (str: string) => boolean;

        // check if the string is an IP (version 4 or 6).
        type isIP = (str: string, version?: number) => boolean;

        // check if the string is an ISBN (version 10 or 13).
        type isISBN = (str: string, version?: number) => boolean;

        // check if the string is an ISIN (https://en.wikipedia.org/wiki/International_Securities_Identification_Number)
        // (stock/security identifier).
        type isISIN = (str: string) => boolean;

        // check if the string is a valid ISO 8601 (https://en.wikipedia.org/wiki/ISO_8601) date.
        type isISO8601 = (str: string) => boolean;

        // check if the string is in a array of allowed values.
        type isIn = (str: string, values: any[]) => boolean;

        // check if the string is an integer.
        type isInt = (str: string, options?: IsIntOptions) => boolean;

        // check if the string is valid JSON (note: uses JSON.parse).
        type isJSON = (str: string) => boolean;

        // check if the string's length falls in a range.
        // Note: this function takes into account surrogate pairs.
        interface isLength {
            (str: string, options: IsLengthOptions): boolean;
            (str: string, min: number, max?: number): boolean;
        }

        // check if the string is lowercase.
        type isLowercase = (str: string) => boolean;

        // check if the string is a MAC address.
        type isMACAddress = (str: string) => boolean;

        // check if the string is a MD5 hash.
        type isMD5 = (str: string) => boolean;

        // check if the string is a mobile phone number, (locale is one of
        // ['ar-DZ', 'ar-SA', 'ar-SY', 'cs-CZ', 'de-DE', 'da-DK', 'el-GR', 'en-AU', 'en-GB', 'en-HK',
        // 'en-IN', 'en-NZ', 'en-US', 'en-CA', 'en-ZA', 'en-ZM', 'es-ES', 'fi-FI', 'fr-FR', 'hu-HU',
        // 'it-IT', 'ja-JP', 'ms-MY', 'nb-NO', 'nn-NO', 'pl-PL', 'pt-PT', 'ru-RU', 'sr-RS', 'tr-TR',
        // 'vi-VN', 'zh-CN', 'zh-TW']).
        type isMobilePhone = (str: string, locale: string) => boolean;

        // check if the string is a valid hex-encoded representation of a MongoDB ObjectId
        // (http://docs.mongodb.org/manual/reference/object-id/).
        type isMongoId = (str: string) => boolean;

        // check if the string contains one or more multibyte chars.
        type isMultibyte = (str: string) => boolean;

        // check if the string is null.
        type isNull = (str: string) => boolean;

        // check if the string contains only numbers.
        type isNumeric = (str: string) => boolean;

        // check if the string contains any surrogate pairs chars.
        type isSurrogatePair = (str: string) => boolean;

        // check if the string is an URL.
        type isURL = (str: string, options?: IsURLOptions) => boolean;

        // check if the string is a UUID. Must be one of ['3', '4', '5', 'all'], default is all.
        type isUUID = (str: string, version?: string | number) => boolean;

        // check if the string is uppercase.
        type isUppercase = (str: string) => boolean;

        // check if the string contains a mixture of full and half-width chars.
        type isVariableWidth = (str: string) => boolean;

        // checks characters if they appear in the whitelist.
        type isWhitelisted = (str: string, chars: string | string[]) => boolean;

        // check if string matches the pattern.
        type matches = (str: string, pattern: RegExp | string, modifiers?: string) => boolean;
    }


    ////////////////
    // Sanitizers //
    ////////////////
    namespace Sanitizers {
        // remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need
        // to escape some chars, e.g. blacklist(input, '\\[\\]').
        type blacklist = (input: string, chars: string) => string;

        // replace <, >, &, ', " and / with HTML entities.
        type escape = (input: string) => string;

        // replaces HTML encoded entities with <, >, &, ', " and /.
        type unescape = (input: string) => string;

        // trim characters from the left-side of the input.
        type ltrim = (input: any, chars?: string) => string;

        // canonicalize an email address.
        type normalizeEmail = (email: string, options?: NormalizeEmailOptions) => string;

        // trim characters from the right-side of the input.
        type rtrim = (input: any, chars?: string) => string;

        // remove characters with a numerical value < 32 and 127, mostly control characters. If keep_new_lines is true,
        // newline characters are preserved (\n and \r, hex 0xA and 0xD). Unicode-safe in JavaScript.
        type stripLow = (input: string, keep_new_lines?: boolean) => string;

        // convert the input to a boolean. Everything except for '0', 'false' and '' returns true. In strict mode only '1'
        // and 'true' return true.
        type toBoolean = (input: any, strict?: boolean) => boolean;

        // convert the input to a date, or null if the input is not a date.
        type toDate = (input: any) => Date; // Date or null

        // convert the input to a float, or NaN if the input is not a float.
        type toFloat = (input: any) => number; // number or NaN

        // convert the input to an integer, or NaN if the input is not an integer.
        type toInt = (input: any, radix?: number) => number; // number or NaN

        // trim characters (whitespace by default) from both sides of the input.
        type trim = (input: any, chars?: string) => string;

        // remove characters that do not appear in the whitelist. The characters are used in a RegExp and so you will
        // need to escape some chars, e.g. whitelist(input, '\\[\\]').
        type whitelist = (input: string, chars: string) => string;
    }

    ///// Options interfaces
    // options for IsByteLength
    interface IsByteLengthOptions {
        min?: number;
        max?: number;
    }

    // options for IsCurrency
    interface IsCurrencyOptions {
        symbol?: string;
        require_symbol?: boolean;
        allow_space_after_symbol?: boolean;
        symbol_after_digits?: boolean;
        allow_negatives?: boolean;
        parens_for_negatives?: boolean;
        negative_sign_before_digits?: boolean;
        negative_sign_after_digits?: boolean;
        allow_negative_sign_placeholder?: boolean;
        thousands_separator?: string;
        decimal_separator?: string;
        allow_space_after_digits?: boolean;
    }

    // options for isEmail
    interface IsEmailOptions {
        allow_display_name?: boolean;
        allow_utf8_local_part?: boolean;
        require_tld?: boolean;
    }

    // options for isFQDN
    interface IsFQDNOptions {
        require_tld?: boolean;
        allow_underscores?: boolean;
        allow_trailing_dot?: boolean;
    }

    // options for IsFloat
    interface IsFloatOptions {
        min?: number;
        max?: number;
    }

    // options for IsInt
    interface IsIntOptions {
        min?: number;
        max?: number;
    }

    // options for IsLength
    interface IsLengthOptions {
        min?: number;
        max?: number;
    }

    // options for isURL
    interface IsURLOptions {
        protocols?: string[];
        require_tld?: boolean;
        require_protocol?: boolean;
        require_host: boolean;
        require_valid_protocol?: boolean;
        allow_underscores?: boolean;
        host_whitelist?: (string | RegExp)[];
        host_blacklist?: (string | RegExp)[];
        allow_trailing_dot?: boolean;
        allow_protocol_relative_urls?: boolean;
    }

    // options for normalizeEmail
    interface NormalizeEmailOptions {
        lowercase?: boolean;
        remove_dots?: boolean;
        remove_extension?: boolean;
    }
}


/************************************************
*                                               *
*                  MODULE                       *
*                                               *
************************************************/
/////////////////
// Main module //
/////////////////
declare module "validator" {
    ///////////////////////////////////////
    /// export function form Sanitizers ///
    ///////////////////////////////////////
    const validator: ValidatorJS.ValidatorStatic.Validator;
    export default validator;

    ///////////////////////////////////////
    /// export function form Validators ///
    ///////////////////////////////////////
    export * from "validator/lib/contains";
    export * from "validator/lib/equals";
    export * from "validator/lib/isAfter";
    export * from "validator/lib/isAlpha";
    export * from "validator/lib/isAlphanumeric";
    export * from "validator/lib/isAscii";
    export * from "validator/lib/isBase64";
    export * from "validator/lib/isBefore";
    export * from "validator/lib/isBoolean";
    export * from "validator/lib/isByteLength";
    export * from "validator/lib/isCreditCard";
    export * from "validator/lib/isCurrency";
    export * from "validator/lib/isDataURI";
    export * from "validator/lib/isDate";
    export * from "validator/lib/isDecimal";
    export * from "validator/lib/isDivisibleBy";
    export * from "validator/lib/isEmail";
    export * from "validator/lib/isFQDN";
    export * from "validator/lib/isFloat";
    export * from "validator/lib/isFullWidth";
    export * from "validator/lib/isHalfWidth";
    export * from "validator/lib/isHexColor";
    export * from "validator/lib/isHexadecimal";
    export * from "validator/lib/isIP";
    export * from "validator/lib/isISBN";
    export * from "validator/lib/isISIN";
    export * from "validator/lib/isISO8601";
    export * from "validator/lib/isIn";
    export * from "validator/lib/isInt";
    export * from "validator/lib/isJSON";
    export * from "validator/lib/isLength";
    export * from "validator/lib/isLowercase";
    export * from "validator/lib/isMACAddress";
    export * from "validator/lib/isMD5";
    export * from "validator/lib/isMobilePhone";
    export * from "validator/lib/isMongoId";
    export * from "validator/lib/isMultibyte";
    export * from "validator/lib/isNull";
    export * from "validator/lib/isNumeric";
    export * from "validator/lib/isSurrogatePair";
    export * from "validator/lib/isURL";
    export * from "validator/lib/isUUID";
    export * from "validator/lib/isUppercase";
    export * from "validator/lib/isVariableWidth";
    export * from "validator/lib/isWhitelisted";
    export * from "validator/lib/matches";

    ///////////////////////////////////////
    /// export function form Sanitizers ///
    ///////////////////////////////////////
    export * from "validator/lib/blacklist";
    export * from "validator/lib/escape";
    export * from "validator/lib/ltrim";
    export * from "validator/lib/normalizeEmail";
    export * from "validator/lib/rtrim";
    export * from "validator/lib/stripLow";
    export * from "validator/lib/toBoolean";
    export * from "validator/lib/toDate";
    export * from "validator/lib/toFloat";
    export * from "validator/lib/toInt";
    export * from "validator/lib/trim";
    export * from "validator/lib/unescape";
    export * from "validator/lib/whitelist";
}


////////////////
// validators //
////////////////
declare module "validator/lib/contains" {
    export const contains: ValidatorJS.Validators.contains;
    export default contains;
}

declare module "validator/lib/equals" {
    export const equals: ValidatorJS.Validators.equals;
    export default equals;
}

declare module "validator/lib/isAfter" {
    export const isAfter: ValidatorJS.Validators.isAfter;
    export default isAfter;
}

declare module "validator/lib/isAlpha" {
    export const isAlpha: ValidatorJS.Validators.isAlpha;
    export default isAlpha;
}

declare module "validator/lib/isAlphanumeric" {
    export const isAlphanumeric: ValidatorJS.Validators.isAlphanumeric;
    export default isAlphanumeric;
}

declare module "validator/lib/isAscii" {
    export const isAscii: ValidatorJS.Validators.isAscii;
    export default isAscii;
}

declare module "validator/lib/isBase64" {
    export const isBase64: ValidatorJS.Validators.isBase64;
    export default isBase64;
}

declare module "validator/lib/isBefore" {
    export const isBefore: ValidatorJS.Validators.isBefore;
    export default isBefore;
}

declare module "validator/lib/isBoolean" {
    export const isBoolean: ValidatorJS.Validators.isBoolean;
    export default isBoolean;
}

declare module "validator/lib/isByteLength" {
    export const isByteLength: ValidatorJS.Validators.isByteLength;
    export default isByteLength;
}

declare module "validator/lib/isCreditCard" {
    export const isCreditCard: ValidatorJS.Validators.isCreditCard;
    export default isCreditCard;
}

declare module "validator/lib/isCurrency" {
    export const isCurrency: ValidatorJS.Validators.isCurrency;
    export default isCurrency;
}

declare module "validator/lib/isDataURI" {
    export const isDataURI: ValidatorJS.Validators.isDataURI;
    export default isDataURI;
}

declare module "validator/lib/isDate" {
    export const isDate: ValidatorJS.Validators.isDate;
    export default isDate;
}

declare module "validator/lib/isDecimal" {
    export const isDecimal: ValidatorJS.Validators.isDecimal;
    export default isDecimal;
}

declare module "validator/lib/isDivisibleBy" {
    export const isDivisibleBy: ValidatorJS.Validators.isDivisibleBy;
    export default isDivisibleBy;
}

declare module "validator/lib/isEmail" {
    export const isEmail: ValidatorJS.Validators.isEmail;
    export default isEmail;
}

declare module "validator/lib/isFQDN" {
    export const isFQDN: ValidatorJS.Validators.isFQDN;
    export default isFQDN;
}

declare module "validator/lib/isFloat" {
    export const isFloat: ValidatorJS.Validators.isFloat;
    export default isFloat;
}

declare module "validator/lib/isFullWidth" {
    export const isFullWidth: ValidatorJS.Validators.isFullWidth;
    export default isFullWidth;
}

declare module "validator/lib/isHalfWidth" {
    export const isHalfWidth: ValidatorJS.Validators.isHalfWidth;
    export default isHalfWidth;
}

declare module "validator/lib/isHexColor" {
    export const isHexColor: ValidatorJS.Validators.isHexColor;
    export default isHexColor;
}

declare module "validator/lib/isHexadecimal" {
    export const isHexadecimal: ValidatorJS.Validators.isHexadecimal;
    export default isHexadecimal;
}

declare module "validator/lib/isIP" {
    export const isIP: ValidatorJS.Validators.isIP;
    export default isIP;
}

declare module "validator/lib/isISBN" {
    export const isISBN: ValidatorJS.Validators.isISBN;
    export default isISBN;
}

declare module "validator/lib/isISIN" {
    export const isISIN: ValidatorJS.Validators.isISIN;
    export default isISIN;
}

declare module "validator/lib/isISO8601" {
    export const isISO8601: ValidatorJS.Validators.isISO8601;
    export default isISO8601;
}

declare module "validator/lib/isIn" {
    export const isIn: ValidatorJS.Validators.isIn;
    export default isIn;
}

declare module "validator/lib/isInt" {
    export const isInt: ValidatorJS.Validators.isInt;
    export default isInt;
}

declare module "validator/lib/isJSON" {
    export const isJSON: ValidatorJS.Validators.isJSON;
    export default isJSON;
}

declare module "validator/lib/isLength" {
    export const isLength: ValidatorJS.Validators.isLength;
    export default isLength;
}

declare module "validator/lib/isLowercase" {
    export const isLowercase: ValidatorJS.Validators.isLowercase;
    export default isLowercase;
}

declare module "validator/lib/isMACAddress" {
    export const isMACAddress: ValidatorJS.Validators.isMACAddress;
    export default isMACAddress;
}

declare module "validator/lib/isMD5" {
    export const isMD5: ValidatorJS.Validators.isMD5;
    export default isMD5;
}

declare module "validator/lib/isMobilePhone" {
    export const isMobilePhone: ValidatorJS.Validators.isMobilePhone;
    export default isMobilePhone;
}

declare module "validator/lib/isMongoId" {
    export const isMongoId: ValidatorJS.Validators.isMongoId;
    export default isMongoId;
}

declare module "validator/lib/isMultibyte" {
    export const isMultibyte: ValidatorJS.Validators.isMultibyte;
    export default isMultibyte;
}

declare module "validator/lib/isNull" {
    export const isNull: ValidatorJS.Validators.isNull;
    export default isNull;
}

declare module "validator/lib/isNumeric" {
    export const isNumeric: ValidatorJS.Validators.isNumeric;
    export default isNumeric;
}

declare module "validator/lib/isSurrogatePair" {
    export const isSurrogatePair: ValidatorJS.Validators.isSurrogatePair;
    export default isSurrogatePair;
}

declare module "validator/lib/isURL" {
    export const isURL: ValidatorJS.Validators.isURL;
    export default isURL;
}

declare module "validator/lib/isUUID" {
    export const isUUID: ValidatorJS.Validators.isUUID;
    export default isUUID;
}

declare module "validator/lib/isUppercase" {
    export const isUppercase: ValidatorJS.Validators.isUppercase;
    export default isUppercase;
}

declare module "validator/lib/isVariableWidth" {
    export const isVariableWidth: ValidatorJS.Validators.isVariableWidth;
    export default isVariableWidth;
}

declare module "validator/lib/isWhitelisted" {
    export const isWhitelisted: ValidatorJS.Validators.isWhitelisted;
    export default isWhitelisted;
}

declare module "validator/lib/matches" {
    export const matches: ValidatorJS.Validators.matches;
    export default matches;
}

////////////////
// Sanitizers //
////////////////
declare module "validator/lib/blacklist" {
    export const blacklist: ValidatorJS.Sanitizers.blacklist;
    export default blacklist;
}

declare module "validator/lib/escape" {
    export const escape: ValidatorJS.Sanitizers.escape;
    export default escape;
}

declare module "validator/lib/unescape" {
    export const unescape: ValidatorJS.Sanitizers.unescape;
    export default unescape;
}


declare module "validator/lib/ltrim" {
    export const ltrim: ValidatorJS.Sanitizers.ltrim;
    export default ltrim;
}

declare module "validator/lib/normalizeEmail" {
    export const normalizeEmail: ValidatorJS.Sanitizers.normalizeEmail;
    export default normalizeEmail;
}

declare module "validator/lib/rtrim" {
    export const rtrim: ValidatorJS.Sanitizers.rtrim;
    export default rtrim;
}

declare module "validator/lib/stripLow" {
    export const stripLow: ValidatorJS.Sanitizers.stripLow;
    export default stripLow;
}

declare module "validator/lib/toBoolean" {
    export const toBoolean: ValidatorJS.Sanitizers.toBoolean;
    export default toBoolean;
}

declare module "validator/lib/toDate" {
    export const toDate: ValidatorJS.Sanitizers.toDate;
    export default toDate;
}

declare module "validator/lib/toFloat" {
    export const toFloat: ValidatorJS.Sanitizers.toFloat;
    export default toFloat;
}

declare module "validator/lib/toInt" {
    export const toInt: ValidatorJS.Sanitizers.toInt;
    export default toInt;
}

declare module "validator/lib/trim" {
    export const trim: ValidatorJS.Sanitizers.trim;
    export default trim;
}

declare module "validator/lib/whitelist" {
    export const whitelist: ValidatorJS.Sanitizers.whitelist;
    export default whitelist;
}
