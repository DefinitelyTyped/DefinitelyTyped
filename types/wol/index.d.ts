/// <reference types="node" />

export as namespace wol;

export type WakeCallback = (error: Error | null, result?: boolean) => void;

export interface WakeOptions {
    address?: string | undefined;
    port?: number | undefined;
}

export function wake(mac: string, callback: WakeCallback): Promise<boolean>;
export function wake(mac: string, options?: WakeOptions, callback?: WakeCallback): Promise<boolean>;

export function createMagicPacket(mac: string): Buffer;
