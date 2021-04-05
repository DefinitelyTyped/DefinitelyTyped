import * as React from "react";

import KeyboardEventHandler = require("react-keyboard-event-handler");

export const ReactKeyboardEventHandlerTest: React.FC = () => (
    <div>
        <KeyboardEventHandler />
        <KeyboardEventHandler handleKeys={["a"]} />
        <KeyboardEventHandler
            handleKeys={["right", "numeric", "a", "ctrl+a"]}
            handleEventType="keydown"
            handleFocusableElements
            onKeyEvent={(key, event) => console.log(key, event.key, event)}
            isDisabled={false}
            isExclusive={false}
        />
        <KeyboardEventHandler
            handleKeys={["right", "up"]}
            onKeyEvent={(key, event) => console.log(key, event.key, event)}
        >
            <div>Test child 1</div>
            <div>Test child 2</div>
        </KeyboardEventHandler>
    </div>
);
