/**
 * pathEq :: [ String | Number ] -> a -> Object -> Boolean
 */
declare function pathEq(path: ReadonlyArray<string | number>, val: unknown, obj: object): boolean;
declare function pathEq(path: ReadonlyArray<string | number>, val: unknown): (obj: object) => boolean;
declare function pathEq(path: ReadonlyArray<string | number>): (val: unknown) => (obj: object) => boolean;

export default pathEq;
