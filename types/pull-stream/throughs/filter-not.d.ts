import pull = require('..');

/**
 * Like `filter`, but remove items where the filter returns true.
 */
declare function filterNot<InOut>(test: (data: InOut) => boolean): pull.Through<InOut, InOut>;
export = filterNot;
