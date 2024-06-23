/**
 * Returns true if the value is a v1 UUID
 * @param value The value to test
 */
export function v1(value: string): boolean;

/**
 * Returns true if the value is a v2 UUID
 * @param value The value to test
 */
export function v2(value: string): boolean;

/**
 * Returns true if the value is a v3 UUID
 * @param value The value to test
 */
export function v3(value: string): boolean;

/**
 * Returns true if the value is a v4 UUID
 * @param value The value to test
 */
export function v4(value: string): boolean;

/**
 * Returns true if the value is a v5 UUID
 * @param value The value to test
 */
export function v5(value: string): boolean;

/**
 * Returns true if the value is a nil UUID
 * @param value The value to test
 */
export function nil(value: string): boolean;

/**
 * Returns true for v1 - v5 UUID. Will return false for nil UUID
 * @param value The value to test
 */
export function anyNonNil(value: string): boolean;
