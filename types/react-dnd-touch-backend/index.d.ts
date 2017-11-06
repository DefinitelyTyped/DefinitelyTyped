// Type definitions for react-dnd-touch-backend 0.3
// Project: https://github.com/yahoo/react-dnd-touch-backend#readme
// Definitions by: Daniel Król <https://github.com/mleko>, Janeene Beeforth <https://github.com/dawnmist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as ReactDnd from "react-dnd";

export default function createTouchBackend(options: TouchBackendOptions): ReactDnd.Backend;

export interface TouchBackendOptions {
    /**
     * Support mouse events as well as touch events.
     */
    enableMouseEvents?: boolean;
    /**
     * Can cancel drag by hitting Escape if enableKeyboardEvents option is set to true
     */
    enableKeyboardEvents?: boolean;
    /**
     * Number of milliseconds that the item needs to be touched before the touch is considered the start of a drag.
     * This is used to allow both flick-to-scroll and drag-n-drop on objects in a list.
     */
    delayTouchStart?: number;
    /**
     * Number of milliseconds that the item needs to be clicked on before the click is considered the start of a drag.
     */
    delayMouseStart?: number;
    /**
     * Number of milliseconds delay before the touch/click is considered a drag.
     * @deprecated replaced by delayTouchStart and delayMouseStart, but is still supported at present.
     */
    delay?: number;
}
