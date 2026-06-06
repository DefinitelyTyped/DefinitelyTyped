/**
 * mreduce :: Monoid m, Foldable f => m -> f a -> a
 */
declare function mreduce(m: object, f: object): any;
declare function mreduce(m: object): (f: object) => any;

export default mreduce;
