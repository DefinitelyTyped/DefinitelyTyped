// Type definitions for v8-callsites 1.2
// Project: https://github.com/stringparser/v8-callsites
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { CallSite } from "callsite";

/**
 * Captures a specific callstack.
 *
 * @param origin
 * The method to start to record.
 *
 * @returns
 * The captured callstack.
 */
declare function stack(origin?: (...args: any[]) => any): CallSite[];

/**
 * Captures a specific callstack.
 *
 * @param frames
 * The number of frames to capture.
 *
 * @param origin
 * The method to start to record.
 *
 * @returns
 * The captured callstack.
 */
declare function stack(frames: number, origin: (...args: any[]) => any): CallSite[];

export = stack;
