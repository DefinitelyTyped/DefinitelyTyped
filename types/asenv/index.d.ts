/// <reference types="node" />

export function getEnv(): string;

export function isDevelopment(): boolean;

export function isProduction(): boolean;

export function isTest(): boolean;

export function setEnv(env: string): void;

export function unlessProduction(handle: () => any): any;
