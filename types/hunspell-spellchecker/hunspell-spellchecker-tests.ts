import { readFileSync } from 'fs';
import * as Spellchecker from 'hunspell-spellchecker';

const spellchecker = new Spellchecker();

const DICT: Spellchecker.Dictionary = spellchecker.parse({
    aff: readFileSync('./en_EN.aff'),
    dic: readFileSync('./en_EN.dic'),
});

spellchecker.use(DICT);

// $ExpectType boolean
const isRight = spellchecker.check('defienitely typed');

// $ExpectType string
spellchecker.suggest('oof', 10)[0];

// $ExpectType boolean
spellchecker.hasFlag('dooor', 'F');
