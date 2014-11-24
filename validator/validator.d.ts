// Type definitions for validator.js v3.22.1
// Project: https://github.com/chriso/validator.js
// Definitions by: tgfjt <https://github.com/tgfjt>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// options for #isURL
interface IURLoptions {
  protocols?: string[]
  require_tld?: boolean
  require_protocol?: boolean
  allow_underscores?: boolean
}

// options for isFQDN
interface IFQDNoptions {
  require_tld?: boolean
  allow_underscores?: boolean
}

// options for normalizeEmail
interface IEmailoptions {
  lowercase?: boolean
}

// callback type for #extend 
interface IExtendCallback {
  (argv: string): any
}

// return function for #extend
interface IExtendFunc {
  (argv: string): boolean
}

interface IValidatorStatic {
  // add your own validators
  extend(name: string, fn: IExtendCallback): IExtendFunc;

  // check if the string matches the comparison.
  equals(str: string, comparison: any): boolean;

  // check if the string contains the seed.
  contains(str: string, elem: any): boolean;

  // check if string matches the pattern.
  matches(str: string, pattern: any, modifiers?: string): boolean;

  // check if the string is an email.
  isEmail(str: string): boolean;

  // check if the string is an URL.
  isURL(str: string, options?: IURLoptions): boolean;

  // check if the string is a fully qualified domain name (e.g. domain.com).
  isFQDN(str: string, options?: IFQDNoptions): boolean;

  // check if the string is an IP (version 4 or 6).
  isIP(str: string, version?: number): boolean;

  // check if the string contains only letters (a-zA-Z).
  isAlpha(str: string): boolean;

  // check if the string contains only numbers.
  isNumeric(str: string): boolean;

  // check if the string contains only letters and numbers.
  isAlphanumeric(str: string): boolean;

  // check if a string is base64 encoded.
  isBase64(str: string): boolean;

  // check if the string is a hexadecimal number.
  isHexadecimal(str: string): boolean;

  // check if the string is a hexadecimal color.
  isHexColor(str: string): boolean;

  // check if the string is lowercase.
  isLowercase(str: string): boolean;

  // check if the string is uppercase.
  isUppercase(str: string): boolean;

  // check if the string is an integer.
  isInt(str: string): boolean;

  // check if the string is a float.
  isFloat(str: string): boolean;

  // check if the string is a number that's divisible by another.
  isDivisibleBy(str: string, number: number): boolean;

  // check if the string is null.
  isNull(str: string): boolean;

  // check if the string's length falls in a range. Note: this function takes into account surrogate pairs.
  isLength(str: string, min: number, max?: number): boolean;

  // check if the string's length (in bytes) falls in a range.
  isByteLength(str: string, min: number, max?: number): boolean;

  // check if the string is a UUID (version 3, 4 or 5).
  isUUID(str: string, version?: number): boolean;

  // check if the string is a date.
  isDate(str: string): boolean;

  // check if the string is a date that's after the specified date (defaults to now).
  isAfter(str: string, date?: Date): boolean;

  // check if the string is a date that's before the specified date.
  isBefore(str: string, date?: Date): boolean;

  // check if the string is in a array of allowed values.
  isIn(str: string, values: any[]): boolean;

  // check if the string is a credit card.
  isCreditCard(str: string): boolean;

  // check if the string is an ISBN (version 10 or 13).
  isISBN(str: string, version?: number): boolean;

  // check if the string is valid JSON (note: uses JSON.parse).
  isJSON(str: string): boolean;

  // check if the string contains one or more multibyte chars.
  isMultibyte(str: string): boolean;

  // check if the string contains ASCII chars only.
  isAscii(str: string): boolean;

  // check if the string contains any full-width chars.
  isFullWidth(str: string): boolean;

  // check if the string contains any half-width chars.
  isHalfWidth(str: string): boolean;

  // check if the string contains a mixture of full and half-width chars.
  isVariableWidth(str: string): boolean;

  // check if the string contains any surrogate pairs chars.
  isSurrogatePair(str: string): boolean;

  // check if the string is a valid hex-encoded representation of a MongoDB ObjectId.
  isMongoId(str: string): boolean;

  // convert the input to a string.
  toString(input: any): string;

  // convert the input to a date, or null if the input is not a date.
  toDate(input: any): any; // Date or null

  // convert the input to a float, or NaN if the input is not a float.
  toFloat(input:any): number; // number or NaN

  // convert the input to an integer, or NaN if the input is not an integer.
  toInt(input:any, radix?: number): number; // number or NaN

  // convert the input to a boolean.
  toBoolean(input:any, strict?: boolean): boolean;

  // trim characters (whitespace by default) from both sides of the input.
  trim(input: any, chars?: string): string;

  // trim characters from the left-side of the input.
  ltrim(input: any, chars?: string): string;

  // trim characters from the right-side of the input.
  rtrim(input: any, chars?: string): string;

  // replace <, >, &, ' and " with HTML entities.
  escape(input: string): string;

  // remove characters with a numerical value < 32 and 127
  stripLow(input: string, keep_new_lines?: boolean): string;

  // remove characters that do not appear in the whitelist.
  whitelist(input: string, chars: string): string;

  // remove characters that appear in the blacklist. 
  blacklist(input: string, chars: string): string;

  // canonicalize an email address.
  normalizeEmail(email: string, options?: IEmailoptions): string;
}

declare module "validator" {
  var validator: IValidatorStatic;
  export = validator;
}
