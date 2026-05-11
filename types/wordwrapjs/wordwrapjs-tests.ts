import wordwrapRequire = require("wordwrapjs");
import wordwrapImport from "wordwrapjs";

const options: wordwrapRequire.WordwrapOptions = {};
const text = "";

// $ExpectType string[]
wordwrapRequire.lines(text);
// $ExpectType string[]
wordwrapRequire.lines(text, options);

// $ExpectType string
wordwrapRequire.wrap(text);
// $ExpectType string
wordwrapRequire.wrap(text, options);

// $ExpectType string[]
wordwrapRequire.getChunks(text);

// $ExpectType boolean
wordwrapRequire.isWrappable(text);

const instanceRequire: wordwrapRequire = new wordwrapRequire(text);
const instanceWithOptionsRequire: wordwrapRequire = new wordwrapRequire(text, options);

// $ExpectType string[]
instanceRequire.lines();

// $ExpectType string
instanceRequire.toString();

// $ExpectType string
instanceRequire.wrap();

// $ExpectType WordwrapOptions
instanceRequire.options;

const optionsAllRequire: wordwrapRequire.WordwrapOptions = {
    break: false,
    eol: "\n",
    noTrim: false,
    width: 50,
};
const optionsWithBreakRequire: wordwrapRequire.WordwrapOptions = {
    break: false,
};
const optionsWithEolRequire: wordwrapRequire.WordwrapOptions = {
    eol: "\n",
};
const optionsWithNoTrimRequire: wordwrapRequire.WordwrapOptions = {
    noTrim: false,
};
const optionsWithWidthRequire: wordwrapRequire.WordwrapOptions = {
    width: 50,
};

// $ExpectType string[]
wordwrapImport.lines(text);
// $ExpectType string[]
wordwrapImport.lines(text, options);

// $ExpectType string
wordwrapImport.wrap(text);
// $ExpectType string
wordwrapImport.wrap(text, options);

// $ExpectType string[]
wordwrapImport.getChunks(text);

// $ExpectType boolean
wordwrapImport.isWrappable(text);

const instanceImport: wordwrapImport = new wordwrapImport(text);
const instanceWithOptions: wordwrapImport = new wordwrapImport(text, options);

// $ExpectType string[]
instanceImport.lines();

// $ExpectType string
instanceImport.toString();

// $ExpectType string
instanceImport.wrap();

// $ExpectType WordwrapOptions
instanceImport.options;

const optionsAllImport: wordwrapImport.WordwrapOptions = {
    break: false,
    eol: "\n",
    noTrim: false,
    width: 50,
};
const optionsWithBreakImport: wordwrapImport.WordwrapOptions = {
    break: false,
};
const optionsWithEolImport: wordwrapImport.WordwrapOptions = {
    eol: "\n",
};
const optionsWithNoTrimImport: wordwrapImport.WordwrapOptions = {
    noTrim: false,
};
const optionsWithWidthImport: wordwrapImport.WordwrapOptions = {
    width: 50,
};
