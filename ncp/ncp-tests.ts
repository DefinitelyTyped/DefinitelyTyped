/// <reference path="ncp.d.ts" />

import ncp = require('ncp');
import stream = require('stream');

var opts: ncp.Options;
opts = {};
opts = {
	filter: /abc/
};
opts = {
	transform: (read: NodeJS.ReadableStream, write: NodeJS.WritableStream) => {

	}
};
opts = {
	clobber: false
};
opts = {
	stopOnErr: false
};
opts = {
	errs: new stream.Writable()
};

ncp.ncp('foo', 'bar', (err: Error) => {

});

ncp.ncp('foo', 'bar', opts, (err: Error) => {

});
