// Type definitions for validator.js v10.11.0
// Project: https://github.com/chriso/validator.js
// Definitions by: tgfjt <https://github.com/tgfjt>
//                 Ilya Mochalov <https://github.com/chrootsu>
//                 Ayman Nedjmeddine <https://github.com/IOAyman>
//                 Louy Alakkad <https://github.com/louy>
//                 Kacper Polak <https://github.com/kacepe>
//                 Bonggyun Lee <https://github.com/deptno>
//                 Naoto Yokoyama <https://github.com/builtinnya>
//                 Philipp Katz <https://github.com/qqilihq>
//                 Jace Warren <https://github.com/keatz55>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ValidatorJS {
  type AlphaLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "bg-BG" | "cs-CZ" | "da-DK" | "de-DE" | "el-GR" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "hu-HU" | "it-IT" | "nb-NO" | "nl-NL" | "nn-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sk-SK" | "sr-RS" | "sr-RS@latin" | "sv-SE" | "tr-TR" | "uk-UA";
  type AlphanumericLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "bg-BG"| "cs-CZ" | "da-DK" | "de-DE" | "el-GR" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "hu-HU" | "it-IT" | "nb-NO" | "nl-NL" | "nn-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sk-SK" | "sr-RS" | "sr-RS@latin" | "sv-SE" | "tr-TR" | "uk-UA";
  type DecimalLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "bg-BG" | "cs-CZ" | "da-DK" | "de-DE" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "hu-HU" | "it-IT" | "nb-NO" | "nl-NL" | "nn-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sr-RS" | "sr-RS@latin" | "sv-SE" | "tr-TR" | "uk-UA";
  type FloatLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "bg-BG" | "cs-CZ" | "da-DK" | "de-DE" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "hu-HU" | "it-IT" | "nb-NO" | "nl-NL" | "nn-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sr-RS" | "sr-RS@latin" | "sv-SE" | "tr-TR" | "uk-UA";
  type MobilePhoneLocale = "ar-AE" | "ar-DZ" | "ar-EG" | "ar-JO" | "ar-SA" | "ar-SY" | "be-BY" | "bg-BG" | "cs-CZ" | "de-DE" | "da-DK" | "el-GR" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-KE" | "en-NG" | "en-NZ" | "en-UG" | "en-RW" | "en-SG" | "en-TZ" | "en-PK" | "en-US" | "en-CA" | "en-ZA" | "en-ZM" | "es-ES" | "fa-IR" | "fi-FI" | "fo-FO" | "fr-FR" | "he-IL" | "hu-HU" | "id-ID" | "it-IT" | "ja-JP" | "kk-KZ" | "kl-GL" | "ko-KR" | "lt-LT" | "ms-MY" | "nb-NO" | "nn-NO" | "pl-PL" | "pt-PT" | "ro-RO" | "ru-RU" | "sk-SK" | "sr-RS" | "th-TH" | "tr-TR" | "uk-UA" | "vi-VN" | "zh-CN" | "zh-HK" | "zh-TW" | "any";
  type PostalCodeLocale = "AT" | "AU" | "BE" | "BG" | "CA" | "CH" | "CZ" | "DE" | "DK" | "DZ" | "ES" | "FI" | "FR" | "GB" | "GR" | "IL" | "IN" | "IS" | "IT" | "JP" | "KE" | "LI" | "MX" | "NL" | "NO" | "PL" | "PT" | "RO" | "RU" | "SA" | "SE" | "TW" | "US" | "ZA" | "ZM" | "any"
  type HashAlgorithm = "md4" | "md5" | "sha1" | "sha256" | "sha384" | "sha512" | "ripemd128" | "ripemd160" | "tiger128" | "tiger160" | "tiger192" | "crc32" | "crc32b";

  interface ValidatorStatic {

    // **************
    // * Validators *
    // **************

    // check if the string contains the seed.
    contains(str: string, elem: any): boolean;

    // check if the string matches the comparison.
    equals(str: string, comparison: string): boolean;

    // check if the string is a date that's after the specified date (defaults to now).
    isAfter(str: string, date?: string): boolean;

    // check if the string contains only letters (a-zA-Z). Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
    // 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE',
    // 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM',
    // 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sk-SK', 'sr-RS',
    // 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']) and defaults to en-US
    isAlpha(str: string, locale?: AlphaLocale): boolean;

    // check if the string contains only letters and numbers. Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
    // 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE',
    // 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM',
    // 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sk-SK', 'sr-RS',
    // 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']) and defaults to en-US
    isAlphanumeric(str: string, locale?: AlphanumericLocale): boolean;

    // check if the string contains ASCII chars only.
    isAscii(str: string): boolean;

    // check if a string is base64 encoded.
    isBase64(str: string): boolean;

    // check if the string is a date that's before the specified date.
    isBefore(str: string, date?: string): boolean;

    // check if a string is a boolean.
    isBoolean(str: string): boolean;

    // check if the string's length (in bytes) falls in a range.
    isByteLength(str: string, options: IsByteLengthOptions): boolean;
    isByteLength(str: string, min: number, max?: number): boolean;

    // check if the string is a credit card.
    isCreditCard(str: string): boolean;

    // check if the string is a valid currency amount.
    isCurrency(str: string, options?: IsCurrencyOptions): boolean;

    // check if the string is a data uri format (https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs)
    isDataURI(str: string): boolean;

    // check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.
    isDecimal(str: string, options?: IsDecimalOptions): boolean;

    // check if the string is a number that's divisible by another.
    isDivisibleBy(str: string, number: number): boolean;

    // check if the string is an email.
    isEmail(str: string, options?: IsEmailOptions): boolean;

    // check if the string has a length of zero.
    isEmpty(str: string, options?: IsEmptyOptions): boolean;

    // check if the string is a fully qualified domain name (e.g. domain.com).
    isFQDN(str: string, options?: IsFQDNOptions): boolean;

    // check if the string is a float.
    isFloat(str: string, options?: IsFloatOptions): boolean;

    // check if the string contains any full-width chars.
    isFullWidth(str: string): boolean;

    // check if the string contains any half-width chars.
    isHalfWidth(str: string): boolean;

    // check if the string is a hash of type algorithm.
    // Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128',
    // 'tiger160', 'tiger192', 'crc32', 'crc32b']
    isHash(str: string, algorithm: HashAlgorithm): boolean;

    // check if the string is a hexadecimal color.
    isHexColor(str: string): boolean;

    // check if the string is a hexadecimal number.
    isHexadecimal(str: string): boolean;

    // check if the string is an IP (version 4 or 6).
    isIP(str: string, version?: number): boolean;

    // check if the string is an ISBN (version 10 or 13).
    isISBN(str: string, version?: number): boolean;

    // check if the string is an ISSN (https://en.wikipedia.org/wiki/International_Standard_Serial_Number).
    isISSN(str: string, options?: IsISSNOptions): boolean;

    // check if the string is an ISIN (https://en.wikipedia.org/wiki/International_Securities_Identification_Number)
    // (stock/security identifier).
    isISIN(str: string): boolean;

    // check if the string is a valid ISO 8601 (https://en.wikipedia.org/wiki/ISO_8601) date.
    isISO8601(str: string, options?: IsISO8601Options): boolean;

    // check if the string is a valid ISO 3166-1 alpha-2 (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned
    // country code.
    isISO31661Alpha2(str: string): boolean;

    // check if the string is a valid ISO 3166-1 alpha-3 (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned
    // country code.
    isISO31661Alpha3(str: string): boolean;

    // check if the string is a ISRC (https://en.wikipedia.org/wiki/International_Standard_Recording_Code).
    isISRC(str: string): boolean;

    // check if the string is in a array of allowed values.
    isIn(str: string, values: any[]): boolean;

    // check if the string is an integer.
    isInt(str: string, options?: IsIntOptions): boolean;

    // check if the string is valid JSON (note: uses JSON.parse).
    isJSON(str: string): boolean;

    // check if the string is valid JWT token.
    isJWT(str: string): boolean;

    // check if the string is a valid latitude-longitude coordinate in the format lat,long or lat, long.
    isLatLong(str: string): boolean;

    // check if the string's length falls in a range.
    // Note: this function takes into account surrogate pairs.
    isLength(str: string, options: IsLengthOptions): boolean;
    isLength(str: string, min: number, max?: number): boolean;

    // check if the string is lowercase.
    isLowercase(str: string): boolean;

    // check if the string is a MAC address.
    isMACAddress(str: string): boolean;

    // check if the string is a MD5 hash.
    isMD5(str: string): boolean;

    // check if the string matches to a valid MIME type (https://en.wikipedia.org/wiki/Media_type) format
    isMimeType(str: string): boolean;

    // check if the string is a mobile phone number, (locale is either an array of locales or one of
    // ['ar-AE', ar-DZ', 'ar-EG', 'ar-JO', 'ar-SA', 'ar-SY', 'be-BY', 'bg-BG', 'cs-CZ', 'de-DE',
    // 'da-DK', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-KE', 'en-NG', 'en-NZ', 'en-UG',
    // 'en-RW', 'en-SG', 'en-TZ', 'en-PK', 'en-US', 'en-CA', 'en-ZA', 'en-ZM', 'es-ES', 'fa-IR',
    // 'fi-FI', 'fo-FO', 'fr-FR', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kk-KZ', 'kl-GL',
    // 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'nn-NO', 'pl-PL', 'pt-PT', 'ro-RO', 'ru-RU', 'sk-SK',
    // 'sr-RS', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-TW'] or defaults to 'any').
    isMobilePhone(str: string, locale?: MobilePhoneLocale | MobilePhoneLocale[], options?: IsMobilePhoneOptions): boolean;

    // check if the string is a valid hex-encoded representation of a MongoDB ObjectId
    // (http://docs.mongodb.org/manual/reference/object-id/).
    isMongoId(str: string): boolean;

    // check if the string contains one or more multibyte chars.
    isMultibyte(str: string): boolean;

    // check if the string contains only numbers.
    isNumeric(str: string, options?: IsNumericOptions): boolean;

    // check if the string is a valid port number.
    isPort(str: string): boolean;

    // check if the string is a postal code, (locale is one of
    // [ 'AT', 'AU', 'BE', 'BG', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'ES', 'FI', 'FR', 'GB', 'GR',
    // 'IL', 'IN', 'IS', 'IT', 'JP', 'KE', 'LI', 'MX', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'SA',
    // 'SE', 'TW', 'US', 'ZA', 'ZM' ]) OR 'any'. If 'any' is used, function will check if any of the
    // locales match).
    isPostalCode(str: string, locale: PostalCodeLocale): boolean;

    // check if the string contains any surrogate pairs chars.
    isSurrogatePair(str: string): boolean;

    // check if the string is an URL.
    isURL(str: string, options?: IsURLOptions): boolean;

    // check if the string is a UUID. Must be one of ['3', '4', '5', 'all'], default is all.
    isUUID(str: string, version?: 3|4|5|"3"|"4"|"5"|"all"): boolean;

    // check if the string is uppercase.
    isUppercase(str: string): boolean;

    // check if the string contains a mixture of full and half-width chars.
    isVariableWidth(str: string): boolean;

    // checks characters if they appear in the whitelist.
    isWhitelisted(str: string, chars: string | string[]): boolean;

    // check if string matches the pattern.
    matches(str: string, pattern: RegExp | string, modifiers?: string): boolean;

    // **************
    // * Sanitizers *
    // **************

    // remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need
    // to escape some chars, e.g. blacklist(input, '\\[\\]').
    blacklist(input: string, chars: string): string;

    // replace <, >, &, ', " and / with HTML entities.
    escape(input: string): string;

    // replaces HTML encoded entities with <, >, &, ', " and /.
    unescape(input: string): string;

    // trim characters from the left-side of the input.
    ltrim(input: string, chars?: string): string;

    // canonicalize an email address.
    normalizeEmail(email: string, options?: NormalizeEmailOptions): string | false;

    // trim characters from the right-side of the input.
    rtrim(input: string, chars?: string): string;

    // remove characters with a numerical value < 32 and 127, mostly control characters. If keep_new_lines is true,
    // newline characters are preserved (\n and \r, hex 0xA and 0xD). Unicode-safe in JavaScript.
    stripLow(input: string, keep_new_lines?: boolean): string;

    // convert the input to a boolean. Everything except for '0', 'false' and '' returns true. In strict mode only '1'
    // and 'true' return true.
    toBoolean(input: string, strict?: boolean): boolean;

    // convert the input to a date, or null if the input is not a date.
    toDate(input: string): Date; // Date or null

    // convert the input to a float, or NaN if the input is not a float.
    toFloat(input: string): number; // number or NaN

    // convert the input to an integer, or NaN if the input is not an integer.
    toInt(input: string, radix?: number): number; // number or NaN

    // trim characters (whitespace by default) from both sides of the input.
    trim(input: string, chars?: string): string;

    // remove characters that do not appear in the whitelist. The characters are used in a RegExp and so you will
    // need to escape some chars, e.g. whitelist(input, '\\[\\]').
    whitelist(input: string, chars: string): string;

    toString(input: any | any[]): string;

    version: string;

    // **************
    // * Extensions *
    // **************

    // add your own validators.
    // Note: that the first argument will be automatically coerced to a string.
    extend<T extends Function>(name: string, fn: T): void;
  }

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

  // options for isEmpty
  interface IsEmptyOptions {
    ignore_whitespace?: boolean;
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

  // options for isISO8601
  interface IsISO8601Options {
    strict?: boolean;
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
    disallow_auth?: boolean;
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
declare var validator: ValidatorJS.ValidatorStatic;

declare module "validator" {
  export = validator;
}

// deprecated interfaces for backward compatibility, please use ValidatorJS.* instead the ones
interface IValidatorStatic extends ValidatorJS.ValidatorStatic { }
interface IURLoptions extends ValidatorJS.IsURLOptions { }
interface IFQDNoptions extends ValidatorJS.IsFQDNOptions { }
interface IEmailoptions extends ValidatorJS.NormalizeEmailOptions { }
