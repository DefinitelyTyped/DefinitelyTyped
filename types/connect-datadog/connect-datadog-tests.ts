import connectDD = require('connect-datadog');
import hotShots = require('hot-shots');

// works with no options
const middleware = connectDD({});

// works with all options
const middleware2 = connectDD({
    stat: 'foo',
    path: true,
    base_url: true,
    method: true,
    protocol: true,
    response_code: true,
    tags: ['abc', 'def'],
    dogstatsd: new hotShots.StatsD({
        host: 'localhost',
    }),
});
