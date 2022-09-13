// Type definitions for react-keyboard-event-handler 1.5
// Project: https://github.com/linsight/react-keyboard-event-handler
// Definitions by: Jamie Gerrard Lievesley <https://github.com/jamiegluk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

declare namespace KeyboardEventHandler {
    interface KeyboardEventHandlerProps {
        handleKeys?: readonly string[] | undefined;
        handleEventType?: "keydown" | "keyup" | "keypress" | undefined;
        handleFocusableElements?: boolean | undefined;
        onKeyEvent?: ((key: string, event: KeyboardEvent) => void) | undefined;
        isDisabled?: boolean | undefined;
        isExclusive?: boolean | undefined;
        children?: React.ReactNode | undefined;
    }
}

declare const KeyboardEventHandler: React.FC<KeyboardEventHandler.KeyboardEventHandlerProps>;
export = KeyboardEventHandler;
export as namespace KeyboardEventHandler;
