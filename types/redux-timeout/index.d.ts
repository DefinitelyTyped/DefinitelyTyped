import { AnyAction, Middleware } from "redux";

/**
 * Add a timeout
 *
 * @param timeout Time in ms. Uses this value when initializing the setTimeout. This setTimeout will be cleared and recreated on any dispatches of action.
 * @param action Action or array of actions to watch for.
 * @param toCall Function to call when timeout is triggered.
 * @return Returns an add timeout action.
 */
export function addTimeout(timeout: number, action: string | string[], toCall: (...args: any) => void): AnyAction;

/**
 * Remove a timeout
 *
 * @param action Action or array of actions to remove from the watched list.
 * @return Returns a remove timeout action.
 */
export function removeTimeout(action: string | string[]): AnyAction;

/**
 * Creates a reduxTimeout middleware.
 *
 * @return Returns a middleware.
 */
export function reduxTimeout(): Middleware;

/**
 * Set as an action to watch and the middleware will watch for ANY actions that are dispatched.
 */
export const WATCH_ALL: string;
