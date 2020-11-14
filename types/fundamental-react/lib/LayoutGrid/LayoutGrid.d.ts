import * as React from "react";

export type LayoutGridProps = {
    className?: string,
    cols?: 1 | 2 | 3 | 4 | 5 | 6;
    colSpan?: any,
    disableStyles?: boolean,
    nogap?: boolean
    ref?: React.Ref<HTMLDivElement>;
} & React.HTMLAttributes<HTMLAnchorElement>;

declare const LayoutGrid: React.FunctionComponent<LayoutGridProps> & {
    displayName: "LayoutGridProps";
};

export default LayoutGrid;
