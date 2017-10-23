// Type definitions for react-dnd-touch-backend 0.3
// Project: https://github.com/yahoo/react-dnd-touch-backend#readme
// Definitions by: Daniel Król <https://github.com/mleko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ReactDnd from "react-dnd";

export default function createTouchBackend(options: TouchBackendOptions): ReactDnd.Backend;

export interface TouchBackendOptions {
    enableMouseEvents?: boolean;
}
