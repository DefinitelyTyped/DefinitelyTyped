/// <reference types='node' />

export type Handler = (m: NodeModule, filename: string) => any;

export const DEFAULT_EXTENSIONS: string[];

export let oldHandlers: {
    [ext: string]: Handler;
};

export function noOp(): void;

export function restore(): void;

export default function register(
    extensions?: string[],
    handler?: Handler,
): void;
