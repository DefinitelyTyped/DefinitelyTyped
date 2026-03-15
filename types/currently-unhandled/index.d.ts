/**
 * Track the list of currently unhandled promise rejections.
 *
 * @returns A function that returns an array of currently unhandled rejections
 */
declare function currentlyUnhandled(): () => Array<{ reason: any; promise: Promise<any> }>;

export = currentlyUnhandled;
