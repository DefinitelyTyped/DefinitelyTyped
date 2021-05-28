import findup = require('findup-sync');

// $ExpectType string | null
findup('foo');
// $ExpectType string | null
findup(['foo', 'bar']);
// $ExpectType string | null
findup('foo', {
    matchBase: true,
});
// $ExpectType string | null
findup('foo', {
    cwd: 'c:\\',
});
// $ExpectType string | null
findup('{a,b}*.txt');
// $ExpectType string | null
findup('{a,b}*.txt', { cwd: '/some/path', nocase: true });
