/**
 * hasProp :: (String | Integer) -> a -> Boolean
 */
declare function hasProp(prop: string | number, val: unknown): boolean;
declare function hasProp(prop: string | number): (val: unknown) => boolean;

export default hasProp;
