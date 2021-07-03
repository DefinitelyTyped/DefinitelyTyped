// Type definitions for react-keyboard-event-handler 1.5
// Project: https://github.com/linsight/react-keyboard-event-handler
// Definitions by: Jamie Gerrard Lievesley <https://github.com/jamiegluk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

declare namespace KeyboardEventHandler {
    interface KeyboardEventHandlerProps {
        handleKeys?: readonly string[];
        handleEventType?: "keydown" | "keyup" | "keypress";
        handleFocusableElements?: boolean;
        onKeyEvent?: (key: string, event: KeyboardEvent) => void;
        isDisabled?: boolean;
        isExclusive?: boolean;
        children?: React.ReactNode;
    }
}

declare const KeyboardEventHandler: React.SFC<KeyboardEventHandler.KeyboardEventHandlerProps>;
export = KeyboardEventHandler;
export as namespace KeyboardEventHandler;
