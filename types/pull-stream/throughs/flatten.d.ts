import pull = require('..');

/**
 * Turn a stream of streams or a stream of arrays into a stream of their items, (undoes group).
 */
declare function flatten<Out>(): pull.Through<ReadonlyArray<Out | pull.Source<Out> | pull.Through<any, Out>>, Out>;
export = flatten;
