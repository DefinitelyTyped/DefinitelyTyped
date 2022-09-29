import count = require('voca/count');
import countGraphemes = require('voca/count_graphemes');
import countSubstrings = require('voca/count_substrings');
import countWhere = require('voca/count_where');
import countWords = require('voca/count_words');
import isAlpha = require('voca/is_alpha');

count();
count('rain');

countGraphemes('cafe\u0301');

countSubstrings('bad boys, bad boys whatcha gonna do?', 'boys');

countWhere('hola!', isAlpha);
countWhere('2022', (character: string, index: number, str: string) => character === '2');

countWords('gravity can cross dimensions');
