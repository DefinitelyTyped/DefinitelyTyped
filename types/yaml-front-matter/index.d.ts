/// <reference types="node" />

import { LoadOptions } from "js-yaml";

export function loadFront(
    content: string | Buffer,
    options?: LoadOptions,
): {
    readonly [key: string]: any;
    readonly __content: string;
};

export function loadFront<contentKeyName extends string>(
    content: string | Buffer,
    options: LoadOptions & { contentKeyName: contentKeyName },
):
    & {
        readonly [key in contentKeyName]: string;
    }
    & {
        readonly [key: string]: any;
    };

export function safeLoadFront(
    content: string | Buffer,
    options?: LoadOptions,
): {
    readonly [key: string]: any;
    readonly __content: string;
};

export function safeLoadFront<contentKeyName extends string>(
    content: string | Buffer,
    options: LoadOptions & { contentKeyName: contentKeyName },
):
    & {
        readonly [key in contentKeyName]: string;
    }
    & {
        readonly [key: string]: any;
    };
