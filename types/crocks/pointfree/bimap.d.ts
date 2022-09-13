/**
 * bimap :: (a -> c) -> (b -> d) -> m a b -> m c d
 */
declare function bimap(a: object, b: object): object;
declare function bimap(a: object): (b: object) => object;

export default bimap;
