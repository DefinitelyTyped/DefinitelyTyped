// Type definitions for @wordpress/redux-routine 3.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/redux-routine/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { AnyAction, Middleware } from 'redux';

/**
 * Creates a Redux middleware, given an object of controls where each key is an action type for
 * which to act upon, the value a function which returns either a promise which is to resolve when
 * evaluation of the action should continue, or a value. The value or resolved promise value is
 * assigned on the return value of the yield assignment. If the control handler returns undefined,
 * the execution is not continued.
 *
 * @param controls - Object of control handlers.
 */
declare function createMiddleware(controls?: Record<string, (action: AnyAction) => any>): Middleware;

export default createMiddleware;
