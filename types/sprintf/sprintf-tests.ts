import sprintf = require('sprintf');

declare const str: string;
declare const num: number;

sprintf.sprintf(str, str); // $ExpectType string
sprintf.sprintf(str, str, num);
sprintf.sprintf(str, num, str);

sprintf.vsprintf(str, [str]); // $ExpectType string
sprintf.vsprintf(str, [str, num]);
sprintf.vsprintf(str, [num, str]);
