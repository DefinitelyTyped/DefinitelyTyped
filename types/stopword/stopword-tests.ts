import sw = require('stopword');
import { removeStopwords, LanguageCode } from 'stopword';

const oldString = 'you can even roll your own custom stopword list'.split(' ');
const stopwords = sw.bul; // $ExpectType string[]

sw.removeStopwords(oldString, stopwords); // $ExpectType string[]
removeStopwords(oldString); // $ExpectType string[]

const customStopwords = ['interesting', 'really'];
sw.removeStopwords(oldString, [...sw.eng, ...sw.swe, ...customStopwords]);

// fergiemcdowall/stopword#179
const getStopwords = (language: string): string[] | undefined => {
    switch (language) {
        case 'af': {
            return sw.afr;
        }
        case 'la': {
            return sw.lat;
        }
    }
    return undefined;
};

const getStopwordsByKey = (language: LanguageCode): string[] | undefined => {
    return sw[language] || undefined;
};

getStopwords('asdfasdf'); // $ExpectType string[] | undefined
sw.urd; // $ExpectType string[]
