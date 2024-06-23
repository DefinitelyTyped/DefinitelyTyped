/**
 * init :: m a -> Maybe (m a)
 */
declare function init(a: object, b: object): object;
declare function init(a: object): (b: object) => object;

export default init;
