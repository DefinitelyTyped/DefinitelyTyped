/**
 * cons :: a -> m a -> m a
 */
declare function cons(a: object, b: object): object;
declare function cons(a: object): (b: object) => object;

export default cons;
