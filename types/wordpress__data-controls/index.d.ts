// Type definitions for @wordpress/data-controls 2.2
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/data-controls/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { APIFetchOptions } from '@wordpress/api-fetch';
import { Action } from '@wordpress/data';

/**
 * Dispatches a control action for triggering an api fetch call.
 *
 * @param request - Arguments for the fetch request.
 *
 * @example
 * ```js
 * import { apiFetch } from '@wordpress/data-controls';
 *
 * // Action generator using apiFetch
 * export function* myAction {
 *     const path = '/v2/my-api/items';
 *     const items = yield apiFetch( { path } );
 *     // do something with the items.
 * }
 * ```
 */
export function apiFetch(options: APIFetchOptions): unknown;

/**
 * What you use to register the controls with your custom store.
 *
 * @example
 * ```js
 * // WordPress dependencies
 * import { controls } from '@wordpress/data-controls';
 * import { registerStore } from '@wordpress/data';
 *
 * // Internal dependencies
 * import reducer from './reducer';
 * import * as selectors from './selectors';
 * import * as actions from './actions';
 * import * as resolvers from './resolvers';
 *
 * registerStore ( 'my-custom-store', {
 *     reducer,
 *     controls,
 *     actions,
 *     selectors,
 *     resolvers,
 * } );
 * ```
 *
 * @returns An object for registering the default controls with the store.
 */
export const controls: {
    API_FETCH: (action: Action) => Promise<any>;
    DISPATCH: (action: Action) => void;
    SELECT: (action: Action) => any;
};

/**
 * Deprecated in favor of the @wordpress/data dispatch method.
 *
 * Dispatches a control action for triggering a registry dispatch.
 *
 * @param storeKey - The key for the store the action belongs to
 * @param actionName - The name of the action to dispatch
 * @param args - Arguments for the dispatch action.
 *
 * @example
 * ```js
 * import { dispatch } from '@wordpress/data-controls';
 *
 * // Action generator using dispatch
 * export function* myAction {
 *     yield dispatch( 'core/edit-post' ).togglePublishSidebar();
 *     // do some other things.
 * }
 * ```
 */
export function dispatch(storeKey: string, actionName: string, ...args: any[]): void;

/**
 * Deprecated in favor of the @wordpress/data select method.
 *
 * Dispatches a control action for triggering a registry select.
 *
 * Note: when this control action is handled, it automatically considers selectors that may have a
 * resolver. It will await and return the resolved value when the selector has not been resolved
 * yet.
 *
 * @param storeKey - The key for the store the selector belongs to
 * @param selectorName - The name of the selector
 * @param args - Arguments for the select.
 *
 * @example
 * ```js
 * import { select } from '@wordpress/data-controls';
 *
 * // Action generator using select
 * export function* myAction {
 *     const isSidebarOpened = yield select( 'core/edit-post', 'isEditorSideBarOpened' );
 *     // do stuff with the result from the select.
 * }
 * ```
 */
export function select(storeKey: string, selectorName: string, ...args: any[]): void;
