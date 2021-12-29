/**
 * extend :: (m a -> b) -> m a -> m b
 */
declare function extend(a: object, b: object): object;
declare function extend(a: object): (b: object) => object;

export default extend;
