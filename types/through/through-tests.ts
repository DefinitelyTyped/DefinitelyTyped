
import through = require('through');

var i = 0;
through(
	function () {
		this.queue((i++).toString());
	}, function () {
		this.queue(null);
	}, { autoDestroy: true }).pipe(process.stdout);
