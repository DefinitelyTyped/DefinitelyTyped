import * as React from "react";

type ScreenSize = "smallScreen" | "mediumScreen" | "largeScreen" | "xLargeScreen";

export type ColumnSpanOption = number | Record<ScreenSize, number>;

export interface ColumnProps {
    children: React.ReactNode;
    className?: string;
    /** Set to true to have the column automatically occupy the remaining space in the row */
    full?: boolean;
    /** How many cells out of 12 should the column be offset by on each screen size. Defaults to none. */
    offset?: number;
    /** Are the offsets to be applied before or after the column? default: "before" */
    offsetPosition?: "before" | "after";
    /** How many cells out of 12 should the column occupy on each screen size. Defaults to 12. */
    span?: number;
}

declare const Column: React.FunctionComponent<ColumnProps> & {
    displayName: "Column";
};

export default Column;
