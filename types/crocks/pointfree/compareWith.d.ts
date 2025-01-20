/**
 * compareWith :: a -> a -> m a -> b
 */
declare function compareWith(a: object, b: object): object;
declare function compareWith(a: object): (b: object) => object;

export default compareWith;
