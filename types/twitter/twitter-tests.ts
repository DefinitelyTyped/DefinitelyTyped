import Twitter = require('twitter');
import { EventEmitter } from 'events';

let client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: '',
    site_stream_base: '',
});
client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    bearer_token: '',
    site_stream_base: '',
});

client.get('favorites/list', (error, tweets, response) => {
    if (error) throw error;
    // $ExpectType ResponseData
    tweets;
    // $ExpectType Response
    response;
});

client.post('statuses/update', { status: 'I Love Twitter' }, (error, tweet, response) => {
    if (error) throw error;
    // $ExpectType ResponseData
    tweet;
    // $ExpectType Response
    response;
});

client.post('statuses/update').then(tweet => {
    // $ExpectType ResponseData
    tweet;
});

client.post('statuses/update', { status: 'I Love Twitter' }).then(tweet => {
    // $ExpectType ResponseData
    tweet;
});

let stream: EventEmitter = client.stream('statuses/filter', { track: 'javascript' });
stream = client.stream('statuses/filter');

stream.on('data', event => {
    console.log(event && event.text);
});

stream.on('error', error => {
    throw error;
});

client.stream('statuses/filter', { track: 'javascript' }, stream => {
    // $ExpectType EventEmitter
    stream;

    stream.on('data', (event: any) => {
        console.log(event && event.text);
    });

    stream.on('error', (error: any) => {
        throw error;
    });
});
client.stream('statuses/filter', stream => {
    // $ExpectType EventEmitter
    stream;
});
