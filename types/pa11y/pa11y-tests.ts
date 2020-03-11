import pa11y = require('pa11y');

pa11y('http://example.com/');

pa11y('http://example.com/', {
    log: {
        debug: console.log,
        error: console.error,
        info: console.info
    }
});

pa11y('http://example.com/', {
    actions: [
        'set field #username to exampleUser',
        'wait for url to be http://example.com/myaccount'
    ],
    log: {
        debug: console.log,
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    postData: 'foo=bar&bar=baz',
    rootElement: '#main'
});

pa11y.isValidAction('open the pod bay doors');
