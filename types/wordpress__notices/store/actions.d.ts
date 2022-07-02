import { Status, Options } from '../';

/**
 * Yields action objects used in signalling that a notice is to be created.
 *
 * @param [status='info'] - Notice status.
 * @param content - Notice message.
 * @param [options={}] - Notice options.
 */
export function createNotice(status: Status | undefined, content: string, options?: Partial<Options>): void;

/**
 * Dispatches an action signalling that an error notice is to be created.
 *
 * @param content - Notice message.
 * @param [options] - Optional notice options.
 */
export function createErrorNotice(content: string, options?: Partial<Options>): void;

/**
 * Dispatches an action signalling that an info notice is to be created.
 *
 * @param content - Notice message.
 * @param [options] - Optional notice options.
 */
export function createInfoNotice(content: string, options?: Partial<Options>): void;

/**
 * Dispatches an action signalling that a success notice is to be created.
 *
 * @param content - Notice message.
 * @param [options] - Optional notice options.
 */
export function createSuccessNotice(content: string, options?: Partial<Options>): void;

/**
 * Dispatches an action signalling that a warning notice is to be created.
 *
 * @param content - Notice message.
 * @param [options] - Optional notice options.
 */
export function createWarningNotice(content: string, options?: Partial<Options>): void;

/**
 * Dispatches an action signalling that a notice is to be removed.
 *
 * @param id - Notice's unique identifier.
 * @param [context] - Optional context (grouping) in which the notice is intended to appear.
 */
export function removeNotice(id: string, context?: string): void;
