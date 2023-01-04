import parseDecimalNumber = require('parse-decimal-number');

parseDecimalNumber('12,345,678.90'); // $ExpectType number

parseDecimalNumber('12.345.678,90', '.,'); // $ExpectType number
parseDecimalNumber('12.345.678,90', ['.', ',']); // $ExpectType number
parseDecimalNumber('12.345.678,90', { decimal: '.', thousands: ',' }); // $ExpectType number

parseDecimalNumber('12.345.678,90', '.,', true); // $ExpectType number

parseDecimalNumber.factoryReset(); // $ExpectType void

parseDecimalNumber.setOptions({ decimal: '.', thousands: ',' }); // $ExpectType void

parseDecimalNumber.withOptions({ decimal: '.', thousands: ',' })('12.345.678,90'); // $ExpectType number
parseDecimalNumber.withOptions({ decimal: '.', thousands: ',' }, true)('12.345.678,90'); // $ExpectType number
