import bytes = require('bytes');

bytes(104857);
bytes(104857, { thousandsSeparator: ' ' });
bytes(104857, { decimalPlaces: 2 });
bytes(104857, { fixedDecimals: true });
bytes(104857, { unitSeparator: '-' });
bytes(104857, { unit: 'GB' });
bytes(104857, { unit: 'B' });

bytes.format(104857);
bytes.format(104857, { thousandsSeparator: ' ' });
bytes.format(104857, { decimalPlaces: 2 });
bytes.format(104857, { fixedDecimals: true });
bytes.format(104857, { unitSeparator: '-' });
bytes.format(104857, { unit: 'GB' });
bytes.format(104857, { unit: 'pb' });

bytes('1024kb');
bytes.parse('1024kb');
bytes.parse(1024);
