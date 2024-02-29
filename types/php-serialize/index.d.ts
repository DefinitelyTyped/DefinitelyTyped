/// <reference types="node" />

export interface SerializeOptions {
    /** @default 'utf8' */
    readonly encoding?: "utf8" | "binary" | undefined;
}

export interface UnserializeOptions {
    /** @default true' */
    readonly strict?: boolean | undefined;
    /** @default 'utf8' */
    readonly encoding?: "utf8" | "binary" | undefined;
}

export function isSerialized(givenItem: any, strict?: boolean): boolean;

export function serialize(item: any, scope?: any, givenOptions?: SerializeOptions): string;

export function unserialize(item: string | Buffer, scope?: any, givenOptions?: UnserializeOptions): any;
