import Environment = require("../..");
import createLogger = require("./log");

/**
 * Create a "sloppy" copy of an initial Environment object.
 * The focus of this method is on performance rather than correctly deep
 * copying every property or recreating a correct instance.
 * Use carefully and don't rely on `hasOwnProperty` of the copied environment.
 *
 * Every property are shared except the runLoop which is regenerated.
 *
 * @param initialEnv The Environment instance to duplicate.
 * @return A sloppy copy of the specified `Environment`.
 */
export function duplicateEnv(initialEnv: Environment): Environment;

/**
 * Creates a new `Logger`-instance.
 */
export let log: typeof createLogger;
