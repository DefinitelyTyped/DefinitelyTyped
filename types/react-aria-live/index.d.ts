// Type definitions for react-aria-live 2.0
// Project: https://github.com/AlmeroSteyn/react-aria-live#readme
// Definitions by: AJ Livingston <https://github.com/ajliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export class LiveAnnouncer extends React.Component {
    announcePolite(message: string, id?: string): void;
    announceAssertive(message: string, id?: string): void;
}

export const LiveMessage: React.FunctionComponent<{
    'aria-live': 'assertive' | 'polite';
    clearOnUnmount?: boolean | 'true' | 'false' | undefined;
    message: string;
}>;

export const LiveMessenger: React.FunctionComponent<{
    children(contextProps: {
        announceAssertive(message: string, id?: string): void;
        announcePolite(message: string, id?: string): void;
    }): React.ReactNode;
}>;
