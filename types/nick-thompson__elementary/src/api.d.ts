import * as _Elementary from './elementary';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';

/**
 * The Elementary namespace containing all Elementary functions and factories.
 *
 * The example demonstrates how to use this namespace properly.
 *
 * @example
 *     import * as el from '@nick-thompson/elementary';
 *     declare const global: any;
 *     const core: el.Core = global.elementary.core;
 *
 *     function render(core: el.Core, el: el.Elementary)
 *     {
 *         core.render(el.phasor(440));
 *     }
 *
 *     core.on('load', () => render(core, el));
 *
 *     export { core };
 *
 * @see el
 */
import ElementaryNamespace = _Elementary;

/**
 * Type of {@link ElementaryNamespace}.
 * When you import Elementary use this as the type of variable for it.
 *
 * The example demonstrates how to use this type properly.
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
 * @see el
 * @see ElementaryNamespace
 */
export type Elementary = typeof ElementaryNamespace;
