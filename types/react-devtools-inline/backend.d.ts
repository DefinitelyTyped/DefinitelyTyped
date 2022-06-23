import type { BackendBridge, Wall } from './commons';

export * from './commons';

export function activate(contentWindow: Window, options?: { bridge?: BackendBridge | undefined } | undefined): void;
export function createBridge(contentWindow: Window, wall?: Wall | undefined): BackendBridge;
export function initialize(contentWindow: Window): void;
