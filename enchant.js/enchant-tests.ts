/// <reference path="../node/node.d.ts" />
/// <reference path="enchant.d.ts" />

import fs = require('fs');

fs.readFile('bower_components/enchant/enchant.js', 'utf-8', function(err: any, code: string) {
	eval(code);
	enchant();
	var game = new Core(10, 10);
	console.log(game);
});
