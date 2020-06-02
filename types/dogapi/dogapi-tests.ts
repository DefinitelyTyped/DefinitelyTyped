import * as dogapi from 'dogapi';

dogapi.initialize({
    api_key: '',
    app_key: '',
});

dogapi.initialize({
    api_host: 'a',
    api_key: 'b',
    app_key: 'c',
});
dogapi.event.create('', '', (err: Error | null, res: dogapi.EventCreateResponse) => {});
dogapi.event.create(
    '',
    '',
    { date_happened: Math.floor(Date.now() / 1000) },
    (err: Error | null, res: dogapi.EventCreateResponse) => {},
);
