/// <reference path="../node/node.d.ts" />
/// <reference path="./on-finished.d.ts" />

import events = require('events');
import onFinished = require('on-finished');

function test_finished() {

	var e = new events.EventEmitter();

	var ret: NodeJS.EventEmitter = onFinished(e, () => {
		//callback
		});

	var finished: boolean = onFinished.isFinished(e);
}
