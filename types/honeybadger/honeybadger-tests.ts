import Honeybadger = require('honeybadger');

Honeybadger.configure({
    apiKey: 'abcdef',
    developmentEnvironments: ['development'],
});

const err = Error('error');

Honeybadger.notify(err, function notifyCallback(err: Error, notice: any) {
    if (err) console.error(err);
    console.log(notice);
});

Honeybadger.setContext({
    user_id: 123,
});

Honeybadger.resetContext();

Honeybadger.resetContext({
    user_id: 123,
});

const other_hb = Honeybadger.factory({ apiKey: 'zxcvbnm' });
other_hb.notify('This will go to an alternate project.');

Honeybadger.onUncaughtException(err => {
    console.log(err);
});

function handler(event: any, context: any) {
    console.log('Event:', event);
    console.log('Context:', context);
    throw new Error('Something went wrong.');
    console.log("Shouldn't make it here.");
}

exports.handler = Honeybadger.lambdaHandler(handler);
