import pRetry = require('p-retry');
import fetch from 'node-fetch';

const run = () => fetch('https://sindresorhus.com/unicorn')
    .then(response => {
        // abort retrying if the resource doesn't exist
        if (response.status === 404) {
            throw new pRetry.AbortError(response.statusText);
        }

        return response.text();
    });

pRetry(run, {
    retries: 5,
    onFailedAttempt: error => {
        console.log(`Attempt ${error.attemptNumber} failed. There are ${error.attemptsLeft} attempts left.`);
    }
}).then(result => {
    const str: string = result;
});
