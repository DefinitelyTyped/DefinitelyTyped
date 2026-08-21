/**
 * concat :: m a -> m a -> m a
 */
declare function concat(a: object, b: object): object;
declare function concat(a: object): (b: object) => object;

export default concat;
