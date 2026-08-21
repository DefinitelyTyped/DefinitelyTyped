/**
 * reject :: ((a -> Boolean) | Pred a) -> m a -> m a
 */
declare function reject(a: object, b: object): object;
declare function reject(a: object): (b: object) => object;

export default reject;
