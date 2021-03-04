import levenshtien, { DamerauLevenshteinResponse } from 'damerau-levenshtein';

let response: DamerauLevenshteinResponse = levenshtien('test', 'test2');

let response2: DamerauLevenshteinResponse = levenshtien('test', 'test2', 5);