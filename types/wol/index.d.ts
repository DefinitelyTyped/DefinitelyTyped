// Type definitions for wol 1.0
// Project: https://github.com/song940/wake-on-lan#readme
// Definitions by: ulrichb <https://github.com/ulrichb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface WakeOptions {
    readonly address?: string;
    readonly port?: number;
}

export function wake(mac: string, options?: WakeOptions): Promise<boolean>;
export function wake(mac: string, callback: (err: unknown, result: boolean) => void): void;
export function wake(mac: string, options: WakeOptions, callback: (err: unknown, result: boolean) => void): void;
