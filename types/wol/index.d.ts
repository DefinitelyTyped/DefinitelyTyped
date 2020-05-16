// Type definitions for wol 1.0
// Project: https://github.com/song940/wake-on-lan#readme
// Definitions by: Ovidiu Pruteanu <https://github.com/ovidiupruteanu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace wol

export function wake(
    mac: string,
    options?: { address?: string, port?: number },
    callback?: (error: Error) => void,
): Promise<boolean>;

export function createMagicPacket(mac: string): Buffer;
