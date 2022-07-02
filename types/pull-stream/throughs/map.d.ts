import pull = require('..');

/**
 * Returns a through stream that calls the given `fn` for each chunk of incoming data and outputs the return value, in the same order as before.
 */
declare function map<In, Out>(fn: (data: In) => Out): pull.Through<In, Out>;
export = map;
