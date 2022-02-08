import commaNumber from 'comma-number';

commaNumber('100');

commaNumber('100', '.');

commaNumber(100);

commaNumber(100, ',');

commaNumber.bindWith(',', '.');
