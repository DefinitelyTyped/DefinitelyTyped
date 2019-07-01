import { Block } from '../';

/**
 * Returns true if the parsed block is valid given the input content. A block
 * is considered valid if, when serialized with assumed attributes, the content
 * matches the original value.
 *
 * Logs to console in development environments when invalid.
 *
 * @param blockTypeOrName - Block type.
 * @param attributes - Parsed block attributes.
 * @param originalBlockContent - Original block content.
 */
export function isValidBlockContent<T>(
    blockTypeOrName: Block<T> | string,
    attributes: T,
    originalBlockContent: string
): boolean;
