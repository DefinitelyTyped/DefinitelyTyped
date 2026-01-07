/// <reference types="node" />

/**
 * Assert that argument are Exception
 */
export function isErrnoException(e: unknown): e is NodeJS.ErrnoException;
