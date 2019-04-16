// Type definitions for cli-cursor 2.1
// Project: https://github.com/sindresorhus/cli-cursor#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Show cursor.
 *
 * @param stream defaults to `process.stderr`
 */
export function show(stream?: NodeJS.WritableStream): void;

/**
 * Hide cursor.
 *
 * @param stream defaults to `process.stderr`
 */
export function hide(stream?: NodeJS.WritableStream): void;

/**
 * Toggle cursor visibility.
 *
 * @param force is useful to show or hide the cursor based on a boolean.
 * @param stream defaults to `process.stderr`
 */
export function toggle(force?: boolean, stream?: NodeJS.WritableStream): void;
