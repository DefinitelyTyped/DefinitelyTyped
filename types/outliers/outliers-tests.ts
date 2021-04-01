import outliers = require('outliers');

outliers([1, 2, 3]);
[1, 2, 3].filter(outliers());
[{ n: 1 }, { n: 2 }, { n: 3 }].filter(outliers('n'));
