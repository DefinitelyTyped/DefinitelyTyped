/// <reference path="bufferstream.d.ts" />

import BufferStream = require('bufferstream')

var stream = new BufferStream({encoding:'utf8', size:'flexible'});
stream.enable();
stream.disable();
stream.split('//', ':');
stream.on('split', (chunk: any, token: any) => {
	console.log("got '%s' by '%s'", chunk.toString(), token.toString())
});
stream.write("buffer:stream//23");
console.log(stream.toString());

