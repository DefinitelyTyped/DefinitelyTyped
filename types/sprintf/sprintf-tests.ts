
import sprintf = require('sprintf');

var str: string;
var num: number;

sprintf.sprintf(str, str);
sprintf.sprintf(str, str, num);
sprintf.sprintf(str, num, str);

sprintf.vsprintf(str, [str]);
sprintf.vsprintf(str, [str, num]);
sprintf.vsprintf(str, [num, str]);
