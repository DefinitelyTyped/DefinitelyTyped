// Tests based on examples from https://developers.scaleway.com/en/products/functions/api/#node

import { Callback, Context, Event, Handler } from 'scaleway-functions';

const handler1: Handler = () => {
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: 'async function',
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
};

const handler2: Handler = (event: Event, context: Context, callback: Callback) => {
    const response = {
        statusCode: 201,
        body: {
            message: 'async function',
        },
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        // Successful response
        callback(undefined, response);
    } catch (err) {
        // Error response
        callback(err);
    }
};

const handler3: Handler = async (event: Event, context: Context, callback: Callback) => {
    const response = {
        statusCode: 201,
        body: {
            message: 'async function',
        },
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return new Promise(resolve => {
        // do something
        resolve(response);
    });
};
