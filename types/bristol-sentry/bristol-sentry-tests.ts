import bristolSentry = require('bristol-sentry');
import * as raven from 'raven';

let target = bristolSentry({
    client: {
        dsn: "wow.this.works"
    }
});

const log = bristolSentry.formatter({}, 'error', new Date(), [
    "hey",
    "whaddup",
    new Error("AHAHAHA"),
    "cool.",
    {message: "I'm a banana!"}]
);

target = bristolSentry({
    client: new raven.Client("cool dsn")
});
