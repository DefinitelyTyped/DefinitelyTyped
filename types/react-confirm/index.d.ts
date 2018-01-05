// Type definitions for react-confirm 0.1
// Project: https://github.com/haradakunihiko/react-confirm
// Definitions by: santiagodoldan <https://github.com/santiagodoldan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export class PlainConfirmModal extends React.Component<any, any> { }

export function confirmable(component: typeof PlainConfirmModal): React.Component<ReactConfirmProps>;
export function createConfirmation(component: React.Component, unmountDelay?: number): (props: any) => Promise<string>;

export interface ReactConfirmProps {
    confirmation: string | React.ReactElement<any>;
    dismiss: () => void;
    proceed: (value?: string) => void;
    cancel: (value?: string) => void;
    show: boolean;
}
