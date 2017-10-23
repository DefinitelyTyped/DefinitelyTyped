
import mkdirp = require('mkdirp');

var str: string;
var num: number;
var opts = {
    mode: num,
    fs: {}
};

mkdirp(str, num, (err, made) => {
	str = made;
});
mkdirp(str, opts, (err, made) => {
	str = made;
});
mkdirp(str, (err, made) => {
	str = made;
});

str = mkdirp.sync(str, num);
str = mkdirp.sync(str, opts);
str = mkdirp.sync(str);
