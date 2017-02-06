import RavenJS from 'raven-js';

RavenJS.config('https://public@getsentry.com/1').install();


RavenJS.config(
    'https://public@getsentry.com/1', 
    {
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
    }
).install();

var throwsError = () => {
    throw new Error('broken');
};

try {
    throwsError();
} catch(e) {
    RavenJS.captureException(e);
    RavenJS.captureException(e, {tags: { key: "value" }});
}

RavenJS.context(throwsError);
RavenJS.context({tags: { key: "value" }}, throwsError);
RavenJS.context({extra: {planet: {name: 'Earth'}}}, throwsError);

setTimeout(RavenJS.wrap(throwsError), 1000);
RavenJS.wrap({logger: "my.module"}, throwsError)();
RavenJS.wrap({tags: {git_commit: 'c0deb10c4'}}, throwsError)();

RavenJS.setUserContext({
    email: 'matt@example.com',
    id: '123'
});

RavenJS.captureMessage('Broken!');
RavenJS.captureMessage('Broken!', {tags: { key: "value" }});

RavenJS.showReportDialog({
    eventId: 0815,
    dsn:'1337asdf',
    user: {
        name: 'DefenitelyTyped',
        email: 'df@ts.ms'
    }
});

RavenJS.setTagsContext({ key: "value" });

RavenJS.setExtraContext({ foo: "bar" });
