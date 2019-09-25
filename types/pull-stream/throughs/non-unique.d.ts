import pull = require('..');

/**
 * Filter unique items -- get the duplicates. The inverse of `unique`.
 */
declare function nonUnique<InOut>(prop?: ((data: InOut) => unknown) | keyof InOut): pull.Through<InOut, InOut>;
export = nonUnique;
