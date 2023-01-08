// Type definitions for @selrond/knit 0.2
// Project: https://github.com/selrond/knit#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Insert an item between array elements
 */
declare function knit<TOriginal, TInsert = TOriginal>(array: TOriginal[], item: TInsert): Array<TOriginal | TInsert>;

export { knit };
