/**
 * Insert an item between array elements
 */
declare function knit<TOriginal, TInsert = TOriginal>(array: TOriginal[], item: TInsert): Array<TOriginal | TInsert>;

export { knit };
