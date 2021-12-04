import codePointAt = require('voca/code_point_at');
import first = require('voca/first');
import graphemeAt = require('voca/grapheme_at');
import charAt = require('voca/char_at');
import last = require('voca/last');
import prune = require('voca/prune');
import slice = require('voca/slice');
import substr = require('voca/substr');
import substring = require('voca/substring');
import truncate = require('voca/truncate');

charAt('helicopter', 0);

codePointAt('rain', 1);

first('helicopter');
first('vehicle', 2);

graphemeAt('\uD835\uDC00\uD835\uDC01', 0);

last('helicopter');
last('vehicle', 2);

prune('Once upon a time', 7);
prune('Good day, Little Red Riding Hood', 16, ' (more)');

slice('miami', 1);
slice('florida', 1, 4);

substr('infinite loop', 9);
substr('dreams', 2, 2);

substring('beach', 1);
substring('ocean', 1, 3);

truncate('Once upon a time', 7);
truncate('Good day, Little Red Riding Hood', 14, ' (...)');
