// Type definitions for react-confirm 0.1
// Project: https://github.com/haradakunihiko/react-confirm
// Definitions by: santiagodoldan <https://github.com/santiagodoldan>
//                 Mark Nelissen <https://github.com/marknelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export function confirmable<P>(component: React.ComponentType<ReactConfirmProps & P>): React.ComponentType<P>;
export function createConfirmation(component: React.ComponentType<any>, unmountDelay?: number): (props: any) => Promise<string>;

export interface ReactConfirmProps {
    confirmation: string | React.ReactElement;
    dismiss: () => void;
    proceed: (value?: string) => void;
    cancel: (value?: string) => void;
    show: boolean;
}
