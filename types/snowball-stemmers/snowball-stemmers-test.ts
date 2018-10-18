import { newStemmer, Stemmer } from 'snowball-stemmers';

let snowballStemmer = newStemmer('english');
let stem = snowballStemmer.stem("swimmingly");
