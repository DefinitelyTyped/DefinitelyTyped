import wordwrap = require("wordwrapjs");

const options: wordwrap.WordwrapOptions = {};
const text = "";

// $ExpectType string[]
wordwrap.lines(text);
wordwrap.lines(text, options);

// $ExpectType string
wordwrap.wrap(text);
wordwrap.wrap(text, options);

// $ExpectType string[]
wordwrap.getChunks(text);

// $ExpectType boolean
wordwrap.isWrappable(text);

const instance: wordwrap = new wordwrap(text);
const instanceWithOptions = new wordwrap(text, options);

// $ExpectType string[]
instance.lines();

// $ExpectType string
instance.toString();

// $ExpectType string
instance.wrap();

// $ExpectType WordwrapOptions
instance.options;

// Test wordwrap.WordwrapOptions
const optionsAll: wordwrap.WordwrapOptions = {
    break: false,
    eol: "\n",
    noTrim: false,
    width: 50,
};
const optionsWithBreak: wordwrap.WordwrapOptions = {
    break: false,
};
const optionsWithEol: wordwrap.WordwrapOptions = {
    eol: "\n",
};
const optionsWithNoTrim: wordwrap.WordwrapOptions = {
    noTrim: false,
};
const optionsWithWidth: wordwrap.WordwrapOptions = {
    width: 50,
};
