// Type definitions for @nick-thompson/elementary v0.9.6
// Project: elementary
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>


import * as _el from './src';


/**
 * The main export of Elementary. Use the {@link el.Elementary} type for the
 * type of variable passed to other functions and {@link el.Core} type for the
 * type of elementary.core from the global namespace.
 *
 * Look at the examples to see how you could use these types properly.
 *
 * @example
 *     import * as el from '@nick-thompson/elementary';
 *     const core: el.Core = (global as any).elementary.core;
 *
 *     declare function render(core: el.Core, el: el.Elementary);
 *     render(core, el);
 *
 *     export { el, core };
 *
 *
 * @namespace el
 *
 * @see el.Elementary
 * @see el.Core
 */
import el = _el;


export = el;
