/**
 * coalesce :: (a -> c) -> (b -> c) -> m a b -> m _ c
 */
declare function coalesce(a: object, b: object): object;
declare function coalesce(a: object): (b: object) => object;

export default coalesce;
