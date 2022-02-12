import sw = require('stopword');
import { removeStopwords, LanguageCode } from 'stopword';

const oldString = 'you can even roll your own custom stopword list'.split(' ');
const stopwords = sw.bg; // $ExpectType string[]

sw.removeStopwords(oldString, stopwords); // $ExpectType string[]
removeStopwords(oldString); // $ExpectType string[]

const customStopwords = ['interesting', 'really'];
sw.removeStopwords(oldString, [...sw.en, ...sw.sv, ...customStopwords]);

// fergiemcdowall/stopword#179
const getStopwords = (language: string): string[] | undefined => {
    switch (language) {
        case 'af': {
            return sw.af;
        }
        case 'la': {
            return sw.la;
        }
    }
    return undefined;
};

const getStopwordsByKey = (language: LanguageCode): string[] | undefined => {
    return sw[language] || undefined;
};

getStopwords('asdfasdf'); // $ExpectType string[] | undefined
sw.ur; // $ExpectType string[]
