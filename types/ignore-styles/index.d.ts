// Type definitions for ignore-styles 5.0
// Project: https://github.com/bkonkle/ignore-styles
// Definitions by: Taiju Muto <https://github.com/tai2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types='node' />

export type Handler = (m: NodeModule, filename: string) => any;

export const DEFAULT_EXTENSIONS: string[];

export let oldHandlers: {
    [ext: string]: Handler
};

export function noOp(): void;

export function restore(): void;

export default function register(
    extensions?: string[],
    handler?: Handler
): void;
