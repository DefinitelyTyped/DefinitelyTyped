/**
 * first :: m (a -> b) -> m (Pair a c -> Pair b c)
 */
declare function first(a: object, b: object): object;
declare function first(a: object): (b: object) => object;

export default first;
