import { Component } from "react";

declare namespace ColumnResizer {
    interface ResizerProps {
        /**
         * Any custom classes.
         * If set, default width and backgroundColor styles will not be applied.
         *
         * @default ""
         */
        className?: string | undefined;

        /**
         * Set to true if you want to disable resizing
         *
         * @default false
         */
        disabled?: boolean | undefined;

        /**
         * The minimum width for the columns (in pixels)
         *
         * @default 0
         */
        minWidth?: number | undefined;
    }
}

declare class ColumnResizer extends Component<ColumnResizer.ResizerProps> {}

export = ColumnResizer;
