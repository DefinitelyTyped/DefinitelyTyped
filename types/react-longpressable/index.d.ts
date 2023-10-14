// Type definitions for react-longpressable 1.1
// Project: https://github.com/stardust66/react-longpressable#readme
// Definitions by: VingeRay <https://github.com/vingeraycn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface LongPressProps {
    onLongPress: (e: React.SyntheticEvent) => void;
    onShortPress?: (e: React.SyntheticEvent) => void;

    /**
     * @default 500ms
     */
    longPressTime?: number;

    /**
     * @default true
     */
    primaryMouseButtonOnly?: boolean;

    /**
     * @default 100ms
     */
    dragThreshold?: number;

    children?: React.ReactNode;
}

export default class LongPress extends React.PureComponent<LongPressProps> {}
