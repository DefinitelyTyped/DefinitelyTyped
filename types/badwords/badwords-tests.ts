import badwords = require("badwords");
import badwordsArray = require("badwords/array");
import badwordsObject = require("badwords/object");
import badwordsRegexp = require("badwords/regexp");

// $ExpectType string[]
badwords;

// $ExpectType string[]
badwordsArray;

// $ExpectType { [word: string]: 1; }
badwordsObject;

// $ExpectType RegExp
badwordsRegexp;
