/**
 * alt :: m a -> m a -> m a
 */
declare function alt(a: object, b: object): object;
declare function alt(a: object): (b: object) => object;

export default alt;
