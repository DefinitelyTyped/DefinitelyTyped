import Q = require('q-retry');

Q
    .retry(() => {
        return '';
    })
    .then(str => {
        str.charAt;
        return 0;
    })
    .retry(num => {
        num.toFixed;    
    })
    .retry(() => {

    }, 5)
    .retry(() => {

    }, (reason, retries) => {
        retries.toFixed;
    })
    .retry(() => {

    }, (reason, retries) => {
        retries.toFixed;
    }, 10)
    .retry(() => {
        return '';
    }, (reason, retries) => {

    }, {
        limit: 10,
        interval: 1000,
        maxInterval: 20000,
        intervalMultiplier: 1.5    
    })
    .then(str => {
        str.charAt;
    });