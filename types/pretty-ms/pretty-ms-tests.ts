import prettyMs = require('pretty-ms');

let str: string;
str = prettyMs(133);
str = prettyMs(1337, {compact: true});
str = prettyMs(1335669000, {verbose: true});
str = prettyMs(1335669000, {keepDecimalsOnWholeSeconds: true});
str = prettyMs(1335669000, {secDecimalDigits: 1});
str = prettyMs(1335669000, {msDecimalDigits: 2});
str = prettyMs(1335669000, {unitCount: 2});
str = prettyMs(1335669000, {separateMs: true});
str = prettyMs(1335669000, {formatSubMs: true});
str = prettyMs(new Date(2014, 0, 1, 10, 40).getTime() - new Date(2014, 0, 1, 10, 5).getTime());
