import updateNotifier, { Package } from 'update-notifier';

declare const packageJson: Package;

let notifier = updateNotifier({
    pkg: packageJson,
});

if (notifier.update) {
    notifier.notify();
}

notifier.update; // $ExpectType UpdateInfo | undefined

// Also exposed as a class
notifier = updateNotifier({
    updateCheckInterval: 1000 * 60 * 60 * 24 * 7, // 1 week
});

if (notifier.update) {
    notifier.notify(); // test no options
    notifier.notify({}); // test empty object

    // test all options
    notifier.notify({
        message: 'Update available: ' + notifier.update.latest,
        defer: false,
        isGlobal: true,
        boxenOptions: {
            padding: 1,
            margin: {
                top: 1,
                bottom: 1,
                left: 2,
                right: 2,
            },
            align: 'center',
            borderColor: 'yellow',
            borderStyle: 'round',
        },
    });
}

(async () => {
    const update = await notifier.fetchInfo();
    update.current; // $ExpectType string
    update.latest; // $ExpectType string
    update.name; // $ExpectType string
    update.type; // $ExpectType "latest" | "major" | "minor" | "patch" | "prerelease" | "build"
    notifier.config.set('lastUpdateCheck', Date.now());
    if (update.type && update.type !== 'latest') {
        notifier.config.set('update', update);
    }
})();
