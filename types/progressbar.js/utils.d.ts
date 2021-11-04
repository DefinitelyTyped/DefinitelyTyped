/**
 * Copy all attributes from source object to destination object. `destination` object is mutated.
 */
export function extend<T, U>(target: T, source: U, recursive?: boolean): T & U;

/**
 * Renders templates with given variables. Variables must be surrounded with
 * braces without any spaces, e.g. {variable}
 * All instances of variable placeholders will be replaced with given content
 * @example
 * ```js
 * render('Hello, {message}!', {message: 'world'})
 * ```
 */
export function render(template: string, vars: { [key: string]: any }): string;

export function setStyle(element: Element, style: string, value: unknown): void;

export function setStyles(element: Element, styles: { [style: string]: unknown }): void;

export function capitalize(text: string): string;

export function isString(obj: any): boolean;

export function isFunction(obj: any): boolean;

export function isArray(obj: any): boolean;

export function isObject(obj: any): boolean;

export function forEachObject(obj: any, cb: (val: any, key: string) => void): void;

export function floatEquals(a: number, b: number): boolean;

export function removeChildren(el: Element): void;
