import { NdArray } from "ndarray";

/**
 * Allocates a temporary ndarray
 */
export function malloc(shape: number[], dtype?: string): NdArray;

/**
 * Creates a scratch ndarray initialized to `0`
 */
export function zeros(shape: number[], dtype?: string): NdArray;

/**
 * Creates a scratch ndarray initialized to `1`
 */
export function ones(shape: number[], dtype?: string): NdArray;

/**
 * Creates a scratch ndarray initialized to `1` if all indices equal, `0` otherwise.
 */
export function eye(shape: number[], dtype?: string): NdArray;

/**
 * Releases a temporary ndarray
 */
export function free(array: NdArray): void;

/**
 * Creates a copy of an ndarray with row-major order.
 */
export function clone(array: NdArray): NdArray;

export as namespace pool;
