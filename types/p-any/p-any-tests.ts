import got = require('got');
import pAny = require('p-any');

pAny([
    got.head('github.com').then(() => 'github'),
    got.head('google.com').then(() => 'google'),
    got.head('twitter.com').then(() => 'twitter'),
]).then(first => {
    let str: string = first;
});
