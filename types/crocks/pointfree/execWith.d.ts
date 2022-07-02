/**
 * execWith :: s -> m -> s
 */
declare function execWith(a: object, b: object): object;
declare function execWith(a: object): (b: object) => object;

export default execWith;
