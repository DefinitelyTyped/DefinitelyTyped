/**
 * both :: m (a -> b) -> m (Pair a a -> Pair b b)
 */
declare function both(a: object, b: object): object;
declare function both(a: object): (b: object) => object;

export default both;
