import { wordsToNumbers } from 'words-to-numbers';

let number = wordsToNumbers("one");

let text = wordsToNumbers("another two", { fuzzy: true });
