import type { BackendBridge, Wall } from './commons';

export * from './commons';

export function activate(contentWindow: Window, options?: { bridge?: BackendBridge | undefined }): void;
export function createBridge(contentWindow: Window, wall?: Wall): BackendBridge;
export function initialize(contentWindow: Window): void;
