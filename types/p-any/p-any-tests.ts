import got = require('got');
import pAny = require('p-any');

pAny([
    got.head('github.com').then(() => 'github'),
    got.head('google.com').then(() => 'google'),
    got.head('twitter.com').then(() => 'twitter'),
]).then(first => {
    let str: string = first;
});

pAny(new Set([
    got.head('github.com').then(() => 'github'),
    got.head('google.com').then(() => 'google'),
    got.head('twitter.com').then(() => 'twitter'),
]), {
    filter(str: string) {
        return true;
    }
}).then(first => {
    let str: string = first;
});

throw new pAny.AggregateError([]);
