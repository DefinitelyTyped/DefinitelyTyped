/// <reference path="checksum.d.ts" />

import checksum = require("checksum");

var s: string = checksum("abcd");
var t: string = checksum("abcd", { algorithm: 'sha1' });

checksum.file("myfile.txt", (error: Error, hash: string): void => {
	// do nothing
});

checksum.file("myfile.txt", { algorithm: 'sha1' }, (error: Error, hash: string): void => {
	// do nothing
});
