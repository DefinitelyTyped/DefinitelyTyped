// Type definitions for asenv 1.1
// Project: https://github.com/a-labo/asenv#readme
// Definitions by: Remisery <https://github.com/remisery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function getEnv(): string;

export function isDevelopment(): boolean;

export function isProduction(): boolean;

export function isTest(): boolean;

export function setEnv(env: string): void;

export function unlessProduction(handle: () => any): any;
