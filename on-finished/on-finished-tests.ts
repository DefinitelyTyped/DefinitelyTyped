/// <reference path="../node/node.d.ts" />
/// <reference path="./on-finished.d.ts" />

import events = require('events');
import OnFinished = require('on-finished');

function test_finished() {

	var e = new events.EventEmitter();

	var ret: NodeJS.EventEmitter = OnFinished.onFinished(e, () => {
		//callback
		});

	var finished: boolean = OnFinished.isFinished(e);
}
