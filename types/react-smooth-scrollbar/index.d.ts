// Type definitions for react-smooth-scrollbar 7.2
// Project: https://github.com/idiotWu/react-smooth-scrollbar
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import SmoothScrollbar, { ScrollbarOptions, ScrollStatusObject } from "smooth-scrollbar";

declare namespace Scrollbar {
    interface ScrollbarProps extends ScrollbarOptions {
        /**
         * Pipe to scrollbar.addListener()
         */
        onScroll?(status: ScrollStatusObject, scrollbarInstance: SmoothScrollbar): void;
        /**
         * Keep scrollbar tracks visible whether it's scrolling or not
         * @default false
         */
        alwaysShowTracks?: boolean;
        /**
         * Optional class name
         */
        className?: string;
        /**
         * Optional style
         */
        style?: React.CSSProperties;
    }
}

declare class Scrollbar extends React.Component<Scrollbar.ScrollbarProps> {
    /**
     * Scrollbar instance
     */
    readonly scrollbar: SmoothScrollbar;
}

export as namespace Scrollbar;
export = Scrollbar;
