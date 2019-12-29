import * as Loggly from 'loggly';

let options: Loggly.LogglyOptions  = {
    token: 'YOUR_TOKEN',
    subdomain: 'YOUR_DOMAIN',
    tags: ['NodeJS'],
    json: true,
    auth: {
        username: 'your-username',
        password: 'your-password',
    },
};

let client: Loggly.LogglyInstance = Loggly.createClient(options);


// Logging
client.log('hello world');

client.log('127.0.0.1 - Theres no place like home', function (err, result) {
    // Do something once you've logged
});

client.log('127.0.0.1 - Theres no place like home');

client.log('127.0.0.1 - Theres no place like home', ['dorothy'], function (err, result) {
    // Do something once you've logged
});

let source = {
    foo: 1,
    bar: 2,
    buzz: 3,
};

client.log(source);

// Searching
client.search('404', function (err, results) {
    // Inspect the result set
    console.dir(results.events);
});

client.search({ query: '404', rows: 10 }).run(function (err, results) {
  // Inspect the result set
  console.dir(results.events);
});
