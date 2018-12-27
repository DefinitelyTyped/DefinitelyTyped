import cleanRegexp = require('clean-regexp');

// $ExpectType string
cleanRegexp('[0-9]');
cleanRegexp('[^0-9]');
cleanRegexp('[a-zA-Z0-9_]');
cleanRegexp('[a-z0-9_]', 'i');
cleanRegexp('[^a-zA-Z0-9_]');
cleanRegexp('[^a-z0-9_]', 'i');
cleanRegexp('[a-zA-Z\\d_]');
cleanRegexp('[^a-zA-Z\\d_]');
cleanRegexp('[0-9]+\\.[a-zA-Z0-9_]?');
