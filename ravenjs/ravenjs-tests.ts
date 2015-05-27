/// <reference path="ravenjs.d.ts" />

var options: RavenOptions = {
    logger: 'my-logger',
    ignoreUrls: [
        /graph\.facebook\.com/i
    ],
    ignoreErrors: [
        'fb_xd_fragment'
    ],
    includePaths: [
        /https?:\/\/(www\.)?getsentry\.com/,
        /https?:\/\/d3nslu0hdya83q\.cloudfront\.net/
    ]
};

Raven.config('https://public@getsentry.com/1', options).install();

var throwsError = () => {
    throw new Error('broken');
};

try {
    throwsError();
} catch(e) {
    Raven.captureException(e);
    Raven.captureException(e, {tags: { key: "value" }});
}

Raven.context(throwsError);
Raven.context({tags: { key: "value" }}, throwsError);

setTimeout(Raven.wrap(throwsError), 1000);
Raven.wrap({logger: "my.module"}, throwsError)();

Raven.setUser({
    email: 'matt@example.com',
    id: '123'
});

Raven.captureMessage('Broken!');
Raven.captureMessage('Broken!', {tags: { key: "value" }});
