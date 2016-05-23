
import consoleStamp = require("console-stamp");

consoleStamp(console);

var options = {};
consoleStamp(console, options);

var options2 = {
	metadata: function ():string {
		return 'string';
	},
	colors: {
		stamp: "yellow",
		label: "white",
		metadata: "green"
	},
	label: true
};
consoleStamp(console, options2);
