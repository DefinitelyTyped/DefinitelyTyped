/**
 * Reads the contents of a file and returns it as a string.
 *
 * If the path is relative, it is resolved relative to the entry script file.
 *
 * @param path - Path to the file to read.
 * @returns The contents of the file.
 *
 * @example
 * export default function() {
 *   const data = read('data.json')
 *   console.log(data)
 * }
 */
export function read(path: string): string;

/**
 * Writes a string to a file at the given path.
 *
 * If the path is relative, it is resolved relative to the entry script file.
 * If the file does not exist, it will be created.
 * If the file exists, it will be overwritten.
 *
 * @param path - Path to the file to write.
 * @param s - The string content to write.
 *
 * @example
 * export default function() {
 *   writeString('data.json', 'Hello World')
 * }
 */
export function writeString(path: string, s: string): void;

/**
 * Appends a string to a file at the given path.
 *
 * If the path is relative, it is resolved relative to the entry script file.
 * If the file does not exist, it will be created.
 * If the file exists, the string will be appended.
 *
 * @param path - Path to the file to append to.
 * @param s - The string content to append.
 *
 * @example
 * export default function() {
 *   writeString('data.json', 'Hello')
 *   appendString('data.json', ' World')
 * }
 */
export function appendString(path: string, s: string): void;
