/**
 * second :: m (a -> b) -> m (Pair c a -> Pair c b)
 */
declare function second(a: object, b: object): object;
declare function second(a: object): (b: object) => object;

export default second;
