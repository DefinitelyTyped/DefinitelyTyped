import type { ComponentType } from 'react';
import type { DevtoolsProps, Store, Wall, FrontendBridge } from './commons';

export * from './commons';

export interface Config {
    checkBridgeProtocolCompatibility?: boolean | undefined;
    supportsNativeInspection?: boolean | undefined;
    supportsProfiling?: boolean | undefined;
    isProfiling?: boolean | undefined;
    supportsReloadAndProfile?: boolean | undefined;
    supportsTimeline?: boolean | undefined;
    supportsTraceUpdates?: boolean | undefined;
}

export function createStore(bridge: FrontendBridge, config?: Config): Store;
export function createBridge(contentWindow: Window, wall?: Wall): FrontendBridge;

export function initialize(
    contentWindow: Window,
    options?: {
        bridge?: FrontendBridge | undefined;
        store?: Store | undefined;
    },
): ComponentType<DevtoolsProps>;
