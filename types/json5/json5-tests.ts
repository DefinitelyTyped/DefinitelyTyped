
import JSON5 = require('json5');

var obj = JSON5.parse("{ key:'val', 'key2':[0,1,2,] } //comment ");
var str = JSON5.stringify(obj, null, "\t");
console.log(str);

