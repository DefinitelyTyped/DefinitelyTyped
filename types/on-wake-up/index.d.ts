// Type definitions for on-wake-up 1.0
// Project: https://github.com/mafintosh/on-wake-up
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Register a callback when the device presumably wakes up from sleep.
 * @param cb The callback to execute
 * @returns Function to unregister the callback
 */
declare function onWakeUp(cb: () => void): () => void;

export = onWakeUp;
