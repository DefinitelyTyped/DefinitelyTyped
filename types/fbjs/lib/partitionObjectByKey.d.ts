/**
 * Partitions the enumerable properties of an object into two objects, given a
 * whitelist `Set` for the first object. This is comparable to
 * `whitelistObjectKeys`, but eventually keeping all the keys. Returns a tuple
 * of objects `[first, second]`.
 */
declare function partitionObjectByKey(source: Object, whitelist: Set<string>): [Object, Object];

declare namespace partitionObjectByKey {}

export = partitionObjectByKey;
