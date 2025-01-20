/**
 * unsetProp :: (String | Integer) -> a -> a
 */
declare function unsetProp(prop: string | number, obj: object): object;
declare function unsetProp(prop: string | number): (obj: object) => object;

export default unsetProp;
