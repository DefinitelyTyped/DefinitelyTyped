/**
 * ap :: m a -> m (a -> b) -> m b
 */
declare function ap(a: object, b: object): object;
declare function ap(a: object): (b: object) => object;

export default ap;
