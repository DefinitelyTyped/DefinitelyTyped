var path = require('path');
var fs = require('fs');

function readJSON(target) {
	return JSON.parse(fs.readFileSync(target, 'utf8'));
}

function getSemFloat(str) {
	var m = /^[^\d]*(\d+)\.(\d+)/.exec(str);
	return parseFloat(m[1] + '.' + m[2]);
}

var repo = readJSON(path.resolve(__dirname, '..', 'package.json'));

var testerPath = path.resolve(__dirname, '..', 'node_modules', 'definition-tester', 'package.json');

// ultra lame semver major/minor check
if (!fs.existsSync(testerPath) || getSemFloat(repo.dependencies['definition-tester']) > getSemFloat(readJSON(testerPath).version)) {
	console.log('DefinitelyTyped tester needs an update!\n\n   please run \'npm install\'\n');
	process.exit(1);
}

require('definition-tester');
