import codePoints = require('voca/code_points');
import graphemes = require('voca/graphemes');
import chars = require('voca/chars');
import split = require('voca/split');
import words = require('voca/words');

chars();
chars('cloud');

codePoints();
codePoints('rain');

graphemes();
graphemes('\uD835\uDC00\uD835\uDC01');

split('rage against the dying of the light', ' ');
split('the dying of the light', /\s/, 3);

words();
words('gravity can cross dimensions');
words('Earth gravity', /[^\s]+/g);
