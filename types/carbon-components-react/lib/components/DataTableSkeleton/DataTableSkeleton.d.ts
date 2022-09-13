import * as React from "react";

export interface DataTableSkeletonHeader {
    header?: string | undefined;
}

export interface DataTableSkeletonProps extends React.TableHTMLAttributes<HTMLTableElement> {
    compact?: boolean | undefined;
    columnCount?: number | undefined;
    headers?: readonly DataTableSkeletonHeader[] | undefined;
    rowCount?: number | undefined;
    showHeader?: boolean | undefined;
    showToolbar?: boolean | undefined;
    zebra?: boolean | undefined;
}

declare const DataTableSkeleton: React.FC<DataTableSkeletonProps>;

export default DataTableSkeleton;
