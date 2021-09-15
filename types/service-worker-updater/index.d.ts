// Type definitions for service-worker-updater 0.0
// Project: https://github.com/cactoo/service-worker-updater#readme
// Definitions by: mike castleman <https://github.com/mlc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 4.0

import * as React from 'react';

export type UpdateHandler = () => void;

export interface CheckOptions {
    checkInterval?: number;
    updateOnLoad?: boolean;
}

export type UpdateHookResult = [hasUpdate: boolean, updateHandler: UpdateHandler];
export function useSWUpdateChecker(opts?: CheckOptions): UpdateHookResult;

export interface InjectedUpdateProps {
    hasUpdate: boolean;
    updateHandler: UpdateHandler;
}

export function withSWUpdateChecker<P extends InjectedUpdateProps>(
    WrappedComponent: React.ComponentType<P>,
    opts?: CheckOptions,
): React.ComponentClass<Omit<P, keyof InjectedUpdateProps>>;
