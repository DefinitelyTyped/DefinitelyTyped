import { list } from 'google-profanity-words';
import { profanity } from 'google-profanity-words/lib/profanity';

const words = list(); // $ExpectType string[]
const profanityWords = profanity(); // $ExpectType string[]
words.indexOf('someWord'.toLowerCase()) > -1; // ExpectType boolean
['someWord'].find(w => words.indexOf(w.toLowerCase()) > -1); // $ExpectedType boolean
