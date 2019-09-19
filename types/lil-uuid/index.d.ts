// Type definitions for lil-uuid 0.1
// Project: https://github.com/lil-js/uuid
// Definitions by: Pr1st0n <https://github.com/Pr1st0n>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generate a random UUID
 *
 * @returns UUID string.
 */
export function uuid(): string;

/**
 * Check if a given string has a valid UUID format. It supports multiple version (3, 4 and 5).
 *
 * @param uuid UUID string.
 * @returns True if string is valid UUID, false otherwise.
 */
export function  isUUID(uuid: string): boolean;
