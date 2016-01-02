/// <reference path="./bowser.d.ts" />

import Bowser = require('bowser');

Bowser.msedge === true;
Bowser.test(['msie']) === true;
Bowser.a === Bowser.c;
Bowser.osversion > 10;
Bowser.osversion === '10.1A';
