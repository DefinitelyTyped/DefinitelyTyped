/// <reference path='./validator.d.ts' />

import * as validator from 'validator';

let any: any;

/**************
 * Validators *
 **************/

{
  let result: boolean;

  result = validator.contains('sample', 'sample');

  result = validator.equals('sample', 'sample');

  result = validator.isAfter('sample');
  result = validator.isAfter('sample', new Date());

  result = validator.isAlpha('sample');

  result = validator.isAlphanumeric('sample');

  result = validator.isAscii('sample');

  result = validator.isBase64('sample');

  result = validator.isBefore('sample');
  result = validator.isBefore('sample', new Date());

  result = validator.isBoolean('sample');

  let isByteLengthOptions: ValidatorJS.IsByteLengthOptions;
  result = validator.isByteLength('sample', isByteLengthOptions);
  result = validator.isByteLength('sample', 0);
  result = validator.isByteLength('sample', 0, 42);

  result = validator.isCreditCard('sample');

  let isCurrencyOptions: ValidatorJS.IsCurrencyOptions;
  result = validator.isCurrency('sample');
  result = validator.isCurrency('sample', isCurrencyOptions);

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

  result = validator.isUppercase('sample');

  result = validator.isVariableWidth('sample');

  result = validator.isWhitelisted('sample', 'abc');
  result = validator.isWhitelisted('sample', ['a', 'b', 'c']);

  result = validator.matches('foobar', 'foo/i');
  result = validator.matches('foobar', 'foo', 'i');
}

/**************
 * Sanitizers *
 **************/

{
  let result: string;

  result = validator.blacklist('sample', 'abc');

  result = validator.escape('sample');

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

  result = validator.toString(any);

  result = validator.trim('sample');
  result = validator.trim('sample', ' ');

  result = validator.whitelist('sample', 'abc');
}

/**************
 * Extensions *
 **************/

validator.extend<(str: string, options: {}) => boolean>('isTest', (str: any, options: {}) => !str);
