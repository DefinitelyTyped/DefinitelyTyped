import * as _Elementary from './elementary';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';


/**
 * The Elementary namespace containing all Elementary functions and factories.
 *
 * @namespace Elementary
 *
 * @see el
 */
import ElementaryNamespace = _Elementary;

/**
 * Type of {@link ElementaryNamespace}.
 * When you import Elementary use this as the type of variable for it.
 *
 * The following examples demonstrate how to use this type properly.
 *
 * @example
 *     import * as el from '@nick-thompson/elementary';
 *
 *     declare function render(el: el.Elementary);
 *     render(el);
 *
 *     export { el };
 *
 * @memberOf el
 * @typedef {typeof ElementaryNamespace}
 *
 * @see el
 * @see ElementaryNamespace
 */
export declare type Elementary = typeof ElementaryNamespace;
