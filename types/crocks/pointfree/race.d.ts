/**
 * race :: m e a -> m e a -> m e a
 */
declare function race(a: object, b: object): object;
declare function race(a: object): (b: object) => object;

export default race;
