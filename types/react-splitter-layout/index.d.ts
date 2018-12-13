// Type definitions for react-splitter-layout 3.0
// Project: https://github.com/zesik/react-splitter-layout
// Definitions by: Markus Lasermann <https://github.com/snaptags>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export default class SplitterLayout extends React.PureComponent<SplitterLayoutProps> {
}

export type TPrimaryIndex = 0|1;

export interface SplitterLayoutProps {
    /**
     * Custom CSS class name applied to the layout div.
     * You can use this to customize layout style.
     * Refers to the original stylesheet to see what you can customize.
     */
    customClassName?: string;

    /**
     * Determine whether the layout should be a horizontal split or a vertical split.
     *
     * @default false
     */
    vertical?: boolean;

    /**
     * Determine whether the width of each pane should be calculated in percentage or by pixels.
     * The default value is false, which means width is calculated in pixels.
     *
     * @default false
     */
    percentage?: boolean;

    /**
     * Index of the primary pane.
     * Since SplitterLayout supports at most 2 children, only 0 or 1 is allowed.
     *
     * A primary pane is used to show users primary content, while a secondary pane is the other pane.
     * When window size changes and percentage is set to false, primary pane's size is flexible
     * and secondary pane's size is kept unchanged. However, when the window size is not enough
     * for showing both minimal primary pane and minimal secondary pane,
     * the primary pane's size is served first.
     *
     * @default 0
     */
    primaryIndex?: TPrimaryIndex;

    /**
     * Minimal size of primary pane.
     * When percentage is set to false, this value is pixel size (25 means 25px).
     * When percentage is set to true, this value is percentage (25 means 25%).
     *
     * @default 0
     */
    primaryMinSize?: number;

    /**
     * Minimal size of secondary pane.
     */
    secondaryMinSize?: number;

    /**
     * Initial size of secondary pane when page loads.
     * If this prop is not defined, SplitterLayout tries to split the layout with equal sizes.
     * (Note: equal size may not apply when there are nested layouts.)
     *
     * @default undefined
     */
    secondaryInitialSize?: number;

    /**
     * Called when dragging is started.
     *
     * No parameter will be passed to event handlers.
     */
    onDragStart?: () => void;

    /**
     * Called when dragging finishes.
     *
     * No parameter will be passed to event handlers.
     */
    onDragEnd?: () => void;

    /**
     * Called when the size of secondary pane is changed.
     *
     * Event handlers will be passed with a single parameter of number type representing
     * new size of secondary pane.
     * When percentage is set to false, the value is in pixel size.
     * When percentage is set to true, the value is in percentage.
     */
    onSecondaryPaneSizeChange?: (value: number) => void;
}
