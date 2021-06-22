import pull = require('..');

/**
 * Create an unending stream by repeatedly calling a generator function (by default, `Math.random`).
 */
declare function infinite<T = number>(generator?: () => T): pull.Source<T>;
export = infinite;
