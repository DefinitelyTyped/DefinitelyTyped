/// <reference types="node" />


import fs = require('fs');

fs.readFile('to-title-case.js', 'utf-8', function(err: any, code: string) {
	eval(code);
	var lowerCase: string = 'this title is in lowercase and will be title case';
	console.log(lowerCase.toTitleCase()); // Now in title case.
});
