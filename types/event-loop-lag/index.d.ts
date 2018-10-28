// Type definitions for event-loop-lag 1.0.3
// Project: https://github.com/pebble/event-loop-lag
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



/**
 * Accepts a number of milliseconds representing how often to refresh the event loop lag measurement and returns a function you can call to receive the latest lag measurement in milliseconds.
 */
declare function lag(interval: number): () => number;

export = lag;
