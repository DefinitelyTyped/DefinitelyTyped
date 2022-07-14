import { Interface as ReadlineInterface } from 'readline';

/**
 * Moves the cursor to the left.
 *
 * @param readLine
 * The readline-object.
 *
 * @param count
 * The number of columns to move the cursor.
 */
export const left: (readLine: ReadlineInterface, count: number) => void;

/**
 * Moves the cursor to the right.
 *
 * @param readLine
 * The readline-object.
 *
 * @param count
 * The number of columns to move the cursor.
 */
export const right: (readLine: ReadlineInterface, count: number) => void;

/**
 * Moves the cursor upwards.
 *
 * @param readLine
 * The readline-object.
 *
 * @param count
 * The number of lines to move the cursor.
 */
export const up: (readLine: ReadlineInterface, count: number) => void;

/**
 * Moves the cursor downwards.
 *
 * @param readLine
 * The readline-object.
 *
 * @param count
 * The number of lines to move the cursor.
 */
export const down: (readLine: ReadlineInterface, count: number) => void;

/**
 * Clears one or more lines.
 *
 * @param readLine
 * The readline-object.
 *
 * @param count
 * The number of lines to clear.
 */
export const clearLine: (readLine: ReadlineInterface, count: number) => void;
