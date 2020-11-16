import { CrawlerRequestResponse } from 'crawler';
import Crawler = require('crawler');

// Examples taken from README, edited

const c = new Crawler({
    maxConnections: 10,
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const typedRes: CrawlerRequestResponse = res;
            const $ = typedRes.$;
            console.log($('title').text());
        }
        done();
    },
});

c.queue('http://www.amazon.com');
c.queue(['http://www.google.com/', 'http://www.yahoo.com']);
c.queue([
    {
        uri: 'http://parishackers.org/',
        jQuery: false,
        callback: (error, res, done) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Grabbed', res.body.length, 'bytes');
            }
            done();
        },
    },
]);
c.queue([
    {
        html: '<p>This is a <strong>test</strong></p>',
    },
]);

// Another example

c.queue({
    uri: 'http://www.google.com',
    parameter1: 'value1',
    parameter2: 'value2',
    parameter3: 'value3',
    callback: (error, res, done) => {
        if (!error) {
            console.log(res.options.parameter1);
        }
        done();
    },
});

// Another example

new Crawler({
    encoding: null,
    jQuery: false,
    callback: (err, res, done) => {
        if (err) {
            console.error(err.stack);
        } else {
            console.log(res.options.filename, res.body);
        }
        done();
    },
});

// Another example

new Crawler({
    preRequest: (options, done) => {
        console.log(options);
        done();
    },
    callback: (err, res, done) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res.statusCode);
        }
    },
});

c.queue({
    uri: 'http://www.google.com',
    preRequest: (options, done) => {
        setTimeout(() => {
            console.log(options);
            done();
        }, 1000);
    },
});

// Another example

c.direct({
    uri: 'http://www.google.com',
    skipEventRequest: false,
    callback: (error, response) => {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    },
});

// More snippets from README

c.setLimiterProperty('limiterName', 'propertyName', 'value');

c.on('schedule', options => {
    options.proxy = 'http://proxy:port';
});

c.on('request', options => {
    options.qs.timestamp = new Date().getTime();
});

c.on('drain', () => {
    console.log('For example, release a connection to database.');
});

new Crawler({
    jQuery: true,
});

new Crawler({
    jQuery: 'cheerio',
});

new Crawler({
    jQuery: {
        name: 'cheerio',
        options: {
            normalizeWhitespace: true,
            xmlMode: true,
        },
    },
});

// Fixed vs rotating User-Agent strings

new Crawler({
    userAgent: 'UA-1',
});

const uaArray = ['UA-1', 'UA-2'];

new Crawler({
    rotateUA: true,
    userAgent: uaArray,
}).direct({
    uri: 'http://www.google.com',
    callback: (error, response) => {},
});

console.log(uaArray[0]); // is now 'UA-2'
