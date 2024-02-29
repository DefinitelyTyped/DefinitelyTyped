/**
 * filter :: ((a -> Boolean) | Pred a) -> m a -> m a
 */
declare function filter(a: object, b: object): object;
declare function filter(a: object): (b: object) => object;

export default filter;
