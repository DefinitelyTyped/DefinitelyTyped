import grayPercentage = require('gray-percentage');

grayPercentage(1);
grayPercentage(1, 1);
grayPercentage(1, 'cool');
grayPercentage(1, 'slate');
grayPercentage(1, 'warm');
grayPercentage(1, 1, true);

function testReturnValue(value: string): void {}

testReturnValue(grayPercentage(1));
