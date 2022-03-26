import commaNumber = require('comma-number');

commaNumber('100');

commaNumber('100', '.');

commaNumber(100);

commaNumber(100, ',');

commaNumber.bindWith(',', '.');
