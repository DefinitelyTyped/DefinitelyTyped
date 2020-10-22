/**
 * The usage example is taken directly
 * from the package's README
 */

import flushable = require('flushable');

// prints a message to the console after 1 second
const operation = flushable(flushed => {
    const result = `I completed ${flushed ? 'early' : 'on time'}`;
}, 1000);

// true if the callback has not been executed
operation.pending();

// stops the callback from being executed
operation.cancel();

// immediately executes the callback
operation.flush();
