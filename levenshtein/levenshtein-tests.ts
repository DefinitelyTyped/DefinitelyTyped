import * as Levenshtein from 'levenshtein';

// Using standard methods
let l1 = new Levenshtein('kitten', 'sitting');
let num1: number = l1.distance;
let str1: string = l1.inspect();

// Using alias methods
let l2 = new Levenshtein('Saturday', 'Sunday');
let num2: number = l2.valueOf();
let str2: string = l2.toString();

// Levenshtein matrix can be retrieved
let l3 = new Levenshtein('kitten', 'sitting');
l3.getMatrix()[0].length;
