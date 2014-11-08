/// <reference path="opn.d.ts" />

import opn = require('opn');

var errorCallback: (err: Error) => void;

opn('foo');
opn('foo', 'bar');
opn('foo', errorCallback);
opn('foo', 'bar', errorCallback);
