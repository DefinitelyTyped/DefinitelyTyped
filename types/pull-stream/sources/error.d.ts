import pull = require('..');

/**
 * Create a stream with no contents (it just ends immediately).
 */
declare function error(): pull.Source<never>;
export = error;
