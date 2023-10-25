/// <reference types="react" />

declare namespace __ReactFlexr {
    interface GridProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Grid> | undefined;
        /**
         * Vertical Align Sub Cells: top, center, bottom
         */
        align?: "top" | "center" | "bottom" | undefined;

        /**
         * Horizontal Align Sub Cells: left, center, right
         */
        hAlign?: "left" | "center" | "right" | undefined;

        /**
         * Override default gutter: '1em', '5%', '10px', etc.
         * Propagates downwards. Cells inside this Grid component
         * will use the same gutter.
         */
        gutter?: string | undefined;

        /**
         * All sub cells will be full height.
         */
        flexCells?: boolean | undefined;
    }

    export class Grid extends React.Component<GridProps> {
    }

    interface CellProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Cell> | undefined;
        /**
         * Vertical Align This Cell: top, center, bottom
         */
        align?: "top" | "center" | "bottom" | undefined;

        /**
         * Override default gutter: '1em', '5%', '10px', etc.
         */
        gutter?: string | undefined;

        /**
         * Cell will be full height.
         */
        flex?: boolean | undefined;

        /**
         * Takes a fraction. e.g. 1/6
         */
        size?: string | number | undefined;

        /**
         * Like size, but only for palm devices.
         * Accepts 'hidden' as well.
         */
        palm?: string | number | undefined;

        /**
         * Like size, but only for lap devices.
         * Accepts 'hidden' as well.
         */
        lap?: string | number | undefined;

        /**
         * Like size, but only for ( palm + lap ) devices.
         * Accepts 'hidden' as well.
         */
        portable?: string | number | undefined;

        /**
         * Like size, but only for desk devices.
         * Accepts 'hidden' as well.
         */
        desk?: string | number | undefined;
    }

    export class Cell extends React.Component<CellProps> {
    }

    /**
     * Simple resize event throttler. Usefull for force updating when the
     * app have been resized. For best performance, use it in your main
     * app component in the componentDidMount life cycle.
     */
    interface OptimizedResize {
        init: (callback: () => void) => void;
    }

    export const optimizedResize: OptimizedResize;

    export type ErgonomicType = "palm" | "lap" | "portable" | "desk";

    /**
     * The internal function that Flexr uses to check which ergonomic
     * state it's currently in. It's really useful if you have components
     * outside the grid, that you want to show/hide/manipulate passed properties
     * or stuff in your lifecycle hooks.
     */
    export const findMatch: (...arguments: ErgonomicType[]) => boolean;

    /**
     * It's posible to force flexr to be in a specific ergonomic state. This is
     * primarily usefull when rendering on the server. E.g. looking at the user
     * agent string on rendering the app in palm/portable if it's an iOS/iPhone
     * or lap/portable if iOS/iPad.
     */
    export const setBreakpoints: (breakpoints: ErgonomicType[]) => void;

    /**
     * Force flexr to find the current breakpoints. Returns an array of the
     * current breakpoints that flexr matches in. If they haven't changed since
     * the last time findBreakpoints() was called, false will be returned. Use
     * in combination with optimizedResize.
     */
    export const findBreakpoints: () => ErgonomicType[] | boolean;

    /**
     * Returns an array of current breakpoints.
     */
    export const getCurrentBreakpoints: () => ErgonomicType[];

    /**
     * The ergonomic breakpoint media query that flexr uses internally.
     */
    export const palm: string;

    /**
     * The ergonomic breakpoint media query that flexr uses internally.
     */
    export const lap: string;

    /**
     * The ergonomic breakpoint media query that flexr uses internally.
     */
    export const portable: string;

    /**
     * The ergonomic breakpoint media query that flexr uses internally.
     */
    export const desk: string;
}

declare module "react-flexr" {
    export = __ReactFlexr;
}
