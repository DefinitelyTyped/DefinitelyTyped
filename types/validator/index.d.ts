// Type definitions for validator.js v9.4
// Project: https://github.com/chriso/validator.js
// Definitions by: tgfjt <https://github.com/tgfjt>
//                 Ilya Mochalov <https://github.com/chrootsu>
//                 Ayman Nedjmeddine <https://github.com/IOAyman>
//                 Louy Alakkad <https://github.com/louy>
//                 Kacper Polak <https://github.com/kacepe>
//                 Bonggyun Lee <https://github.com/deptno>
//                 Naoto Yokoyama <https://github.com/builtinnya>
//                 Philipp Katz <https://github.com/qqilihq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ValidatorJS {
    type AlphaLocale =
        | "ar"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LB"
        | "ar-LY"
        | "ar-MA"
        | "ar-QA"
        | "ar-QM"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "ar-YE"
        | "bg-BG"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "el-GR"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-NZ"
        | "en-US"
        | "en-ZA"
        | "en-ZM"
        | "es-ES"
        | "fr-FR"
        | "hu-HU"
        | "it-IT"
        | "nb-NO"
        | "nl-NL"
        | "nn-NO"
        | "pl-PL"
        | "pt-BR"
        | "pt-PT"
        | "ru-RU"
        | "sk-SK"
        | "sr-RS"
        | "sr-RS@latin"
        | "sv-SE"
        | "tr-TR"
        | "uk-UA";
    type AlphanumericLocale =
        | "ar"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LB"
        | "ar-LY"
        | "ar-MA"
        | "ar-QA"
        | "ar-QM"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "ar-YE"
        | "bg-BG"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "el-GR"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-NZ"
        | "en-US"
        | "en-ZA"
        | "en-ZM"
        | "es-ES"
        | "fr-FR"
        | "hu-HU"
        | "it-IT"
        | "nb-NO"
        | "nl-NL"
        | "nn-NO"
        | "pl-PL"
        | "pt-BR"
        | "pt-PT"
        | "ru-RU"
        | "sk-SK"
        | "sr-RS"
        | "sr-RS@latin"
        | "sv-SE"
        | "tr-TR"
        | "uk-UA";
    type DecimalLocale =
        | "ar"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LB"
        | "ar-LY"
        | "ar-MA"
        | "ar-QA"
        | "ar-QM"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "ar-YE"
        | "bg-BG"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-NZ"
        | "en-US"
        | "en-ZA"
        | "en-ZM"
        | "es-ES"
        | "fr-FR"
        | "hu-HU"
        | "it-IT"
        | "nb-NO"
        | "nl-NL"
        | "nn-NO"
        | "pl-PL"
        | "pt-BR"
        | "pt-PT"
        | "ru-RU"
        | "sr-RS"
        | "sr-RS@latin"
        | "sv-SE"
        | "tr-TR"
        | "uk-UA";
    type FloatLocale =
        | "ar"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LB"
        | "ar-LY"
        | "ar-MA"
        | "ar-QA"
        | "ar-QM"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "ar-YE"
        | "bg-BG"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-NZ"
        | "en-US"
        | "en-ZA"
        | "en-ZM"
        | "es-ES"
        | "fr-FR"
        | "hu-HU"
        | "it-IT"
        | "nb-NO"
        | "nl-NL"
        | "nn-NO"
        | "pl-PL"
        | "pt-BR"
        | "pt-PT"
        | "ru-RU"
        | "sr-RS"
        | "sr-RS@latin"
        | "sv-SE"
        | "tr-TR"
        | "uk-UA";
    type MobilePhoneLocale =
        | "ar-AE"
        | "ar-DZ"
        | "ar-EG"
        | "ar-JO"
        | "ar-SA"
        | "ar-SY"
        | "be-BY"
        | "bg-BG"
        | "cs-CZ"
        | "de-DE"
        | "da-DK"
        | "el-GR"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-KE"
        | "en-NG"
        | "en-NZ"
        | "en-UG"
        | "en-RW"
        | "en-SG"
        | "en-TZ"
        | "en-PK"
        | "en-US"
        | "en-CA"
        | "en-ZA"
        | "en-ZM"
        | "es-ES"
        | "fa-IR"
        | "fi-FI"
        | "fo-FO"
        | "fr-FR"
        | "he-IL"
        | "hu-HU"
        | "id-ID"
        | "it-IT"
        | "ja-JP"
        | "kk-KZ"
        | "kl-GL"
        | "ko-KR"
        | "lt-LT"
        | "ms-MY"
        | "nb-NO"
        | "nn-NO"
        | "pl-PL"
        | "pt-PT"
        | "ro-RO"
        | "ru-RU"
        | "sk-SK"
        | "sr-RS"
        | "th-TH"
        | "tr-TR"
        | "uk-UA"
        | "vi-VN"
        | "zh-CN"
        | "zh-HK"
        | "zh-TW"
        | "any";
    type PostalCodeLocale =
        | "AT"
        | "AU"
        | "BE"
        | "BG"
        | "CA"
        | "CH"
        | "CZ"
        | "DE"
        | "DK"
        | "DZ"
        | "ES"
        | "FI"
        | "FR"
        | "GB"
        | "GR"
        | "IL"
        | "IN"
        | "IS"
        | "IT"
        | "JP"
        | "KE"
        | "LI"
        | "MX"
        | "NL"
        | "NO"
        | "PL"
        | "PT"
        | "RO"
        | "RU"
        | "SA"
        | "SE"
        | "TW"
        | "US"
        | "ZA"
        | "ZM"
        | "any";
    type HashAlgorithm =
        | "md4"
        | "md5"
        | "sha1"
        | "sha256"
        | "sha384"
        | "sha512"
        | "ripemd128"
        | "ripemd160"
        | "tiger128"
        | "tiger160"
        | "tiger192"
        | "crc32"
        | "crc32b";

    // **************
    // * Validators *
    // **************

    // check if the string contains the seed.
    function contains(str: string, elem: any): boolean;

    // check if the string matches the comparison.
    function equals(str: string, comparison: string): boolean;

    // check if the string is a date that's after the specified date (defaults to now).
    function isAfter(str: string, date?: string): boolean;

    // check if the string contains only letters (a-zA-Z). Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
    // 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE',
    // 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM',
    // 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sk-SK', 'sr-RS',
    // 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']) and defaults to en-US
    function isAlpha(str: string, locale?: AlphaLocale): boolean;

    // check if the string contains only letters and numbers. Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
    // 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE',
    // 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM',
    // 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sk-SK', 'sr-RS',
    // 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']) and defaults to en-US
    function isAlphanumeric(str: string, locale?: AlphanumericLocale): boolean;

    // check if the string contains ASCII chars only.
    function isAscii(str: string): boolean;

    // check if a string is base64 encoded.
    function isBase64(str: string): boolean;

    // check if the string is a date that's before the specified date.
    function isBefore(str: string, date?: string): boolean;

    // check if a string is a boolean.
    function isBoolean(str: string): boolean;

    // check if the string's length (in bytes) falls in a range.
    function isByteLength(str: string, options: IsByteLengthOptions): boolean;
    function isByteLength(str: string, min: number, max?: number): boolean;

    // check if the string is a credit card.
    function isCreditCard(str: string): boolean;

    // check if the string is a valid currency amount.
    function isCurrency(str: string, options?: IsCurrencyOptions): boolean;

    // check if the string is a data uri format (https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs)
    function isDataURI(str: string): boolean;

    // check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.
    function isDecimal(str: string, options?: IsDecimalOptions): boolean;

    // check if the string is a number that's divisible by another.
    function isDivisibleBy(str: string, number: number): boolean;

    // check if the string is an email.
    function isEmail(str: string, options?: IsEmailOptions): boolean;

    // check if the string has a length of zero.
    function isEmpty(str: string): boolean;

    // check if the string is a fully qualified domain name (e.g. domain.com).
    function isFQDN(str: string, options?: IsFQDNOptions): boolean;

    // check if the string is a float.
    function isFloat(str: string, options?: IsFloatOptions): boolean;

    // check if the string contains any full-width chars.
    function isFullWidth(str: string): boolean;

    // check if the string contains any half-width chars.
    function isHalfWidth(str: string): boolean;

    // check if the string is a hash of type algorithm.
    // Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128',
    // 'tiger160', 'tiger192', 'crc32', 'crc32b']
    function isHash(str: string, algorithm: HashAlgorithm): boolean;

    // check if the string is a hexadecimal color.
    function isHexColor(str: string): boolean;

    // check if the string is a hexadecimal number.
    function isHexadecimal(str: string): boolean;

    // check if the string is an IP (version 4 or 6).
    function isIP(str: string, version?: number): boolean;

    // check if the string is an ISBN (version 10 or 13).
    function isISBN(str: string, version?: number): boolean;

    // check if the string is an ISSN (https://en.wikipedia.org/wiki/International_Standard_Serial_Number).
    function isISSN(str: string, options?: IsISSNOptions): boolean;

    // check if the string is an ISIN (https://en.wikipedia.org/wiki/International_Securities_Identification_Number)
    // (stock/security identifier).
    function isISIN(str: string): boolean;

    // check if the string is a valid ISO 8601 (https://en.wikipedia.org/wiki/ISO_8601) date.
    function isISO8601(str: string): boolean;

    // check if the string is a valid ISO 3166-1 alpha-2 (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned
    // country code.
    function isISO31661Alpha2(str: string): boolean;

    // check if the string is a ISRC (https://en.wikipedia.org/wiki/International_Standard_Recording_Code).
    function isISRC(str: string): boolean;

    // check if the string is in a array of allowed values.
    function isIn(str: string, values: any[]): boolean;

    // check if the string is an integer.
    function isInt(str: string, options?: IsIntOptions): boolean;

    // check if the string is valid JSON (note: uses JSON.parse).
    function isJSON(str: string): boolean;

    // check if the string is a valid latitude-longitude coordinate in the format lat,long or lat, long.
    function isLatLong(str: string): boolean;

    // check if the string's length falls in a range.
    // Note: this function takes into account surrogate pairs.
    function isLength(str: string, options: IsLengthOptions): boolean;
    function isLength(str: string, min: number, max?: number): boolean;

    // check if the string is lowercase.
    function isLowercase(str: string): boolean;

    // check if the string is a MAC address.
    function isMACAddress(str: string): boolean;

    // check if the string is a MD5 hash.
    function isMD5(str: string): boolean;

    // check if the string matches to a valid MIME type (https://en.wikipedia.org/wiki/Media_type) format
    function isMimeType(str: string): boolean;

    // check if the string is a mobile phone number, (locale is one of
    // ['ar-AE', ar-DZ', 'ar-EG', 'ar-JO', 'ar-SA', 'ar-SY', 'be-BY', 'bg-BG', 'cs-CZ', 'de-DE',
    // 'da-DK', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-KE', 'en-NG', 'en-NZ', 'en-UG',
    // 'en-RW', 'en-SG', 'en-TZ', 'en-PK', 'en-US', 'en-CA', 'en-ZA', 'en-ZM', 'es-ES', 'fa-IR',
    // 'fi-FI', 'fo-FO', 'fr-FR', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kk-KZ', 'kl-GL',
    // 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'nn-NO', 'pl-PL', 'pt-PT', 'ro-RO', 'ru-RU', 'sk-SK',
    // 'sr-RS', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-TW']).
    function isMobilePhone(
        str: string,
        locale: MobilePhoneLocale,
        options?: IsMobilePhoneOptions
    ): boolean;

    // check if the string is a valid hex-encoded representation of a MongoDB ObjectId
    // (http://docs.mongodb.org/manual/reference/object-id/).
    function isMongoId(str: string): boolean;

    // check if the string contains one or more multibyte chars.
    function isMultibyte(str: string): boolean;

    // check if the string contains only numbers.
    function isNumeric(str: string, options?: IsNumericOptions): boolean;

    // check if the string is a valid port number.
    function isPort(str: string): boolean;

    // check if the string is a postal code, (locale is one of
    // [ 'AT', 'AU', 'BE', 'BG', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'ES', 'FI', 'FR', 'GB', 'GR',
    // 'IL', 'IN', 'IS', 'IT', 'JP', 'KE', 'LI', 'MX', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'SA',
    // 'SE', 'TW', 'US', 'ZA', 'ZM' ]) OR 'any'. If 'any' is used, function will check if any of the
    // locales match).
    function isPostalCode(str: string, locale: PostalCodeLocale): boolean;

    // check if the string contains any surrogate pairs chars.
    function isSurrogatePair(str: string): boolean;

    // check if the string is an URL.
    function isURL(str: string, options?: IsURLOptions): boolean;

    // check if the string is a UUID. Must be one of ['3', '4', '5', 'all'], default is all.
    function isUUID(str: string, version?: 3 | 4 | 5 | "3" | "4" | "5" | "all"): boolean;

    // check if the string is uppercase.
    function isUppercase(str: string): boolean;

    // check if the string contains a mixture of full and half-width chars.
    function isVariableWidth(str: string): boolean;

    // checks characters if they appear in the whitelist.
    function isWhitelisted(str: string, chars: string | string[]): boolean;

    // check if string matches the pattern.
    function matches(str: string, pattern: RegExp | string, modifiers?: string): boolean;

    // **************
    // * Sanitizers *
    // **************

    // remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need
    // to escape some chars, e.g. blacklist(input, '\\[\\]').
    function blacklist(input: string, chars: string): string;

    // replace <, >, &, ', " and / with HTML entities.
    function escape(input: string): string;

    // replaces HTML encoded entities with <, >, &, ', " and /.
    function unescape(input: string): string;

    // trim characters from the left-side of the input.
    function ltrim(input: string, chars?: string): string;

    // canonicalize an email address.
    function normalizeEmail(email: string, options?: NormalizeEmailOptions): string | false;

    // trim characters from the right-side of the input.
    function rtrim(input: string, chars?: string): string;

    // remove characters with a numerical value < 32 and 127, mostly control characters. If keep_new_lines is true,
    // newline characters are preserved (\n and \r, hex 0xA and 0xD). Unicode-safe in JavaScript.
    function stripLow(input: string, keep_new_lines?: boolean): string;

    // convert the input to a boolean. Everything except for '0', 'false' and '' returns true. In strict mode only '1'
    // and 'true' return true.
    function toBoolean(input: string, strict?: boolean): boolean;

    // convert the input to a date, or null if the input is not a date.
    function toDate(input: string): Date; // Date or null

    // convert the input to a float, or NaN if the input is not a float.
    function toFloat(input: string): number; // number or NaN

    // convert the input to an integer, or NaN if the input is not an integer.
    function toInt(input: string, radix?: number): number; // number or NaN

    // trim characters (whitespace by default) from both sides of the input.
    function trim(input: string, chars?: string): string;

    // remove characters that do not appear in the whitelist. The characters are used in a RegExp and so you will
    // need to escape some chars, e.g. whitelist(input, '\\[\\]').
    function whitelist(input: string, chars: string): string;

    function toString(input: any | any[]): string;

    const version: string;

    // **************
    // * Extensions *
    // **************

    // add your own validators.
    // Note: that the first argument will be automatically coerced to a string.
    function extend<T extends Function>(name: string, fn: T): void;

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
        allow_decimal?: boolean;
        require_decimal?: boolean;
        digits_after_decimal?: number[];
        allow_space_after_digits?: boolean;
    }

    // options for isDecimal
    interface IsDecimalOptions {
        force_decimal?: boolean;
        decimal_digits?: string;
        locale?: DecimalLocale;
    }

    // options for isEmail
    interface IsEmailOptions {
        allow_display_name?: boolean;
        require_display_name?: boolean;
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
        gt?: number;
        lt?: number;
        locale?: FloatLocale;
    }

    // options for isISSN
    interface IsISSNOptions {
        case_sensitive?: boolean;
        require_hyphen?: boolean;
    }

    // options for IsInt
    interface IsIntOptions {
        min?: number;
        max?: number;
        allow_leading_zeroes?: boolean;
        lt?: number;
        gt?: number;
    }

    // options for IsLength
    interface IsLengthOptions {
        min?: number;
        max?: number;
    }

    // options for isMobilePhone
    interface IsMobilePhoneOptions {
        strictMode?: boolean;
    }

    // options for isURL
    interface IsURLOptions {
        protocols?: string[];
        require_tld?: boolean;
        require_protocol?: boolean;
        require_host?: boolean;
        require_valid_protocol?: boolean;
        allow_underscores?: boolean;
        host_whitelist?: (string | RegExp)[];
        host_blacklist?: (string | RegExp)[];
        allow_trailing_dot?: boolean;
        allow_protocol_relative_urls?: boolean;
    }

    // options for normalizeEmail
    interface NormalizeEmailOptions {
        all_lowercase?: boolean;
        gmail_lowercase?: boolean;
        gmail_remove_dots?: boolean;
        gmail_remove_subaddress?: boolean;
        gmail_convert_googlemaildotcom?: boolean;
        outlookdotcom_lowercase?: boolean;
        outlookdotcom_remove_subaddress?: boolean;
        yahoo_lowercase?: boolean;
        yahoo_remove_subaddress?: boolean;
        icloud_lowercase?: boolean;
        icloud_remove_subaddress?: boolean;
    }

    /**
     * Options for isNumeric
     */
    interface IsNumericOptions {
        no_symbols?: boolean;
    }
}

/**
 * MODULES
 */

declare module "validator" {
    export = ValidatorJS;
}

declare module "validator/lib/blacklist" {
    export = ValidatorJS.blacklist;
}

declare module "validator/lib/contains" {
    export = ValidatorJS.contains;
}

declare module "validator/lib/equals" {
    export = ValidatorJS.equals;
}

declare module "validator/lib/escape" {
    export = ValidatorJS.escape;
}

declare module "validator/lib/isAfter" {
    export = ValidatorJS.isAfter;
}

declare module "validator/lib/isAlpha" {
    export = ValidatorJS.isAlpha;
}

declare module "validator/lib/isAlphanumeric" {
    export = ValidatorJS.isAlphanumeric;
}

declare module "validator/lib/isAscii" {
    export = ValidatorJS.isAscii;
}

declare module "validator/lib/isBase64" {
    export = ValidatorJS.isBase64;
}

declare module "validator/lib/isBefore" {
    export = ValidatorJS.isBefore;
}

declare module "validator/lib/isBoolean" {
    export = ValidatorJS.isBoolean;
}

declare module "validator/lib/isByteLength" {
    export = ValidatorJS.isByteLength;
}

declare module "validator/lib/isCreditCard" {
    export = ValidatorJS.isCreditCard;
}

declare module "validator/lib/isCurrency" {
    export = ValidatorJS.isCurrency;
}

declare module "validator/lib/isDataURI" {
    export = ValidatorJS.isDataURI;
}

declare module "validator/lib/isDecimal" {
    export = ValidatorJS.isDecimal;
}

declare module "validator/lib/isDivisibleBy" {
    export = ValidatorJS.isDivisibleBy;
}

declare module "validator/lib/isEmail" {
    export = ValidatorJS.isEmail;
}

declare module "validator/lib/isEmpty" {
    export = ValidatorJS.isEmpty;
}

declare module "validator/lib/isFQDN" {
    export = ValidatorJS.isFQDN;
}

declare module "validator/lib/isFloat" {
    export = ValidatorJS.isFloat;
}

declare module "validator/lib/isFullWidth" {
    export = ValidatorJS.isFullWidth;
}

declare module "validator/lib/isHalfWidth" {
    export = ValidatorJS.isHalfWidth;
}

declare module "validator/lib/isHash" {
    export = ValidatorJS.isHash;
}

declare module "validator/lib/isHexColor" {
    export = ValidatorJS.isHexColor;
}

declare module "validator/lib/isHexadecimal" {
    export = ValidatorJS.isHexadecimal;
}

declare module "validator/lib/isIP" {
    export = ValidatorJS.isIP;
}

declare module "validator/lib/isISBN" {
    export = ValidatorJS.isISBN;
}

declare module "validator/lib/isISSN" {
    export = ValidatorJS.isISSN;
}

declare module "validator/lib/isISIN" {
    export = ValidatorJS.isISIN;
}

declare module "validator/lib/isISO8601" {
    export = ValidatorJS.isISO8601;
}

declare module "validator/lib/isISO31661Alpha2" {
    export = ValidatorJS.isISO31661Alpha2;
}

declare module "validator/lib/isISRC" {
    export = ValidatorJS.isISRC;
}

declare module "validator/lib/isIn" {
    export = ValidatorJS.isIn;
}

declare module "validator/lib/isInt" {
    export = ValidatorJS.isInt;
}

declare module "validator/lib/isJSON" {
    export = ValidatorJS.isJSON;
}

declare module "validator/lib/isLatLong" {
    export = ValidatorJS.isLatLong;
}

declare module "validator/lib/isLength" {
    export = ValidatorJS.isLength;
}

declare module "validator/lib/isLowercase" {
    export = ValidatorJS.isLowercase;
}

declare module "validator/lib/isMACAddress" {
    export = ValidatorJS.isMACAddress;
}

declare module "validator/lib/isMD5" {
    export = ValidatorJS.isMD5;
}

declare module "validator/lib/isMimeType" {
    export = ValidatorJS.isMimeType;
}

declare module "validator/lib/isMobilePhone" {
    export = ValidatorJS.isMobilePhone;
}

declare module "validator/lib/isPostalCode" {
    export = ValidatorJS.isPostalCode;
}

declare module "validator/lib/isMongoId" {
    export = ValidatorJS.isMongoId;
}

declare module "validator/lib/isMultibyte" {
    export = ValidatorJS.isMultibyte;
}

declare module "validator/lib/isNumeric" {
    export = ValidatorJS.isNumeric;
}

declare module "validator/lib/isPort" {
    export = ValidatorJS.isPort;
}

declare module "validator/lib/isSurrogatePair" {
    export = ValidatorJS.isSurrogatePair;
}

declare module "validator/lib/isURL" {
    export = ValidatorJS.isURL;
}

declare module "validator/lib/isUUID" {
    export = ValidatorJS.isUUID;
}

declare module "validator/lib/isUppercase" {
    export = ValidatorJS.isUppercase;
}

declare module "validator/lib/isVariableWidth" {
    export = ValidatorJS.isVariableWidth;
}

declare module "validator/lib/isWhitelisted" {
    export = ValidatorJS.isWhitelisted;
}

declare module "validator/lib/ltrim" {
    export = ValidatorJS.ltrim;
}

declare module "validator/lib/matches" {
    export = ValidatorJS.matches;
}

declare module "validator/lib/normalizeEmail" {
    export = ValidatorJS.normalizeEmail;
}

declare module "validator/lib/rtrim" {
    export = ValidatorJS.rtrim;
}

declare module "validator/lib/stripLow" {
    export = ValidatorJS.stripLow;
}

declare module "validator/lib/toBoolean" {
    export = ValidatorJS.toBoolean;
}

declare module "validator/lib/toDate" {
    export = ValidatorJS.toDate;
}

declare module "validator/lib/toFloat" {
    export = ValidatorJS.toFloat;
}

declare module "validator/lib/toInt" {
    export = ValidatorJS.toInt;
}

declare module "validator/lib/trim" {
    export = ValidatorJS.trim;
}

declare module "validator/lib/unescape" {
    export = ValidatorJS.unescape;
}

declare module "validator/lib/whitelist" {
    export = ValidatorJS.whitelist;
}
