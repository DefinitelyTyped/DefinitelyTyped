/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
declare function isEventSupported(eventNameSuffix: string, capture?: boolean): boolean;

declare namespace isEventSupported {}

export = isEventSupported;
