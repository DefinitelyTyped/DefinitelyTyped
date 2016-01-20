/// <reference path="tmp.d.ts" />
import tmp = require('tmp');

tmp.file((err, path, fd, cleanupCallback) => {
	if (err) throw err;

	console.log("File: ", path);
	console.log("Filedescriptor: ", fd);

	cleanupCallback();
});

tmp.dir((err, path, cleanupCallback) => {
	if (err) throw err;

	console.log("Dir: ", path);

	cleanupCallback();
});

tmp.tmpName((err, path) => {
	if (err) throw err;

	console.log("Created temporary filename: ", path);
});

tmp.file({ mode: 644, prefix: 'prefix-', postfix: '.txt' }, (err, path, fd) => {
	if (err) throw err;

	console.log("File: ", path);
	console.log("Filedescriptor: ", fd);
});

tmp.dir({ mode: 750, prefix: 'myTmpDir_' }, (err, path) => {
	if (err) throw err;

	console.log("Dir: ", path);
});

tmp.tmpName({ template: '/tmp/tmp-XXXXXX' }, (err, path) => {
	if (err) throw err;

	console.log("Created temporary filename: ", path);
});

tmp.setGracefulCleanup();

var tmpobj = tmp.fileSync();
console.log("File: ", tmpobj.name);
console.log("Filedescriptor: ", tmpobj.fd);
tmpobj.removeCallback();

tmpobj = tmp.dirSync();
console.log("Dir: ", tmpobj.name);
tmpobj.removeCallback();

var name = tmp.tmpNameSync();
console.log("Created temporary filename: ", name);

tmpobj = tmp.fileSync({ mode: 644, prefix: 'prefix-', postfix: '.txt' });
console.log("File: ", tmpobj.name);
console.log("Filedescriptor: ", tmpobj.fd);

tmpobj = tmp.dirSync({ mode: 750, prefix: 'myTmpDir_' });
console.log("Dir: ", tmpobj.name);

var tmpname  = tmp.tmpNameSync({ template: '/tmp/tmp-XXXXXX' });
console.log("Created temporary filename: ", tmpname );