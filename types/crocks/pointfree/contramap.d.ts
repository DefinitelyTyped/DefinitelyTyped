/**
 * contramap :: (b -> a) -> m a -> m b
 */
declare function contramap(a: object, b: object): object;
declare function contramap(a: object): (b: object) => object;

export default contramap;
