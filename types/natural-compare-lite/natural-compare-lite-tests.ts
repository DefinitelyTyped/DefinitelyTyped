import compare = require("natural-compare-lite");

['a', 's', 'd'].sort(compare);

['a', 's', 'd'].sort(String.naturalCompare);
