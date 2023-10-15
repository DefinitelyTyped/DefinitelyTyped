// Type definitions for react-messenger-checkbox 0.1
// Project: https://github.com/Yoctol/react-messenger-checkbox
// Definitions by: Rémi Roycourt <https://github.com/remiroyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as React from "react";

interface ReactMessengerProps {
    pageId: string;
    appId: string;
    origin: string;
    userRef: string;

    prechecked?: boolean | undefined;
    allowLogin?: boolean | undefined;
    size?: "small" | "medium" | "large" | "standard" | "xlarge" | undefined;
    skin?: "light" | "dark" | undefined;
    centerAlign?: boolean | undefined;
    autoLogAppEvents?: boolean | undefined;
    xfbml?: boolean | undefined;
    version?: string | undefined;
    language?: string | undefined;
    debug?: boolean | undefined;
    onEvent?: ((event: any) => void) | undefined;
}

/**
 * <MessengerCheckbox />
 */
declare class MessengerCheckbox extends React.Component<ReactMessengerProps> {}

export = MessengerCheckbox;
