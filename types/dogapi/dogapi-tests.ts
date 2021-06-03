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

// metric.send_all
// one metric
// single point without date
dogapi.metric.send_all(
    [
        {
            metric: 'metricName',
            points: 500,
        },
    ],
    (err: Error | null, res: dogapi.EventCreateResponse) => {},
);

// multiple metric
dogapi.metric.send_all(
    [
        {
            metric: 'metricOne',
            points: 500,
        },
        {
            metric: 'metricTwo',
            points: 200,
        },
    ],
    (err: Error | null, res: dogapi.EventCreateResponse) => {},
);

// multi point without date
// tags
dogapi.metric.send_all(
    [
        {
            metric: 'metricName',
            points: [500, 600],
            tags: ['tag1', 'tag2'],
        },
    ],
    (err: Error | null, res: dogapi.EventCreateResponse) => {},
);

// multi point with date
// metric_type
dogapi.metric.send_all(
    [
        {
            metric: 'metricName',
            points: [
                ['123', 500],
                ['124', 600],
            ],
            metric_type: 'type',
        },
    ],
    (err: Error | null, res: dogapi.EventCreateResponse) => {},
);
