/**
 * read :: m a b -> Pair a b
 */
declare function read(a: object, b: object): object;
declare function read(a: object): (b: object) => object;

export default read;
