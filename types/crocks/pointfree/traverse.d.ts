/**
 * traverse :: Applicative TypeRep t, Apply f => (t | (c -> f c)) -> (a -> f b) -> m (f a) -> f (m b)
 */
declare function traverse(a: object, b: object): object;
declare function traverse(a: object): (b: object) => object;

export default traverse;
