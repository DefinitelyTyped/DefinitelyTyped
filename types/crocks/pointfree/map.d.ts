/**
 * map :: (a -> b) -> m a -> m b
 */
declare function map(a: object, b: object): object;
declare function map(a: object): (b: object) => object;

export default map;
