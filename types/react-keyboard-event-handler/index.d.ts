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
