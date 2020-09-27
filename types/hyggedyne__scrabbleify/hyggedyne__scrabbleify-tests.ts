import { numbers, punctuation, scrabbleify, symbols } from '@hyggedyne/scrabbleify';

const loremIpsum = `Lorem Ipsum is simply ....  of Lorem Ipsum.`;

scrabbleify(loremIpsum); // $ExpectType string
scrabbleify(loremIpsum, [' ', 'L', 'I']); // $ExpectType string
scrabbleify(loremIpsum, ' ', true); // $ExpectType string
scrabbleify(loremIpsum, [' '], ['L']); // $ExpectType string

numbers; // $ExpectType string[]
punctuation; // $ExpectType string[]
symbols; // $ExpectTpe string[]
