// Refer to documentation on https://github.com/percolatestudio/meteor-synced-cron#readme
// as well as source code in https://github.com/percolatestudio/meteor-synced-cron/blob/master/synced-cron-server.js

import * as later from "later";
import { SyncedCron } from "meteor/littledata:synced-cron";

///////////////////////////////////////////////////////////////////////////////
// SyncedCron.add()
///////////////////////////////////////////////////////////////////////////////

// @ts-expect-error
SyncedCron.add(); // Expected 1 arguments, but got 0. ts(2554)

// @ts-expect-error
SyncedCron.add({}); // Type '{}' is missing the following properties: name, schedule, job ts(2345)

const validAddOptions = {
    name: "Job name",
    schedule: (parser: later.ParseStatic) => parser.text("every hour"),
    job: () => null,
};

SyncedCron.add(validAddOptions);

SyncedCron.add({
    ...validAddOptions,
    persist: true,
});

///////////////////////////////////////////////////////////////////////////////
// SyncedCron.start()
///////////////////////////////////////////////////////////////////////////////

SyncedCron.start();

///////////////////////////////////////////////////////////////////////////////
// SyncedCron.nextScheduledAtDate()
///////////////////////////////////////////////////////////////////////////////

// @ts-expect-error
SyncedCron.nextScheduledAtDate(); // Expected 1 arguments, but got 0. ts(2554)

// $ExpectType Date
SyncedCron.nextScheduledAtDate("Job name");

///////////////////////////////////////////////////////////////////////////////
// SyncedCron.remove()
///////////////////////////////////////////////////////////////////////////////

// @ts-expect-error
SyncedCron.remove(); // Expected 1 arguments, but got 0. ts(2554)

SyncedCron.remove("Job name");

///////////////////////////////////////////////////////////////////////////////
// SyncedCron.stop()
///////////////////////////////////////////////////////////////////////////////

SyncedCron.stop();

///////////////////////////////////////////////////////////////////////////////
// SyncedCron.pause()
///////////////////////////////////////////////////////////////////////////////

SyncedCron.pause();

///////////////////////////////////////////////////////////////////////////////
// SyncedCron.config()
///////////////////////////////////////////////////////////////////////////////

SyncedCron.config();

SyncedCron.config({});

SyncedCron.config({
    log: true,
});

SyncedCron.config({
    collectionName: "foo",
});

SyncedCron.config({
    utc: true,
});

SyncedCron.config({
    collectionTTL: 1000,
});

SyncedCron.config({
    collectionTTL: undefined, // Unset to remove expiry
});

SyncedCron.config({
    logger: null,
});

SyncedCron.config({
    logger(opts) {
        opts.level;
        opts.message;
        opts.tag;
    },
});
