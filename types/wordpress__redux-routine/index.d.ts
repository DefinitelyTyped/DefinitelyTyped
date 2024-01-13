import { AnyAction, Middleware } from "redux";

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
