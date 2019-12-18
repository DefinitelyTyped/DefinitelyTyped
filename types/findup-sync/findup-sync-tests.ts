import findup = require('findup-sync');

let str: string;

str = findup('foo');
str = findup(['foo', 'bar']);

str = findup('foo', {
    matchBase: true,
});

str = findup('foo', {
    cwd: 'c:\\',
});

str = findup('{a,b}*.txt');
str = findup('{a,b}*.txt', { cwd: '/some/path', nocase: true });
