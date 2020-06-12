// Type definitions for wol 1.0
// Project: https://github.com/song940/wake-on-lan#readme
// Definitions by: Ovidiu Pruteanu <https://github.com/ovidiupruteanu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace wol

export type WakeCallback = (error: Error | null, result?: boolean) => void;

export interface WakeOptions {
    address?: string;
    port?: number;
}

export function wake(mac: string, callback: WakeCallback): Promise<boolean>;
export function wake(mac: string, options?: WakeOptions, callback?: WakeCallback): Promise<boolean>;

export function createMagicPacket(mac: string): Buffer;
