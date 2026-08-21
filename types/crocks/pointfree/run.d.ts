/**
 * run :: m a -> b
 */
declare function run(a: object, b: object): object;
declare function run(a: object): (b: object) => object;

export default run;
