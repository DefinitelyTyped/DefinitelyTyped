import * as Raven from 'raven';

const dsn = '___DSN___';

const client = Raven.config(dsn, { autoBreadcrumbs: true }).install();
Raven.config(dsn, {
    logger: 'logger',
    parseUser: ['id', 'name'],
    autoBreadcrumbs: false,
});
console.log(Raven.version);

const transport = new Raven.transports.HTTPTransport();

Raven.config({
    release: 'foobar',
    transport
});

Raven.config({
  transport: Raven.transports.https
});

client.setContext({});
client.on('logged', () => { });
client.process({});
client.captureMessage('Broken!', (err, eventId) => { });
new Raven.Client({ name: 'YAY!' });
new Raven.Client(dsn, { name: 'YAY!' });
new Raven.Client(dsn);

try {
    throw new Error();
} catch (e) {
    const eventId = Raven.captureException(e, (sendErr, eventId) => { });
}

Raven.setContext({});
Raven.mergeContext({});
Raven.context(() => {
    Raven.captureBreadcrumb({});
});
setTimeout(Raven.wrap(() => {}), 1000);
Raven.utils.parseDSN('https://8769c40cf49c4cc58b51fa45d8e2d166:296768aa91084e17b5ac02d3ad5bc7e7@app.getsentry.com/269');
