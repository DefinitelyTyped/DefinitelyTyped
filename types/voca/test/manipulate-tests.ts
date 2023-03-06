import insert = require('voca/insert');
import latinise = require('voca/latinise');
import pad = require('voca/pad');
import padLeft = require('voca/pad_left');
import padRight = require('voca/pad_right');
import repeat = require('voca/repeat');
import replace = require('voca/replace');
import replaceAll = require('voca/replace_all');
import reverse = require('voca/reverse');
import reverseGrapheme = require('voca/reverse_grapheme');
import slugify = require('voca/slugify');
import splice = require('voca/splice');
import tr = require('voca/tr');
import trim = require('voca/trim');
import trimLeft = require('voca/trim_left');
import trimRight = require('voca/trim_right');
import wordWrap = require('voca/word_wrap');

insert();
insert('ct');
insert('ct', 'a');
insert('ct', 'a', 1);

latinise();
latinise('cafe\u0301');

pad();
pad('dog');
pad('dog', 5);
pad('bird', 6, '-');

padLeft();
padLeft('dog');
padLeft('dog', 5);
padLeft('bird', 6, '-');

padRight();
padRight('dog');
padRight('dog', 5);
padRight('bird', 6, '-');

repeat();
repeat('w');
repeat('w', 3);

replace();
replace('swan', 'wa', 'u');
replace('domestic duck', /domestic\s/, '');
replace('nice duck', /(nice)(duck)/, (match: string, nice: string, duck: string) => `the ${duck} is ${nice}`);

replaceAll();
replaceAll('good morning', 'o', '*');
replaceAll('evening', /n/, 's');

reverse();
reverse('winter');

reverseGrapheme();
reverseGrapheme('summer');

slugify();
slugify('Italian cappuccino drink');

splice();
splice('new year');
splice('new year', 0);
splice('new year', 0, 4);
splice('new year', 0, 3, 'happy');

tr();
tr('hello', 'el', 'ip');
tr('Yes. The fire rises.', {
    Yes: 'Awesome',
    fire: 'flame',
});

trim();
trim(' Mother nature ');
trim('--Earth--', '-');

trimLeft();
trimLeft('  Starship Troopers');
trimLeft('***Mobile Infantry', '*');

trimRight();
trimRight('the fire rises   ');
trimRight('do you feel in charge?!!!', '!');

wordWrap();
wordWrap('Hello world');
wordWrap('Hello world', {
    width: 5,
});
wordWrap('Hello world', {
    width: 5,
    newLine: '<br/>',
    indent: '__',
});
wordWrap('Wonderful world', {
    width: 5,
    cut: true,
});
