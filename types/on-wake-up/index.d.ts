/**
 * Register a callback when the device presumably wakes up from sleep.
 * @param cb The callback to execute
 * @returns Function to unregister the callback
 */
declare function onWakeUp(cb: () => void): () => void;

export = onWakeUp;
