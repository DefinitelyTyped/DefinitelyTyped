/**
 * reduceRight :: (b -> a -> b) -> b -> m a -> b
 */
declare function reduceRight(a: object, b: object): object;
declare function reduceRight(a: object): (b: object) => object;

export default reduceRight;
