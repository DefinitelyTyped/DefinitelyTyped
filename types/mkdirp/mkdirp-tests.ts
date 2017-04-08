
import mkdirp = require('mkdirp');

var str: string;
var num: number;

mkdirp(str, num, (err, made) => {
	str = made;
});
mkdirp(str, (err, made) => {
	str = made;
});

str = mkdirp.sync(str, num);
str = mkdirp.sync(str);