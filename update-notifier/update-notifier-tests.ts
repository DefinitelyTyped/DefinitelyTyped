/// <reference path="./update-notifier.d.ts" />

import updateNotifier = require('update-notifier');

var notifier = updateNotifier();

if (notifier.update) {
	notifier.notify();
}

console.log(notifier.update);

var notifier = updateNotifier({
	updateCheckInterval: 1000 * 60 * 60 * 24 * 7 // 1 week
});

if (notifier.update) {
	notifier.notify('Update available: ' + notifier.update.latest);
}
