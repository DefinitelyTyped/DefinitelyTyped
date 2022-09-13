import asciiCats = require('ascii-cats');
import { catNames } from 'ascii-cats';

asciiCats(); // => returns a random cat
asciiCats(); // $ExpectType string
asciiCats('nyan'); // $ExpectType string
catNames; // $ExpectType string[]
