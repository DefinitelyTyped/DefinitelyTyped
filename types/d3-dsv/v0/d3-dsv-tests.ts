import d3dsv = require("d3-dsv");

const csv = d3dsv(",");

const rows = csv.parse("a,b,c\n1,2,3\n4,5,6");
