/**
 * runWith :: a -> m -> b
 */
declare function runWith(a: object, b: object): object;
declare function runWith(a: object): (b: object) => object;

export default runWith;
