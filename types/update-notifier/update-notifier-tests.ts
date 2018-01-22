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
    notifier.notify(); // test no options
    notifier.notify({}); // test empty object

    // test all options
    notifier.notify({
        message: 'Update available: ' + notifier.update.latest,
        defer: false,
        isGlobal: true,
        boxenOpts: {
            padding: 1,
            margin: 1,
            align: 'center',
            borderColor: 'yellow',
            borderStyle: 'round',
        },
    });
}
