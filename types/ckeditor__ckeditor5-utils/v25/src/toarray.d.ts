/**
 * Transforms any value to an array. If the provided value is already an array, it is returned unchanged.
 *
 */
type Return<T> = T extends any[] ? T : [T];
export default function toArray<T>(arg: T): Return<T>;
export {};
