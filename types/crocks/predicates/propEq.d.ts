/**
 * propEq :: (String | Integer) -> a -> Object -> Boolean
 */
declare function propEq(prop: string | number, val: unknown, obj: object): boolean;
declare function propEq(prop: string | number, val: unknown): (obj: object) => boolean;
declare function propEq(prop: string | number): (val: unknown) => (obj: object) => boolean;

export default propEq;
