/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace base58;

/*~ If this module has methods, declare them as functions like so.
 */
export function base58_to_int(str: string): number
export function decode(str: string): number
export function int_to_base58(num: number): string
export function encode(num: number): string