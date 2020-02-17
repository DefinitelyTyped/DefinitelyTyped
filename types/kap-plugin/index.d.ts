// Type definitions for kap-plugin 1.0
// Project: https://github.com/wulkano/kap/blob/master/docs/plugins.md
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import * as got from 'got';
import { JSONSchema7 } from 'json-schema';

export interface BuiltInConfig {
    accessToken?: string;
}

export interface ConfigStore<T> {
    get<K extends keyof T>(key: K): T[K];
}

export interface KapContext<T> {
    format: string;
    defaultFileName: string;
    filePath(): Promise<string>;
    config: ConfigStore<T & BuiltInConfig>;
    request: typeof got;
    copyToClipboard(text: string): void;
    notify(text: string, action?: () => void): void;
    setProgress(text: string, percentage: number): void;
    openConfigFile(): void;
    cancel(): void;
    waitForDeepLink(): Promise<string>;
}

export type Format = 'gif' | 'mp4' | 'webm' | 'apng';

// TS-3.4 compatible Omit<>:
export type ConfigSchema<TValue> = Pick<JSONSchema7, Exclude<keyof JSONSchema7, 'required' | 'default'>> & {
    required?: boolean;
    default?: TValue;
};

export interface KapShareService<T = unknown> {
    action(context: KapContext<T>): Promise<void>;
    title: string;
    formats: ReadonlyArray<Format>;
    config: { [K in keyof T]: ConfigSchema<T[K]> };
}
