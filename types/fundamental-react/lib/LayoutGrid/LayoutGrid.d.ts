import * as React from "react";

export type LayoutGridProps = {
    className?: string;
    /* The number of columns in the grid. */
    cols?: 1 | 2 | 3 | 4 | 5 | 6;
    customStyles?: { [x: string]: any };
    disableStyles?: boolean;
    ref?: React.Ref<HTMLDivElement>;
    /* Set to **true** to remove the margins between the panels. */
    nogap?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

declare const LayoutGrid: React.FunctionComponent<LayoutGridProps> & {
    displayName: "LayoutGridProps";
};

export default LayoutGrid;
