// Type definitions for react-smooth-scrollbar 8.0
// Project: https://github.com/idiotWu/react-smooth-scrollbar
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import SmoothScrollbar from "smooth-scrollbar";
import { ScrollbarOptions, ScrollStatus } from "smooth-scrollbar/interfaces";

declare namespace Scrollbar {
    interface ScrollbarProps extends Partial<ScrollbarOptions> {
        /**
         * Pipe to scrollbar.addListener()
         */
        onScroll?(status: ScrollStatus, scrollbarInstance: SmoothScrollbar): void;
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
