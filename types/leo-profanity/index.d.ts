// Type definitions for leo-profanity 1.5
// Project: https://github.com/jojoee/leo-profanity (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Jack Humphries <https://github.com/jackhumphries9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module has methods, declare them as functions like so.
 */
export function loadDictionary(lang: 'en' | 'fr'): void;
export function list(): string[];
export function check(text: string): boolean;
export function clean(text: string, replaceKey?: string): string;
export function add(word: string | string[]): void;
export function remove(word: string | string[]): void;
export function reset(): void;
export function clearList(): void;
