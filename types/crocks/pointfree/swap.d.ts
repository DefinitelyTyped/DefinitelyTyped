/**
 * swap :: (c -> d) -> (a -> b) -> m c a -> m b d
 */
declare function swap(a: object, b: object): object;
declare function swap(a: object): (b: object) => object;

export default swap;
