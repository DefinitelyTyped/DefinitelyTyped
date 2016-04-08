/// <reference path="ftp.d.ts" />
/// <reference path="../node/node.d.ts" />

import Client = require("ftp");
import fs = require("fs");

var c = new Client();
c.on('ready', (): void => {
	c.get('foo.txt', function(err: Error, stream: NodeJS.ReadableStream): void {
		if (err) throw err;
		stream.once('close', function(): void { 
			c.end(); 
		});
		stream.pipe(fs.createWriteStream('foo.local-copy.txt'));
	});
});
// connect to localhost:21 as anonymous
c.connect();

c.connect({
	host: "127.0.0.1",
	port: 21,
	user: "Boo",
	password: "secret"
});


  
