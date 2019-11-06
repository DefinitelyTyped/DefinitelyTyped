// Type definitions for validator.js 12.0
// Project: https://github.com/validatorjs/validator.js
// Definitions by: tgfjt <https://github.com/tgfjt>
//                 Ilya Mochalov <https://github.com/chrootsu>
//                 Ayman Nedjmeddine <https://github.com/IOAyman>
//                 Louy Alakkad <https://github.com/louy>
//                 Kacper Polak <https://github.com/kacepe>
//                 Bonggyun Lee <https://github.com/deptno>
//                 Naoto Yokoyama <https://github.com/builtinnya>
//                 Philipp Katz <https://github.com/qqilihq>
//                 Jace Warren <https://github.com/keatz55>
//                 Munif Tanjim <https://github.com/MunifTanjim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export const version: string;

/******************
 *** Validators ***
 ******************/

/**
 * Check if the string contains the seed.
 *
 * @param seed - Seed
 */
export function contains(str: string, seed: any): boolean;

/**
 * Check if the string matches the comparison.
 *
 * @param comparison - String to compare
 */
export function equals(str: string, comparison: string): boolean;

/**
 * Check if the string is a date that's after the specified date.
 *
 * @param [date] - Date string (defaults to now)
 */
export function isAfter(str: string, date?: string): boolean;

export type AlphaLocale =
    | 'en-US'
    | 'bg-BG'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'el-GR'
    | 'es-ES'
    | 'fr-FR'
    | 'it-IT'
    | 'nb-NO'
    | 'nl-NL'
    | 'nn-NO'
    | 'hu-HU'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'sl-SI'
    | 'sk-SK'
    | 'sr-RS@latin'
    | 'sr-RS'
    | 'sv-SE'
    | 'tr-TR'
    | 'uk-UA'
    | 'ku-IQ'
    | 'ar'
    | 'he'
    | 'fa-IR'
    | 'en-AU'
    | 'en-GB'
    | 'en-HK'
    | 'en-IN'
    | 'en-NZ'
    | 'en-ZA'
    | 'en-ZM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-QM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'pt-BR'
    | 'pl-Pl';

export const isAlphaLocales: AlphaLocale[];

/**
 * Check if the string contains only letters (a-zA-Z).
 *
 * @param [locale] - AlphaLocale
 */
export function isAlpha(str: string, locale?: AlphaLocale): boolean;

export type AlphanumericLocale =
    | 'en-US'
    | 'bg-BG'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'el-GR'
    | 'es-ES'
    | 'fr-FR'
    | 'it-IT'
    | 'hu-HU'
    | 'nb-NO'
    | 'nl-NL'
    | 'nn-NO'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'sl-SI'
    | 'sk-SK'
    | 'sr-RS@latin'
    | 'sr-RS'
    | 'sv-SE'
    | 'tr-TR'
    | 'uk-UA'
    | 'ku-IQ'
    | 'ar'
    | 'he'
    | 'fa-IR'
    | 'en-AU'
    | 'en-GB'
    | 'en-HK'
    | 'en-IN'
    | 'en-NZ'
    | 'en-ZA'
    | 'en-ZM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-QM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'pt-BR'
    | 'pl-Pl';

export const isAlphanumericLocales: AlphanumericLocale[];

/**
 * Check if the string contains only letters and numbers.
 *
 * @param [locale] - AlphanumericLocale
 */
export function isAlphanumeric(str: string, locale?: AlphanumericLocale): boolean;

/**
 * Check if the string contains ASCII chars only.
 */
export function isAscii(str: string): boolean;

/**
 * Check if a string is base32 encoded.
 */
export function isBase32(str: string): boolean;

/**
 * Check if a string is base64 encoded.
 */
export function isBase64(str: string): boolean;

/**
 * Check if the string is a date that's before the specified date.
 *
 * @param [date] - Date string (defaults to now)
 */
export function isBefore(str: string, date?: string): boolean;

/**
 * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
 */
export function isBIC(str: string): boolean;

/**
 * check if a string is a boolean.
 */
export function isBoolean(str: string): boolean;

export interface IsByteLengthOptions {
    /**
     * @default 0
     */
    min?: number;
    /**
     * @default undefined
     */
    max?: number;
}

/**
 * Check if the string's length (in UTF-8 bytes) falls in a range.
 *
 * @param [options] - Options
 */
export function isByteLength(str: string, options?: IsByteLengthOptions): boolean;

/**
 * Check if the string is a credit card.
 */
export function isCreditCard(str: string): boolean;

export interface IsCurrencyOptions {
    /**
     * @default '$'
     */
    symbol?: string;
    /**
     * @default false
     */
    require_symbol?: boolean;
    /**
     * @default false
     */
    allow_space_after_symbol?: boolean;
    /**
     * @default false
     */
    symbol_after_digits?: boolean;
    /**
     * @default true
     */
    allow_negatives?: boolean;
    /**
     * @default false
     */
    parens_for_negatives?: boolean;
    /**
     * @default false
     */
    negative_sign_before_digits?: boolean;
    /**
     * @default false
     */
    negative_sign_after_digits?: boolean;
    /**
     * @default false
     */
    allow_negative_sign_placeholder?: boolean;
    /**
     * @default ','
     */
    thousands_separator?: string;
    /**
     * @default '.'
     */
    decimal_separator?: string;
    /**
     * @default true
     */
    allow_decimal?: boolean;
    /**
     * @default false
     */
    require_decimal?: boolean;
    /**
     * The array `digits_after_decimal` is filled with the exact number of digits allowed not a range, for example a range `1` to `3` will be given as `[1, 2, 3]`.
     *
     * @default [2]
     */
    digits_after_decimal?: number[];
    /**
     * @default false
     */
    allow_space_after_digits?: boolean;
}

/**
 * Check if the string is a valid currency amount.
 *
 * @param [options] - Options
 */
export function isCurrency(str: string, options?: IsCurrencyOptions): boolean;

/**
 * Check if the string is a [data uri format](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs).
 */
export function isDataURI(str: string): boolean;

export type DecimalLocale = FloatLocale;

export interface IsDecimalOptions {
    /**
     * @default false
     */
    force_decimal?: boolean;
    /**
     * `decimal_digits` is given as a range like `'1,3'`,
     * a specific value like `'3'` or min like `'1,'`
     *
     * @default '1,'
     */
    decimal_digits?: string;
    /**
     * DecimalLocale
     *
     * @default 'en-US'
     */
    locale?: DecimalLocale;
}

/**
 * Check if the string represents a decimal number,
 * such as `0.1`, `.3`, `1.1`, `1.00003`, `4.0` etc.
 *
 * @param [options] - Options
 */
export function isDecimal(str: string, options?: IsDecimalOptions): boolean;

/**
 * Check if the string is a number that's divisible by another.
 *
 * @param number - Divider number
 */
export function isDivisibleBy(str: string, number: number): boolean;

export interface IsEmailOptions {
    /**
     * If `allow_display_name` is set to `true`, the validator will also match `Display Name <email-address>`.
     *
     * @default false
     */
    allow_display_name?: boolean;
    /**
     * If `require_display_name` is set to `true`, the validator will reject strings without the format `Display Name <email-address>`.
     *
     * @default false
     */
    require_display_name?: boolean;
    /**
     * If `allow_utf8_local_part` is set to `false`, the validator will not allow any non-English UTF8 character in email address' local part.
     *
     * @default true
     */
    allow_utf8_local_part?: boolean;
    /**
     * If `require_tld` is set to `false`, e-mail addresses without having TLD in their domain will also be matched.
     *
     * @default true
     */
    require_tld?: boolean;
    /**
     * If `ignore_max_length` is set to `true`, the validator will not check for the standard max length of an email.
     *
     * @default false
     */
    ignore_max_length?: boolean;
    /**
     * If `allow_ip_domain` is set to `true`, the validator will allow IP addresses in the host part.
     *
     * @default false
     */
    allow_ip_domain?: boolean;
    /**
     * If `domain_specific_validation` is `true`, some additional validation will be enabled,
     * e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
     *
     * @default false
     */
    domain_specific_validation?: boolean;
}

/**
 * Check if the string is an email.
 *
 * @param [options] - Options
 */
export function isEmail(str: string, options?: IsEmailOptions): boolean;

export interface IsEmptyOptions {
    /**
     * @default false
     */
    ignore_whitespace?: boolean;
}

/**
 * Check if the string has a length of zero.
 *
 * @param [options] - Options
 */
export function isEmpty(str: string, options?: IsEmptyOptions): boolean;

export type FloatLocale =
    | 'en-US'
    | 'ar'
    | 'en-AU'
    | 'en-GB'
    | 'en-HK'
    | 'en-IN'
    | 'en-NZ'
    | 'en-ZA'
    | 'en-ZM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-QM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'bg-BG'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'el-GR'
    | 'es-ES'
    | 'fr-FR'
    | 'it-IT'
    | 'ku-IQ'
    | 'hu-HU'
    | 'nb-NO'
    | 'nn-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'sl-SI'
    | 'sr-RS@latin'
    | 'sr-RS'
    | 'sv-SE'
    | 'tr-TR'
    | 'uk-UA'
    | 'pt-BR'
    | 'pl-Pl';

export const isFloatLocales: FloatLocale[];

export interface IsFloatOptions {
    /**
     * less or equal
     */
    min?: number;
    /**
     * greater or equal
     */
    max?: number;
    /**
     * greater than
     */
    gt?: number;
    /**
     * less than
     */
    lt?: number;
    /**
     * FloatLocale
     */
    locale?: FloatLocale;
}

/**
 * Check if the string is a float.
 *
 * @param [options] - Options
 */
export function isFloat(str: string, options?: IsFloatOptions): boolean;

export interface IsFQDNOptions {
    /**
     * @default true
     */
    require_tld?: boolean;
    /**
     * @default false
     */
    allow_underscores?: boolean;
    /**
     * @default false
     */
    allow_trailing_dot?: boolean;
}

/**
 * Check if the string is a fully qualified domain name (e.g. `domain.com`).
 *
 * @param [options] - Options
 */
export function isFQDN(str: string, options?: IsFQDNOptions): boolean;

/**
 * Check if the string contains any full-width chars.
 */
export function isFullWidth(str: string): boolean;

/**
 * Check if the string contains any half-width chars.
 */
export function isHalfWidth(str: string): boolean;

export type HashAlgorithm =
    | 'md4'
    | 'md5'
    | 'sha1'
    | 'sha256'
    | 'sha384'
    | 'sha512'
    | 'ripemd128'
    | 'ripemd160'
    | 'tiger128'
    | 'tiger160'
    | 'tiger192'
    | 'crc32'
    | 'crc32b';

/**
 * Check if the string is a hash of type algorithm.
 *
 * @param algorithm - HashAlgorithm
 */
export function isHash(str: string, algorithm: HashAlgorithm): boolean;

/**
 * Check if the string is a hexadecimal number.
 */
export function isHexadecimal(str: string): boolean;

/**
 * Check if the string is a hexadecimal color.
 */
export function isHexColor(str: string): boolean;

export type IdentityCardLocale = 'ES' | 'he-IL' | 'zh-TW';

/**
 * Check if the string is a valid identity card code.
 *
 * @param [locale="any"] - IdentityCardLocale
 */
export function isIdentityCard(str: string, locale?: 'any' | IdentityCardLocale): boolean;

/**
 * Check if the string is in a array of allowed values.
 *
 * @param values - Allowed values.
 */
export function isIn(str: string, values: any[]): boolean;

export interface IsIntOptions {
    /**
     * to check the integer min boundary
     */
    min?: number;
    /**
     * to check the integer max boundary
     */
    max?: number;
    /**
     * if `false`, will disallow integer values with leading zeroes
     * @default true
     */
    allow_leading_zeroes?: boolean;
    /**
     * enforce integers being greater than the value provided
     */
    lt?: number;
    /**
     * enforce integers being less than the value provided
     */
    gt?: number;
}

/**
 * Check if the string is an integer.
 *
 * @param [options] - Options
 */
export function isInt(str: string, options?: IsIntOptions): boolean;

/**
 * Check if the string is an IP (version 4 or 6).
 *
 * @param [version] - IP Version
 */
export function isIP(str: string, version?: '4' | '6'): boolean;

/**
 * Check if the string is an IP Range (version 4 only).
 */
export function isIPRange(str: string): boolean;

/**
 * Check if the string is an ISBN (version 10 or 13).
 *
 * @param [version] - ISBN Version
 */
export function isISBN(str: string, version?: '10' | '13'): boolean;

/**
 * Check if the string is an [ISIN](https://en.wikipedia.org/wiki/International_Securities_Identification_Number) (stock/security identifier).
 */
export function isISIN(str: string): boolean;

/**
 * Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.
 */
export function isISO31661Alpha2(str: string): boolean;

/**
 * Check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code.
 */
export function isISO31661Alpha3(str: string): boolean;

export interface IsISO8601Options {
    /**
     * If `strict` is `true`, performs additional checks for valid dates,
     * e.g. invalidates dates like `2009-02-29`.
     *
     * @default false
     */
    strict?: boolean;
}

/**
 * Check if the string is a valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date.
 *
 * @param [options] - Options
 */
export function isISO8601(str: string, options?: IsISO8601Options): boolean;

export interface IsISSNOptions {
    /**
     * If `case_sensitive` is `true`, ISSNs with a lowercase `x` as the check digit are rejected.
     *
     * @default false
     */
    case_sensitive?: boolean;
    /**
     * @default false
     */
    require_hyphen?: boolean;
}

/**
 * Check if the string is an [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number).
 *
 * @param [options] - Options
 */
export function isISSN(str: string, options?: IsISSNOptions): boolean;

/**
 * Check if the string is a [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code).
 */
export function isISRC(str: string): boolean;

/**
 * Check if the string is a valid [RFC 3339](https://tools.ietf.org/html/rfc3339) date.
 */
export function isRFC3339(str: string): boolean;

/**
 * Check if the string is valid JSON (note: uses `JSON.parse`).
 */
export function isJSON(str: string): boolean;

/**
 * Check if the string is valid JWT token.
 */
export function isJWT(str: string): boolean;

/**
 * Check if the string is a valid latitude-longitude coordinate in the format:
 *
 * `lat,long` or `lat, long`.
 */
export function isLatLong(str: string): boolean;

export interface IsLengthOptions {
    /**
     * @default 0
     */
    min?: number;
    /**
     * @default undefined
     */
    max?: number;
}

/**
 * Check if the string's length falls in a range.
 *
 * Note: this function takes into account surrogate pairs.
 *
 * @param [options] - Options
 */
export function isLength(str: string, options?: IsLengthOptions): boolean;

/**
 * Check if the string is lowercase.
 */
export function isLowercase(str: string): boolean;

export interface IsMACAddressOptions {
    /**
     * If `no_colons` is `true`, the validator will allow MAC addresses without the colons.
     * Also, it allows the use of hyphens or spaces.
     *
     * e.g. `01 02 03 04 05 ab` or `01-02-03-04-05-ab`.
     *
     * @default false
     */
    no_colons?: boolean;
}

/**
 * Check if the string is a MAC address.
 *
 * @param [options] - Options
 */
export function isMACAddress(str: string, options?: IsMACAddressOptions): boolean;

/**
 * Check if the string is a [magnet uri format](https://en.wikipedia.org/wiki/Magnet_URI_scheme).
 */
export function isMagnetURI(str: string): boolean;

/**
 * Check if the string is a MD5 hash.
 */
export function isMD5(str: string): boolean;

/**
 * Check if the string matches to a valid [MIME type](https://en.wikipedia.org/wiki/Media_type) format.
 */
export function isMimeType(str: string): boolean;

export type MobilePhoneLocale =
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'be-BY'
    | 'bg-BG'
    | 'bn-BD'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'de-AT'
    | 'el-GR'
    | 'en-AU'
    | 'en-GB'
    | 'en-GG'
    | 'en-GH'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-KE'
    | 'en-MT'
    | 'en-MU'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PK'
    | 'en-RW'
    | 'en-SG'
    | 'en-TZ'
    | 'en-UG'
    | 'en-US'
    | 'en-ZA'
    | 'en-ZM'
    | 'es-CL'
    | 'es-ES'
    | 'es-MX'
    | 'es-PA'
    | 'es-PY'
    | 'es-UY'
    | 'et-EE'
    | 'fa-IR'
    | 'fi-FI'
    | 'fj-FJ'
    | 'fo-FO'
    | 'fr-FR'
    | 'fr-GF'
    | 'fr-GP'
    | 'fr-MQ'
    | 'fr-RE'
    | 'he-IL'
    | 'hu-HU'
    | 'id-ID'
    | 'it-IT'
    | 'ja-JP'
    | 'kk-KZ'
    | 'kl-GL'
    | 'ko-KR'
    | 'lt-LT'
    | 'ms-MY'
    | 'nb-NO'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn-NO'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sl-SI'
    | 'sk-SK'
    | 'sr-RS'
    | 'sv-SE'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'vi-VN'
    | 'zh-CN'
    | 'zh-TW'
    | 'en-CA'
    | 'fr-BE'
    | 'zh-HK';

export const isMobilePhoneLocales: MobilePhoneLocale[];

export interface IsMobilePhoneOptions {
    /**
     * If this is set to `true`, the mobile phone number must be supplied with the country code and therefore must start with `+`.
     *
     * @default false
     */
    strictMode?: boolean;
}

/**
 * Check if the string is a mobile phone number.
 *
 * @param [locale] - MobilePhoneLocale(s)
 * @param [options] - Options
 */
export function isMobilePhone(
    str: string,
    locale?: 'any' | MobilePhoneLocale | MobilePhoneLocale[],
    options?: IsMobilePhoneOptions,
): boolean;

/**
 * Check if the string is a valid hex-encoded representation of a [MongoDB ObjectId](http://docs.mongodb.org/manual/reference/object-id/).
 */
export function isMongoId(str: string): boolean;

/**
 * Check if the string contains one or more multibyte chars.
 */
export function isMultibyte(str: string): boolean;

export interface IsNumericOptions {
    /**
     * If `no_symbols` is true, the validator will reject numeric strings that feature a symbol (e.g. `+`, `-`, or `.`).
     *
     * @default false
     */
    no_symbols?: boolean;
}

/**
 * Check if the string contains only numbers.
 *
 * @param [options] - Options
 */
export function isNumeric(str: string, options?: IsNumericOptions): boolean;

/**
 * Check if the string is a valid octal number.
 */
export function isOctal(str: string): boolean;

/**
 * Check if the string is a valid port number.
 */
export function isPort(str: string): boolean;

export type PostalCodeLocale =
    | 'AD'
    | 'AT'
    | 'AU'
    | 'BE'
    | 'BG'
    | 'BR'
    | 'CA'
    | 'CH'
    | 'CZ'
    | 'DE'
    | 'DK'
    | 'DZ'
    | 'EE'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'GR'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IN'
    | 'IS'
    | 'IT'
    | 'JP'
    | 'KE'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'MX'
    | 'MT'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'PL'
    | 'PR'
    | 'PT'
    | 'RO'
    | 'RU'
    | 'SA'
    | 'SE'
    | 'SI'
    | 'SK'
    | 'TN'
    | 'TW'
    | 'UA'
    | 'US'
    | 'ZA'
    | 'ZM';

export const isPostalCodeLocales: PostalCodeLocale[];

/**
 * Check if the string is a postal code
 *
 * @param locale - PostalCodeLocale
 */
export function isPostalCode(str: string, locale: 'any' | PostalCodeLocale): boolean;

/**
 * Check if the string contains any surrogate pairs chars.
 */
export function isSurrogatePair(str: string): boolean;

export interface IsURLOptions {
    /**
     * @default ['http','https','ftp']
     */
    protocols?: string[];
    /**
     * @default true
     */
    require_tld?: boolean;
    /**
     * @default false
     */
    require_protocol?: boolean;
    /**
     * @default true
     */
    require_host?: boolean;
    /**
     * @default true
     */
    require_valid_protocol?: boolean;
    /**
     * @default false
     */
    allow_underscores?: boolean;
    /**
     * @default false
     */
    host_whitelist?: Array<string | RegExp>;
    /**
     * @default false
     */
    host_blacklist?: Array<string | RegExp>;
    /**
     * @default false
     */
    allow_trailing_dot?: boolean;
    /**
     * @default false
     */
    allow_protocol_relative_urls?: boolean;
    /**
     * @default false
     */
    disallow_auth?: boolean;
}

/**
 * Check if the string is an URL.
 *
 * @param [options] - Options
 */
export function isURL(str: string, options?: IsURLOptions): boolean;

/**
 * Check if the string is uppercase.
 */
export function isUppercase(str: string): boolean;

/**
 * Check if the string is a UUID (version 3, 4 or 5).
 *
 * @param [version="all"] - UUID version
 */
export function isUUID(str: string, version?: 3 | 4 | 5 | '3' | '4' | '5' | 'all'): boolean;

/**
 * Check if the string contains a mixture of full and half-width chars.
 */
export function isVariableWidth(str: string): boolean;

/**
 * Checks characters if they appear in the whitelist.
 *
 * @param chars - whitelist
 */
export function isWhitelisted(str: string, chars: string | string[]): boolean;

/**
 * Check if string matches the pattern.
 *
 * @param pattern - `/foo/i`
 */
export function matches(str: string, pattern: RegExp): boolean;
/**
 * Check if string matches the pattern.
 *
 * @param pattern - `'foo'`
 * @param [modifiers] - `'i'`
 */
export function matches(str: string, pattern: string, modifiers?: string): boolean;

/**
 * Check if the string is of type slug.
 */
export function isSlug(str: string): boolean;

/******************
 *** Sanitizers ***
 ******************/

/**
 * Remove characters that appear in the blacklist.
 *
 * @param chars - The characters are used in a `RegExp` and so you will need to escape some chars, e.g. `blacklist(input, '\\[\\]')`.
 */
export function blacklist(input: string, chars: string): string;

/**
 * Replace `<`, `>`, `&`, `'`, `"` and `/` with HTML entities.
 */
export function escape(input: string): string;

/**
 * Replaces HTML encoded entities with `<`, `>`, `&`, `'`, `"` and `/`.
 */
export function unescape(input: string): string;

/**
 * Trim characters from the left-side of the input.
 *
 * @param [chars] - characters (defaults to whitespace)
 */
export function ltrim(input: string, chars?: string): string;

export interface NormalizeEmailOptions {
    /**
     * Transforms the local part (before the @ symbol) of all email addresses to lowercase.
     * Please note that this may violate RFC 5321, which gives providers the possibility
     * to treat the local part of email addresses in a case sensitive way
     * (although in practice most - yet not all - providers don't).
     * The domain part of the email address is always lowercased, as it's case insensitive per RFC 1035.
     *
     * @default true
     */
    all_lowercase?: boolean;
    /**
     * GMail addresses are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, GMail addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    gmail_lowercase?: boolean;
    /**
     * Removes dots from the local part of the email address, as GMail ignores them
     * (e.g. `"john.doe"` and `"johndoe"` are considered equal).
     *
     * @default true
     */
    gmail_remove_dots?: boolean;
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
     * (e.g. `"foo+bar@gmail.com"` becomes `"foo@gmail.com"`).
     *
     * @default true
     */
    gmail_remove_subaddress?: boolean;
    /**
     * Converts addresses with domain `@googlemail.com` to `@gmail.com`, as they're equivalent.
     *
     * @default true
     */
    gmail_convert_googlemaildotcom?: boolean;
    /**
     * Outlook.com addresses (including Windows Live and Hotmail) are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, Outlook.com addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    outlookdotcom_lowercase?: boolean;
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
     * (e.g. `"foo+bar@outlook.com"` becomes `"foo@outlook.com"`).
     *
     * @default true
     */
    outlookdotcom_remove_subaddress?: boolean;
    /**
     * Yahoo Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, Yahoo Mail addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    yahoo_lowercase?: boolean;
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"-"` sign
     * (e.g. `"foo-bar@yahoo.com"` becomes `"foo@yahoo.com"`).
     *
     * @default true
     */
    yahoo_remove_subaddress?: boolean;
    /**
     * iCloud addresses (including MobileMe) are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, iCloud addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    icloud_lowercase?: boolean;
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
     * (e.g. `"foo+bar@icloud.com"` becomes `"foo@icloud.com"`).
     *
     * @default true
     */
    icloud_remove_subaddress?: boolean;
}

/**
 * Canonicalizes an email address. (This doesn't validate that the input is an email, if you want to validate the email use `isEmail` beforehand)
 *
 * @param [options] - Options
 */
export function normalizeEmail(email: string, options?: NormalizeEmailOptions): string | false;

/**
 * Trim characters from the right-side of the input.
 *
 * @param [chars] - characters (defaults to whitespace)
 */
export function rtrim(input: string, chars?: string): string;

/**
 * Remove characters with a numerical value < `32` and `127`, mostly control characters.
 * Unicode-safe in JavaScript.
 *
 * @param [keep_new_lines=false] - if `true`, newline characters are preserved (`\n` and `\r`, hex `0xA` and `0xD`).
 */
export function stripLow(input: string, keep_new_lines?: boolean): string;

/**
 * Convert the input string to a boolean.
 * Everything except for `'0'`, `'false'` and `''` returns `true`.
 *
 * @param [strict=false] - in `strict` mode, only `'1'` and `'true'` return `true`.
 */
export function toBoolean(input: string, strict?: boolean): boolean;

/**
 * Convert the input string to a `Date`, or `null` if the input is not a date.
 */
export function toDate(input: string): Date | null;

/**
 * Convert the input string to a float, or `NaN` if the input is not a float.
 */
export function toFloat(input: string): number;

/**
 * Convert the input string to an integer, or `NaN` if the input is not an integer.
 *
 * @param [radix=10] - radix or base (defaults to 10)
 */
export function toInt(input: string, radix?: number): number;

/**
 * Trim characters from both sides of the input.
 *
 * @param [chars] - characters (defaults to whitespace)
 */
export function trim(input: string, chars?: string): string;

/**
 * Remove characters that do not appear in the whitelist.
 *
 * @param chars - The characters are used in a `RegExp` and so you will need to escape some chars, e.g. `whitelist(input, '\\[\\]')`.
 */
export function whitelist(input: string, chars: string): string;

/**
 * Converts to string.
 */
export function toString(input: any): string;

import * as Validator from './';

export default Validator;
