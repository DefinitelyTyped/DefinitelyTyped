/**
 * sequence :: Applicative TypeRep t, Apply f => (t | (b -> f b)) -> m (f a) -> f (m a)
 */
declare function sequence(a: object, b: object): object;
declare function sequence(a: object): (b: object) => object;

export default sequence;
