import formatThousands = require('format-thousands');

formatThousands(1000);
formatThousands(5000, {formatFourDigits: false});
formatThousands(1000000, '`');
formatThousands(10000, {separator: "'"});
formatThousands(-100000);
formatThousands(10000.0001);
formatThousands();
