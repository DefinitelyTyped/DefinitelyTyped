import { newStemmer, Stemmer } from 'snowball-stemmers';

const snowballStemmer = newStemmer('english');
const stem = snowballStemmer.stem("swimmingly");
