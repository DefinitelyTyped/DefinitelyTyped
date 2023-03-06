/**
 * merge :: (a -> b -> c) -> m a b -> c
 */
declare function merge(a: object, b: object): object;
declare function merge(a: object): (b: object) => object;

export default merge;
