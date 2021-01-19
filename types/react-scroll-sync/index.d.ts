// Type definitions for react-scroll-sync 0.8
// Project: https://github.com/okonet/react-scroll-sync
// Definitions by: Corné Dorrestijn <https://github.com/cornedor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface ScrollSyncProps {
    onSync?(el: Element): void;
    children: React.ReactNode;
    proportional?: boolean;
    vertical?: boolean;
    horizontal?: boolean;
    enabled?: boolean;
}

export interface ScrollSyncPaneProps {
    children: React.ReactNode;
    attachTo?: HTMLElement;
    group?: string;
    enabled?: boolean;
}

export const ScrollSync: React.FC<ScrollSyncProps>;
export const ScrollSyncPane: React.FC<ScrollSyncPaneProps>;
