/**
 * chain :: (a -> m b) -> m a -> m b
 */
declare function chain(a: object, b: object): object;
declare function chain(a: object): (b: object) => object;

export default chain;
