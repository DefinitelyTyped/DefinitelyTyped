// Type definitions for base64id 2.0
// Project: https://github.com/faeldt/base64id
// Definitions by: Shadman Kolahzary <https://github.com/Kolahzary>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0
/// <reference types="node" />

/**
 * Generates a base64 id
 */
export function generateId(): string;

/**
 * Get random bytes
 *
 * Uses a buffer if available, falls back to crypto.randomBytes
 */
export function getRandomBytes(bytes: number): Buffer;

export let bytesBuffer: Buffer;
export let bytesBufferIndex: number;
export let isGeneratingBytes: boolean;
export let sequenceNumber: number;
