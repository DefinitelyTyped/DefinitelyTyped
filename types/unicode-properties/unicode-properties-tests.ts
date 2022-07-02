import * as unicode from 'unicode-properties';

const codePoint = 0x41; // 'A'

// $ExpectType string
unicode.getCategory(codePoint);

// $ExpectType string
unicode.getScript(codePoint);

// $ExpectType string
unicode.getCombiningClass(codePoint);

// $ExpectType string
unicode.getEastAsianWidth(codePoint);

// $ExpectType number | null
unicode.getNumericValue(codePoint);

// $ExpectType boolean
unicode.isAlphabetic(codePoint);

// $ExpectType boolean
unicode.isDigit(codePoint);

// $ExpectType boolean
unicode.isPunctuation(codePoint);

// $ExpectType boolean
unicode.isLowerCase(codePoint);

// $ExpectType boolean
unicode.isUpperCase(codePoint);

// $ExpectType boolean
unicode.isTitleCase(codePoint);

// $ExpectType boolean
unicode.isWhiteSpace(codePoint);

// $ExpectType boolean
unicode.isBaseForm(codePoint);

// $ExpectType boolean
unicode.isMark(codePoint);
