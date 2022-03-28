/**
 * bichain :: (a -> m c d) -> (b -> m c d) -> m a b -> m c d
 */
declare function bichain(a: object, b: object): object;
declare function bichain(a: object): (b: object) => object;

export default bichain;
