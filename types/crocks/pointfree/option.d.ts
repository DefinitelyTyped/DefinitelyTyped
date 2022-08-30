/**
 * option :: a -> m a -> a
 */
declare function option(a: object, b: object): object;
declare function option(a: object): (b: object) => object;

export default option;
