// Type definitions for hook-std 1.1
// Project: https://github.com/sindresorhus/hook-std
// Definitions by: Alex Miller <https://github.com/codex->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Writable } from 'stream';

/**
 * unhook() method which, when called, unhooks both stdout and stderr and
 * resolves the Promise with an empty result.
 */
export type Unhook = () => void;

/**
 * Receives stdout/stderr as the first argument and the unhook method as the
 * second argument. Return a string to modify it.
 *
 * Optionally, when in silent mode, you may return a boolean to influence
 * the return value of .write(...).
 */
export type Transform = (output: string, unhook: Unhook) => void;

/**
 * Options for hook-std
 */
export interface Options {
    /** Suppress stdout/stderr output. */
    silent?: boolean;
    /** Automatically unhooks after the first call. */
    once?: boolean;
    /**
     * Writable streams to hook. This can be useful for libraries allowing
     * users to configure a Writable Stream to write to.
     */
    streams?: Writable[];
}

/**
 * Promise with a unhook() method which, when called, resolves the Promise
 * with an empty result.
 */
export interface PromiseUnhook extends Promise<any> {
    unhook: () => void;
}

/**
 * Hook streams in streams option, by default stdout and stderr.
 *
 * Returns a Promise with a unhook() method which, when called, unhooks
 * both stdout and stderr and resolves the Promise with an empty result.
 */
export function stdout(transform: Transform): PromiseUnhook;
export function stdout(opts: Options, transform: Transform): PromiseUnhook;
export function stderr(transform: Transform): PromiseUnhook;
export function stderr(opts: Options, transform: Transform): PromiseUnhook;
