import * as minimalRequestPromise from 'minimal-request-promise';

// Default usage
const options = {
    method: 'POST',
    hostname: 'graph.facebook.com',
    path: '/v2.6/me/messages?access_token=fbAccessToken',
    port: 443,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        recipient: {
            id: 'recipient'
        },
        message: 'message'
    })
};

minimalRequestPromise(options)
    .then(response => {
        console.log('got response', response.body, response.headers);
    })
    .catch(response => {
        console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
    });

// GET method
minimalRequestPromise.get('https://vacationtracker.io')
    .then(response => {
        console.log('got response', response.body, response.headers);
    })
    .catch(response => {
        console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
    });

// POST method
const postOptions = {
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        recipient: {
            id: 'recipient'
        },
        message: 'message'
    })
};
minimalRequestPromise.post('https://graph.facebook.com/v2.6/me/messages?access_token=fbAccessToken', postOptions)
    .then(response => {
        console.log('got response', response.body, response.headers);
    })
    .catch(response => {
        console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
    });

// PUT method
const putOptions = {
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        cool: true
    })
};
minimalRequestPromise.put('https://vacationtracker.io', putOptions)
    .then(response => {
        console.log('got response', response.body, response.headers);
    })
    .catch(response => {
        console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
    });

// DELETE method
minimalRequestPromise.delete('https://vacationtracker.io')
    .then(response => {
        console.log('got response', response.body, response.headers);
    })
    .catch(response => {
        console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
    });
