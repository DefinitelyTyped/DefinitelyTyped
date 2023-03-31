import badwords from 'badwords';
import badwordsArray from 'badwords/array';
import badwordsObject from 'badwords/object';
import badwordsRegexp from 'badwords/regexp';

// $ExpectType string[]
badwords;

// $ExpectType string[]
badwordsArray;

// $ExpectType { [word: string]: 1; }
badwordsObject;

// $ExpectType RegExp
badwordsRegexp;
