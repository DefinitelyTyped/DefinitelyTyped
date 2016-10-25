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
bowser.compareVersions(['9.0', '10']);
bowser() === <BowserModule.IBowserDetection>{android: true, x: true};
bowser.check({msie: "11"}, window.navigator.userAgent);
bowser.isUnsupportedBrowser({msie: "10"}, window.navigator.userAgent);