/**
 * Transforms any value to an array. If the provided value is already an array, it is returned unchanged.
 *
 */
export default function toArray<T>(data: T): [T];
export default function toArray<T>(data: T[]): T[];
