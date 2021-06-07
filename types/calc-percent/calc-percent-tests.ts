import calcPercent = require('calc-percent');

calcPercent(10, 50);
calcPercent(10, 50, { suffix: '%' });
calcPercent(100 / 3, 100, { decimal: 2 });
calcPercent(30, 50); // $ExpectType string
