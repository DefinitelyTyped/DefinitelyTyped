import compare = require('compare');

declare let res: -1 | 0 | 1;

res = compare(1, 2);
res = compare('a', 'b');
// @ts-expect-error
res = compare('a', 1);

[1, 2, 10].sort(compare);
['cu', 'cs'].sort(compare);
