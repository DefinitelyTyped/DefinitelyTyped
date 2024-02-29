/**
 * setPath :: [ (String | Integer) ] -> a -> (Object | Array) -> (Object | Array)
 */
declare function setPath(path: ReadonlyArray<string | number>, val: unknown, obj: object): object;
declare function setPath(path: ReadonlyArray<string | number>, val: unknown): (obj: object) => object;

export default setPath;
