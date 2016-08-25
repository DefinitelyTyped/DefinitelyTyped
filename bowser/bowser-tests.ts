/// <reference path="./bowser.d.ts" />

import Bowser = require('bowser');

Bowser.msedge === true;
Bowser.test(['msie']) === true;
Bowser.a === Bowser.c;
Bowser.osversion > 10;
Bowser.osversion === '10.1A';

bowser.msedge === true;
bowser.test(['msie']) === true;
bowser.a === bowser.c;
bowser.osversion > 10;
bowser.osversion === '10.1A';
