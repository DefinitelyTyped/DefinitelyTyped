import Maybe from './Maybe';

/**
 * getProp :: (String | Integer) -> a -> Maybe b
 */
declare function getProp(prop: string | number, val: object): Maybe;
declare function getProp(prop: string | number): (val: object) => Maybe;

export default getProp;
