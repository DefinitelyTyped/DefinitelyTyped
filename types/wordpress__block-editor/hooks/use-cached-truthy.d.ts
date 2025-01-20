/**
 * Keeps an up-to-date copy of the passed value and returns it. If value becomes falsy, it will return the last truthy copy.
 *
 * @param value
 * @return value
 */
export function useCachedTruthy<T>(value: T): T;
