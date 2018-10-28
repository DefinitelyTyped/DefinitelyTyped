import FNV = require('fnv-lite');

let result: string;
result = FNV.hex('');
result = FNV.base64('');
result = FNV.base64Url('');
result = FNV.base36('');

result = FNV.hex([1, 2, 3]);
result = FNV.base64([1, 2, 3]);
result = FNV.base64Url([1, 2, 3]);
result = FNV.base36([1, 2, 3]);

const fnv = new FNV();
fnv.update([1, 2, 3]).update("abc");
result = fnv.digest('hex');
result = fnv.digest('base36');
result = fnv.digest('base64');
result = fnv.digest('base64Url');
const resultArray: number[] = fnv.digest();
