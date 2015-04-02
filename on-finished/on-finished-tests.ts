/// <reference path="on-finished.d.ts" />

function test_finished() {

	var msg = {};

	var ret = onFinished(msg, () => {
		//callback
		});

	var finished: boolean = isFinished(msg);
}
