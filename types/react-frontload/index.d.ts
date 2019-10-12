// Type definitions for react-frontload 1.0
// Project: https://github.com/davnicwil/react-frontload
// Definitions by: Anton Spirin <https://github.com/rockon404>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, ComponentType } from 'react';

export interface FrontloadProps {
    noServerRender?: boolean;
}

export interface FrontloadConnectOptions {
    noServerRender?: boolean;
    onMount?: boolean;
    onUpdate?: boolean;
}

export const Frontload: ComponentClass<FrontloadProps>;

export function frontloadConnect(
    frontload: (props: any) => Promise<void>,
    options?: FrontloadConnectOptions,
): <P = {}>(Component: ComponentType<P>) => ComponentType<P>;

export function frontloadServerRender(
    renderMarkup: (dryRun?: boolean) => string,
    withLogging?: boolean,
): Promise<string>;

export as namespace ReactFrontload;
