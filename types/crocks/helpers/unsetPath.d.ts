/**
 * unsetPath :: [ (String | Integer) ] -> a -> a
 */
declare function unsetPath(path: ReadonlyArray<string | number>, obj: object): object;
declare function unsetPath(path: ReadonlyArray<string | number>): (obj: object) => object;

export default unsetPath;
