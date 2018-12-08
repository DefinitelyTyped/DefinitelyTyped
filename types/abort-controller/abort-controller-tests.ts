import AbortController = require('abort-controller');

const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener('abort', () => {
    console.log('aborted!');
});

controller.abort();
