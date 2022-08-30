import Maybe from './Maybe';

/**
 * getPath :: [ (String | Integer) ] -> a -> Maybe b
 */
declare function getPath(path: ReadonlyArray<string | number>, val: object): Maybe;
declare function getPath(path: ReadonlyArray<string | number>): (val: object) => Maybe;

export default getPath;
