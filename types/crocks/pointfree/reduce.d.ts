/**
 * reduce :: (b -> a -> b) -> b -> m a -> b
 */
declare function reduce(a: object, b: object): object;
declare function reduce(a: object): (b: object) => object;

export default reduce;
