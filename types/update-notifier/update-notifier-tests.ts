import UpdateNotifier = require("update-notifier");

let notifier = UpdateNotifier();

if (notifier.update) {
	notifier.notify();
}

console.log(notifier.update);

// Also exposed as a class
notifier = new UpdateNotifier.UpdateNotifier({
	updateCheckInterval: 1000 * 60 * 60 * 24 * 7 // 1 week
});

if (notifier.update) {
    notifier.notify({ message: 'Update available: ' + notifier.update.latest });
}
