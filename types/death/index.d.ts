// Type definitions for death 1.1
// Project: https://github.com/jprichardson/node-death
// Definitions by: Cameron Knight <https://github.com/ckknight>
//                 Pranay Prakash <https://github.com/pranaygp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type Signal = 'SIGINT' | 'SIGTERM' | 'SIGQUIT';

/**
 * Invokes a callback when a SIGINT, SIGTERM, or SIGQUIT is detected
 * on the current node process.
 * @param callback The callback to invoke
 * @returns A function to unsubscribe and prevent the callback from being invoked
 * @example
 *  ON_DEATH((signal) => {
 *    console.log('Oh no!');
 *  });
 * @example
 *  const OFF_DEATH = ON_DEATH((signal) => {
 *    console.log('Oh no!');
 *  });
 *  // later
 *  OFF_DEATH();
 */
declare function ON_DEATH(callback: (arg: Signal) => void): () => void;

/**
 * Invokes a callback when a SIGINT, SIGTERM, or SIGQUIT is detected
 * on the current node process. Configurable by the provided options.
 *
 * @param options
 * @returns A function to subscribe to the configured death detection
 * @example
 *  ON_DEATH({
 *    debug: true,
 *  })((signal) => {
 *    console.log('Oh no!');
 *  });
 * @example
 *  const OFF_DEATH = ON_DEATH({
 *    debug: true,
 *  })((signal) => {
 *    console.log('Oh no!');
 *  });
 *  // later
 *  OFF_DEATH();
 */
declare function ON_DEATH(options: {
    debug?: boolean;
    SIGINT?: boolean;
    SIGTERM?: boolean;
    SIGQUIT?: boolean;
    uncaughtException?: false;
}): (callback: (signal: Signal) => void) => () => void;

/**
 * Invokes a callback when a SIGINT, SIGTERM, or SIGQUIT is detected
 * on the current node process. Configurable by the provided options.
 *
 * @param options
 * @returns A function to subscribe to the configured death detection
 * @example
 *  ON_DEATH({
 *    debug: true,
 *    uncaughtException: true,
 *  })((signal) => {
 *    console.log('Oh no!');
 *  });
 * @example
 *  const OFF_DEATH = ON_DEATH({
 *    debug: true,
 *    uncaughtException: true,
 *  })((signal) => {
 *    console.log('Oh no!');
 *  });
 *  // later
 *  OFF_DEATH();
 */
declare function ON_DEATH(options: {
    debug?: boolean;
    SIGINT?: boolean;
    SIGTERM?: boolean;
    SIGQUIT?: boolean;
    uncaughtException: true;
}): (callback: (signalOrErr: Signal | Error, origin?: string) => void) => () => void;

export = ON_DEATH;
