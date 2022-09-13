import pull = require('..');

/**
 * Output the stream to `console.log`.
 */
declare function log(): pull.Sink<any>;
export = log;
