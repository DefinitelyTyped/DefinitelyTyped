bowser.msedge; // $ExpectType boolean
bowser.test(['msie']); // $ExpectType boolean
bowser.a === bowser.c;
bowser.osversion > 10;
bowser.osversion === '10.1A';
bowser.compareVersions(['9.0', '10']);

bowser().android; // $ExpectType boolean
bowser().x; // $ExpectType boolean
bowser.check({msie: "11"}, window.navigator.userAgent);
bowser.isUnsupportedBrowser({msie: "10"}, window.navigator.userAgent);
