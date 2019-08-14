import * as React from "react";

export type PanelGridProps = {
    className?: string;
    /* The number of columns in the grid. */
    cols?: 1 | 2 | 3 | 4 | 5 | 6;
    /* Set to **true** to remove the margins between the panels. */
    nogap?: boolean;
} & { [x: string]: any };

declare const PanelGrid: React.FunctionComponent<PanelGridProps>;

export default PanelGrid;
