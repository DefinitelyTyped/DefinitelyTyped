/// <reference path="latinize.d.ts" />

import latinize = require('latinize');

latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů'); // => 'ExAmPlE aeiouycdenrstzu'

latinize.characters['Ω'] = 'O';
