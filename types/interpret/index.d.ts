// Type definitions for interpret 1.1
// Project: https://github.com/gulpjs/interpret
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Hook {
    (m: { extensions: string } | NodeModule): any;
    install(m?: { extension: string; [key: string]: any }): void;
}

export type RegisterFn = (hook: Hook) => void;

export interface ExtensionDescriptor {
    module: string;
    register: RegisterFn;
}

export type Extension = string | ExtensionDescriptor | Array<string | ExtensionDescriptor>;
export interface Extensions {
    [extension: string]: Extension | null;
}

export const extensions: Extensions;
export const jsVariants: Extensions;
