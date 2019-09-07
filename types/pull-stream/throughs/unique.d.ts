import pull = require('..');

/**
 * Filter items that have a repeated value for `prop()`, by default, `prop = function (it) {return it }`, if `prop` is a string, it will filter nodes which have repeated values for that property.
 */
declare function unique<InOut>(prop?: ((data: InOut) => unknown) | keyof InOut): pull.Through<InOut, InOut>;
export = unique;
