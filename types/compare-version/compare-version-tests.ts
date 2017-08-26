
import compareVersion = require('compare-version');

var result :number;
result = compareVersion('1.11.0', '1.11.0');
result = compareVersion('1.11.0', '1.2.9');
result = compareVersion('1.11.3', '1.11.25');
