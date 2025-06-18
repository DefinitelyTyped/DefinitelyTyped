/**
 * Util for making a list of items partials from a generic
 */
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
