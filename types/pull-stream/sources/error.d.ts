import pull = require('..');

/**
 * Create a stream with no contents (it just ends immediately).
 */
declare function error(err: pull.EndOrError): pull.Source<never>;
export = error;
