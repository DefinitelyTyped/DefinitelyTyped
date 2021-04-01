import * as React from "react";

export interface KeyboardEventHandlerProps {
    handleKeys?: readonly string[];
    handleEventType?: "keydown" | "keyup" | "keypress";
    handleFocusableElements?: boolean;
    onKeyEvent?: (key: string, event: KeyboardEvent) => void;
    isDisabled?: boolean;
    isExclusive?: boolean;
    children?: React.ReactNode;
}

declare const KeyboardEventHandler: React.SFC<KeyboardEventHandlerProps>;
export default KeyboardEventHandler;
