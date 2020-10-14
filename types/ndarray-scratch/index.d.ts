// Type definitions for ndarray-scratch 1.2
// Project: https://github.com/mikolalysenko/ndarray-scratch
// Definitions by: Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ndarray = require("ndarray");

/**
 * Allocates a temporary ndarray
 */
export function malloc(shape: number[], dtype?: string): ndarray;

/**
 * Creates a scratch ndarray initialized to `0`
 */
export function zeros(shape: number[], dtype?: string): ndarray;

/**
 * Creates a scratch ndarray initialized to `1`
 */
export function ones(shape: number[], dtype?: string): ndarray;

/**
 * Creates a scratch ndarray initialized to `1` if all indices equal, `0` otherwise.
 */
export function eye(shape: number[], dtype?: string): ndarray;

/**
 * Releases a temporary ndarray
 */
export function free(array: ndarray): void;

/**
 * Creates a copy of an ndarray with row-major order.
 */
export function clone(array: ndarray): ndarray;

export as namespace pool;
