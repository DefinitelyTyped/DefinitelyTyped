import Airbrake = require('airbrake-js');

// examples adapted from airbrake-js readme
let airbrake = new Airbrake({
    projectId: 1,
    projectKey: 'REPLACE_ME',
    environment: 'production',
});

const promise = airbrake.notify('user id=potato not found');
promise.then(notice => {
    if (notice.id) {
        // console.log('notice id', notice.id);
    } else {
        // console.log('notify failed', notice.error);
    }
});

try {
    throw new Error('sad!');
} catch (err) {
    airbrake.notify(err);
}

let startApp = () => {
    if ('hello'.includes('hello')) {
        throw new Error('sad!');
    }
};
startApp = airbrake.wrap(startApp);

startApp = () => {
    if ('hello'.includes('hello')) {
        throw new Error('sad!');
    }
};
airbrake.call(startApp);

try {
    startApp();
} catch (err) {
    airbrake.notify({
        error: err,
        context: { component: 'bootstrap' },
        environment: { env1: 'value' },
        params: { param1: 'value' },
        session: { session1: 'value' },
    });
    throw err;
}

const err = new Error('sad!');
airbrake.notify({
    error: err,
    context: { severity: 'warning' },
});

airbrake.addFilter(notice => {
    if (notice.params.admin) {
        // Ignore errors from admin sessions.
        return null;
    }
    return notice;
});
airbrake.addFilter(notice => {
    notice.context.environment = 'production';
    notice.context.version = '1.2.3';
    return notice;
});

airbrake = new Airbrake({
    keysBlacklist: [
        'password', // exact match
        /secret/, // regexp match
    ],
    instrumentation: {
        console: false,
    },
    request: () => {},
    ignoreWindowError: true,
});
