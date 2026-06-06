export function clear(): void;
/**
 * @example
 * import * as cache from 'global-cache';
 * import { strict as assert } from 'node:assert';
 *
 * const key = 'key';
 * const value = {};
 *
 * cache.set(key, value);
 * assert.equal(cache.has(key), true);
 *
 * cache.delete(key);
 * assert.equal(cache.has(key), false);
 */
export function _delete(key: unknown): boolean;
export { _delete as delete };
/**
 * @example
 * import * as cache from 'global-cache';
 * import { strict as assert } from 'node:assert';
 *
 * const key = 'key';
 * const value = {};
 * assert.equal(cache.get(key), undefined);
 *
 * cache.set(key, value);
 * assert.equal(cache.get(key), value);
 */
export function get(key: Primitive): unknown;
/**
 * @example
 * import * as cache from 'global-cache';
 * import { strict as assert } from 'node:assert';
 *
 * const key = 'key';
 * const value = {};
 * assert.equal(cache.has(key), false);
 *
 * cache.set(key, value);
 * assert.equal(cache.has(key), true);
 */
export function has(key: Primitive): boolean;
/**
 * @example
 * import * as cache from 'global-cache';
 * import { strict as assert } from 'node:assert';
 *
 * const key = 'key';
 * const value = {};
 * assert.equal(cache.has(key), false);
 *
 * cache.set(key, value);
 * assert.equal(cache.has(key), true);
 */
export function set(key: Primitive, value: unknown): boolean;
export function setIfMissingThenGet<T>(key: Primitive, valueThunk: () => T): T;

export type Primitive = number | string | boolean | bigint | symbol | null | undefined;
