// Type definitions for react-messenger-checkbox 0.1
// Project: https://github.com/Yoctol/react-messenger-checkbox
// Definitions by: Rémi Roycourt <https://github.com/remiroyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as React from 'react';

interface ReactMessengerProps {
    pageId: string;
    appId: string;
    origin: string;
    userRef: string;

    prechecked?: boolean;
    allowLogin?: boolean;
    size?: 'small' | 'medium' | 'large' | 'standard' | 'xlarge';
    skin?: 'light' | 'dark';
    centerAlign?: boolean;
    autoLogAppEvents?: boolean;
    xfbml?: boolean;
    version?: string;
    language?: string;
    debug?: boolean;
    onEvent?: (event: any) => void;
}

/**
 * <MessengerCheckbox />
 */
declare class MessengerCheckbox extends React.Component<ReactMessengerProps> {}

export = MessengerCheckbox;
