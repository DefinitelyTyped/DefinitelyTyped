/**
 * Accepts a number of milliseconds representing how often to refresh the event loop lag measurement and returns a function you can call to receive the latest lag measurement in milliseconds.
 */
declare function lag(interval: number): () => number;

export = lag;
