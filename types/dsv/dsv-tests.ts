

import dsv = require("dsv");

var csv = dsv(",");

var rows = csv.parse("a,b,c\n1,2,3\n4,5,6");

