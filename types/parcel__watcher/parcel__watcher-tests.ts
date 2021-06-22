import {
    subscribe,
    unsubscribe,
    getEventsSince,
    ParcelWatcherEvent,
    ParcelWatcherCallback,
    writeSnapshot,
    ParcelWatcherSubscription,
} from '@parcel/watcher';
import * as path from 'path';

const handler: ParcelWatcherCallback = (err?: Error, events?: ParcelWatcherEvent[]) => {
    if (err) {
        throw err;
    }
    console.log(events);
};

const subscriptionPromise = subscribe(process.cwd(), handler);

subscriptionPromise.then((subscription: ParcelWatcherSubscription) => {
    subscription.unsubscribe();
});

unsubscribe(process.cwd(), handler);

const snapshotPath = path.join(process.cwd(), 'snapshot.txt');

getEventsSince(process.cwd(), snapshotPath).then((events: ParcelWatcherEvent[]) => {
    console.log;
});

writeSnapshot(process.cwd(), snapshotPath, { backend: 'inotify' });
