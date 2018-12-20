import getRange = require('get-range');

for (const i of getRange(4)) {
}

const r = getRange(0, 4, 2);
r.next().value;
r.next().value;

getRange(0, -5);
getRange(0, -5, -1);
