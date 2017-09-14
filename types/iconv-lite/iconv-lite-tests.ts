// Code examples from iconv-lite README

import * as iconv from "iconv-lite";

import * as assert from "assert";
import * as fs from "fs";
import * as http from "http";

// Basic API
(() => {
	// Convert from an encoded buffer to js string.
	const str: string = iconv.decode(new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]), 'win1251');

	// Convert from js string to an encoded buffer.
	const buf: Buffer = iconv.encode("Sample input string", 'win1251');

	// Check if encoding is supported
	const exists: boolean = iconv.encodingExists("us-ascii");
})();

// Streaming API
(() => {
	// Decode stream (from binary stream to js strings)
	http.createServer(function(req, res) {
		var converterStream = iconv.decodeStream('win1251');
		req.pipe(converterStream);

		converterStream.on('data', function(str: string) {
			console.log(str); // Do something with decoded strings, chunk-by-chunk.
		});
	});

	// Convert encoding streaming example
	fs.createReadStream('file-in-win1251.txt')
		.pipe(iconv.decodeStream('win1251'))
		.pipe(iconv.encodeStream('ucs2'))
		.pipe(fs.createWriteStream('file-in-ucs2.txt'));

	// Sugar: all encode/decode streams have .collect(cb) method to accumulate data.
	http.createServer(function(req, res) {
		req.pipe(iconv.decodeStream('win1251')).collect(function(err, body) {
			assert(typeof body == 'string');
			console.log(body); // full request body string
		});
	});
})();

// Extend Node.js own encodings
(() => {
	iconv.extendNodeEncodings();
	iconv.undoExtendNodeEncodings();
})();
