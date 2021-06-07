import * as React from "react";

export interface DataTableSkeletonHeader {
    key?: string;
}

export interface DataTableSkeletonProps extends React.TableHTMLAttributes<HTMLTableElement> {
    compact?: boolean;
    columnCount?: number;
    headers?: readonly DataTableSkeletonHeader[];
    rowCount?: number;
    showHeader?: boolean;
    showToolbar?: boolean;
    zebra?: boolean;
}

declare const DataTableSkeleton: React.FC<DataTableSkeletonProps>;

export default DataTableSkeleton;
