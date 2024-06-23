/**
 * valueOf :: m a -> a
 */
declare function valueOf(a: object, b: object): object;
declare function valueOf(a: object): (b: object) => object;

export default valueOf;
