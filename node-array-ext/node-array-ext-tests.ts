/// <reference path="./node-array-ext.d.ts" />
import extensions = require("node-array-ext");

var array: Array<string> = [ "hello", "world", "test" ];
var result: string = "";
var finish = function(err?: Error) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(result);
	}
}
function each(i: number, element: string, next: (err?: Error) => void): void {
	setTimeout(function() {
		console.log("%s => %s", i, element);
		result += element + " ";
		next();
	}, 50 * (array.length - i));
}

extensions.asyncEach<string>(array, each, finish);
extensions.awaitEach<string>(array, each, finish);