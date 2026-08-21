/**
 * hasProps :: Foldable f => f (String | Integer) -> a -> Boolean
 */
declare function hasProps(props: ReadonlyArray<string | number>, val: unknown): boolean;
declare function hasProps(props: ReadonlyArray<string | number>): (val: unknown) => boolean;

export default hasProps;
