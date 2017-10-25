import opn = require('opn');

const errorCallback = (err: Error) => {};

opn('foo');
opn('foo', null, errorCallback);

opn('foo', { app: 'bar' });
opn('foo', { app: ['bar', '--arg'] });
opn('foo', { app: 'bar', wait: false });
opn('foo', { app: ['bar', '--arg'], wait: false });

opn('foo', { app: 'bar' }, errorCallback);
opn('foo', { app: ['bar', '--arg'] }, errorCallback);
opn('foo', { app: 'bar', wait: false }, errorCallback);
opn('foo', { app: ['bar', '--arg'], wait: false }, errorCallback);
