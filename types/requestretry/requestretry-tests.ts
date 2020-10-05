import request = require('requestretry');
import http = require('http');

// Promisified request function
request({
    url: 'https://api.example.com/v1/a/b',
    json: true,
    // The below parameters are specific to request-retry
    // (default) try 5 times
    maxAttempts: 5,
    // (default) wait for 5s before trying again
    retryDelay: 5000,
    // (default) retry on 5xx or network errors
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError
}).then(res => {
    // Body
});

// HTTPOrNetworkError strategy.
request({
    url: 'https://api.example.com/v1/a/b',
    json: true,
    // The below parameters are specific to request-retry
    // (default) try 5 times
    maxAttempts: 5,
    // (default) wait for 5s before trying again
    retryDelay: 5000,
    // (default) retry on 5xx or network errors
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError
}, (err, response, body) => {
    // Body.
});

// HttpError strategy.
request({
    url: 'https://api.example.com/v1/a/b',
    json: true,
    // The below parameters are specific to request-retry
    // (default) try 5 times
    maxAttempts: 5,
    // (default) wait for 5s before trying again
    retryDelay: 5000,
    // (default) retry on 5xx or network errors
    retryStrategy: request.RetryStrategies.HttpError
}, (err, response, body) => {
    // Body.
});

// NetworkError strategy.
request({
    url: 'https://api.example.com/v1/a/b',
    json: true,
    // The below parameters are specific to request-retry
    // (default) try 5 times
    maxAttempts: 5,
    // (default) wait for 5s before trying again
    retryDelay: 5000,
    // (default) retry on 5xx or network errors
    retryStrategy: request.RetryStrategies.NetworkError
}, (err, response, body) => {
    // Body.
});

// Custom strategy.
const CustomRetryStrategy = (err: Error, response: http.IncomingMessage, body: any): boolean => {
    // Return a boolean
    return true;
};

request({
    url: 'https://api.example.com/v1/a/b',
    json: true,
    // The below parameters are specific to request-retry
    // (default) try 5 times
    maxAttempts: 5,
    // (default) wait for 5s before trying again
    retryDelay: 5000,
    // (default) retry on 5xx or network errors
    retryStrategy: CustomRetryStrategy
}, (err, response, body) => {
    // Body.
});

const CustomDelayStrategy = (err: Error, response: http.IncomingMessage, body: any): number => {
    // Return a number
    return 100;
};

request({
    url: 'https://api.example.com/v1/a/b',
    json: true,
    // The below parameters are specific to request-retry
    // (default) try 5 times
    maxAttempts: 5,
    // (default) wait for 5s before trying again
    delayStrategy: CustomDelayStrategy,
}, (err, response, body) => {
    // Body.
});

// No options required
request({
    url: 'https://api.example.com/v1/a/b',
    json: true
}, (err, response, body) => {
    // Body.
});

// Define options
const options: request.RequestRetryOptions = {
    maxAttempts: 2,
    promiseFactory: (resolver: any) => {
        return new Promise(resolver);
    },
    retryDelay: 4,
    retryStrategy: (err: Error, response: http.IncomingMessage, body: any) => {
        return true;
    },
};
