/**
 * mconcat :: Monoid m, Foldable f => m -> f a -> m a
 */
declare function mconcat(m: object, f: object): object;
declare function mconcat(m: object): (f: object) => object;

export default mconcat;
