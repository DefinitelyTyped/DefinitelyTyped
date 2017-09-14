import findup = require('findup-sync');

var str: string;

str = findup('foo');
str = findup(['foo', 'bar']);

str = findup('foo', {
	debug: true
});

str = findup('foo', {
	cwd: "c:\\"
});
