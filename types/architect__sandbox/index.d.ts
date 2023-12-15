import { Callback, StartOptions } from "./shared";
export { Callback, StartOptions };

export { events } from "./events";
export { http } from "./http";
export { tables } from "./tables";

/**
 * Starts the Sandbox; first checks that ports are available to consume, prints a banner, loads Architect and userland environment variables, hydrates application dependencies, and starts various
 * Sandbox services (including @events, @queues, @tables, @indexes, @http, @static and @ws). Unless you have specific per-service needs, we generally advise most folks use this interface for testing
 *
 * Invokes callback once everything is ready, or returns a promise if callback is falsy.
 */
export function start(opts?: StartOptions): Promise<string>;
export function start(opts: StartOptions | undefined, callback: Callback): void;

/**
 * Shuts down anything started by sandbox.start(). Invokes callback once shut down, or returns a promise if callback is falsy. Unless you have specific per-service needs, we generally advise most
 * folks use this interface for testing
 */
export function end(): Promise<string>;
export function end(callback: Callback): void;
