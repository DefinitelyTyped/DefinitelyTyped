import got = require('got');
import pSome = require('p-some');

pSome([
    got.head('github.com').then(() => 'github'),
    got.head('google.com').then(() => 'google'),
    got.head('twitter.com').then(() => 'twitter'),
    got.head('medium.com').then(() => 'medium')
], {count: 2}).then(([first, second]) => {
    console.log(first, second);
});

pSome<string | number>([
    got.head('github.com').then(() => 1),
    got.head('google.com').then(() => 'google'),
], {count: 2}).then(([first, second]) => {
    const str: string | number = first;
});

pSome(new Set([
    got.head('github.com').then(() => 'github'),
    got.head('google.com').then(() => 'google'),
    got.head('twitter.com').then(() => 'twitter'),
    got.head('medium.com').then(() => 'medium')
]), {
    count: 3,
    filter(str: string) {
        return false;
    }
}).then(first => {
    const str: string[] = first;
});

throw new pSome.AggregateError([]);
