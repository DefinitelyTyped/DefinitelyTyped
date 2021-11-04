import * as React from "react";

export type LayoutGridProps = {
    className?: string | undefined,
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    colSpan?: any,
    disableStyles?: boolean | undefined,
    nogap?: boolean | undefined
    ref?: React.Ref<HTMLDivElement> | undefined;
} & React.HTMLAttributes<HTMLAnchorElement>;

declare const LayoutGrid: React.FunctionComponent<LayoutGridProps> & {
    displayName: "LayoutGridProps";
};

export default LayoutGrid;
