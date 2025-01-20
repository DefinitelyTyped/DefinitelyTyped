/**
 * setProp ::  (String | Integer) -> a -> (Object | Array) -> (Object | Array)
 */
declare function setProp(prop: string | number, val: unknown, obj: object): object;
declare function setProp(prop: string | number, val: unknown): (obj: object) => object;

export default setProp;
