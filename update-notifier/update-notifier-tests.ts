
import { UpdateNotifier } from "update-notifier";

var notifier = new UpdateNotifier();

if (notifier.update) {
	notifier.notify();
}

console.log(notifier.update);

var notifier = new UpdateNotifier({
	updateCheckInterval: 1000 * 60 * 60 * 24 * 7 // 1 week
});

if (notifier.update) {
    notifier.notify({ message: 'Update available: ' + notifier.update.latest });
}
