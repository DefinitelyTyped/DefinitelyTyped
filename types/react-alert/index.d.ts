// Type definitions for react-alert 4.0
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type AlertPosition =
    | 'top left'
    | 'top right'
    | 'top center'
    | 'bottom left'
    | 'bottom right'
    | 'bottom center';

export type AlertType = 'info' | 'success' | 'error';
export type AlertTransition = 'fade' | 'scale';

export interface ProviderProps {
    offset?: string;
    position?: AlertPosition;
    timeout?: number;
    type?: AlertType;
    transition?: AlertTransition;
    zIndex?: number;
    template: React.ComponentType;
}

export class Provider extends React.Component<ProviderProps> {}

export const Alert: React.Consumer<undefined>;

export function withAlert<P>(c: React.ComponentType<P>): React.ComponentType<P>;
