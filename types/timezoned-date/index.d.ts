// Type definitions for timezoned-date 3.0
// Project: https://github.com/thorn0/timezoned-date#readme
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns a constructor function compatible with Date bound to the specified offset.
 */
export function makeConstructor(offsetInMinutes: number): typeof Date;
