// Type definitions for react-scroll-sync 0.8
// Project: https://github.com/okonet/react-scroll-sync
// Definitions by: Corné Dorrestijn <https://github.com/cornedor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface ScrollSyncProps {
    children?: React.ReactNode;
    onSync?(el: Element): void;
    proportional?: boolean | undefined;
    vertical?: boolean | undefined;
    horizontal?: boolean | undefined;
    enabled?: boolean | undefined;
}

export interface ScrollSyncPaneProps {
    attachTo?: HTMLElement | undefined;
    children?: React.ReactNode;
    group?: string | string[] | undefined;
    enabled?: boolean | undefined;
}

export const ScrollSync: React.FC<ScrollSyncProps>;
export const ScrollSyncPane: React.FC<ScrollSyncPaneProps>;
