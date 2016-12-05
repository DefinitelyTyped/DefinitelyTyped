

import d3dsv = require("d3-dsv");

var csv = d3dsv(",");

var rows = csv.parse("a,b,c\n1,2,3\n4,5,6");

