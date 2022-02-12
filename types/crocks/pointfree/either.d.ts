/**
 * either :: (a -> c) -> (b -> c) -> m a b -> c
 */
declare function either(a: object, b: object): object;
declare function either(a: object): (b: object) => object;

export default either;
