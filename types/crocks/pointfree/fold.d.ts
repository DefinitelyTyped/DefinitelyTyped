/**
 * fold :: Semigroup s => m s -> s
 */
declare function fold(a: object, b: object): object;
declare function fold(a: object): (b: object) => object;

export default fold;
