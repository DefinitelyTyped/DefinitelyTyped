import { Notice } from '../';

/**
 * Returns all notices as an array, optionally for a given context.
 *
 * @param [context='global'] - Optional grouping context.
 */
export function getNotices(context?: string): Notice[];
