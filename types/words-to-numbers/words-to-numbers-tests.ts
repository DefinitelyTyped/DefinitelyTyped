import { wordsToNumbers } from 'words-to-numbers';

const number = wordsToNumbers("one");

const text = wordsToNumbers("another two", { fuzzy: true });
