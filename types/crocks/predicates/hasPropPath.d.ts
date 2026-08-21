/**
 * hasPropPath :: [ String | Integer ] -> a -> Boolean
 */
declare function hasPropPath(path: ReadonlyArray<string | number>, val: unknown): boolean;
declare function hasPropPath(path: ReadonlyArray<string | number>): (val: unknown) => boolean;

export default hasPropPath;
