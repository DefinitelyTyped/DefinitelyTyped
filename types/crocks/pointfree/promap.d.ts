/**
 * promap :: (c -> a) -> (b -> d) -> m a b -> m c d
 */
declare function promap(a: object, b: object): object;
declare function promap(a: object): (b: object) => object;

export default promap;
