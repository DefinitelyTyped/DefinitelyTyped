// Type definitions for react-flexr v2.0.2
// Project: https://github.com/kodyl/react-flexr
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare namespace __ReactFlexr {
    export import React = __React;

    interface GridProps extends React.Props<Grid> {
        align?: "top" | "center" | "bottom";
        hAlign?: "left" | "center" | "right";
        gutter?: string;
        flexCells?: boolean;
    }

    export class Grid extends React.Component<GridProps, {}> {
    }

    interface CellProps extends React.Props<Cell> {
        align?: "top" | "center" | "bottom";
        gutter?: string;
        flex?: boolean;
        size?: string | number;
        palm?: string | number;
        lap?: string | number;
        portable?: string | number;
        desk?: string | number;
    }

    export class Cell extends React.Component<CellProps, {}> {
    }

    interface OptimizedResize {
        init: (callback: () => void) => void;
    }

    export const optimizedResize: OptimizedResize;

    export type ErgonomicType = "palm" | "lap" | "portable" | "desk";

    export const findMatch: (...arguments: ErgonomicType[]) => boolean;

    export const setBreakpoints: (breakpoints: ErgonomicType[]) => void;

    export const findBreakpoints: () => ErgonomicType[] | boolean;

    export const getCurrentBreakpoints: () => ErgonomicType[];

    export const palm: string;
    export const lap: string;
    export const portable: string;
    export const desk: string;
}

declare module "react-flexr" {
    export = __ReactFlexr;
}
