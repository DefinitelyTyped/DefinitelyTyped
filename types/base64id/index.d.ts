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
