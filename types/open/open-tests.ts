import open = require('open');

open('foo'); // $ExpectType Promise<ChildProcess>

open('foo', { app: 'bar' }); // $ExpectType Promise<ChildProcess>
open('foo', { app: ['bar', '--arg'] }); // $ExpectType Promise<ChildProcess>
open('foo', { app: 'bar', wait: false }); // $ExpectType Promise<ChildProcess>
open('foo', { app: 'bar', background: false }); // $ExpectType Promise<ChildProcess>
open('foo', { app: ['bar', '--arg'], wait: false }); // $ExpectType Promise<ChildProcess>
open('foo', { app: ['bar', '--arg'], background: false }); // $ExpectType Promise<ChildProcess>
