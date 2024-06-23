/**
 * foldMap :: Semigroup s => (a -> s) -> m a -> s
 */
declare function foldMap(a: object, b: object): object;
declare function foldMap(a: object): (b: object) => object;

export default foldMap;
