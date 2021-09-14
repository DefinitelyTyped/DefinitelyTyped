// Type definitions for @nick-thompson/elementary 0.9
// Project: https://www.elementary.audio/
// Definitions by: Hrle97 <https://github.com/Hrle97>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

import * as _el from './src';

/**
 * The main export of Elementary. Use the {@link el.Elementary} type for the
 * type of variable passed to other functions and {@link el.Core} type for the
 * type of elementary.core from the global namespace.
 *
 * You can use the example as a template for setting up Elementary properly.
 *
 * @example
 *     import * as el from '@nick-thompson/elementary';
 *     declare const global: any;
 *     const core: el.Core = global.elementary.core;
 *
 *     function render(core: el.Core, el: el.Elementary)
 *     {
 *         // Your code goes here
 *         core.render(el.phasor(440));
 *     }
 *
 *     core.on('load', () => render(core, el));
 *
 *     export { core };
 *
 * @see el.Elementary
 * @see el.Core
 */
import el = _el;

export = el;
