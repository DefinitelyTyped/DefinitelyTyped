/**
 * evalWith :: s -> m -> a
 */
declare function evalWith(a: object, b: object): object;
declare function evalWith(a: object): (b: object) => object;

export default evalWith;
