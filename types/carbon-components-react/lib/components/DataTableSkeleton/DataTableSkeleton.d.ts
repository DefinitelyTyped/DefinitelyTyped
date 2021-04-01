import * as React from "react";

export interface DataTableSkeletonHeader {
    key?: string;
}

export interface DataTableSkeletonProps extends React.TableHTMLAttributes<HTMLTableElement> {
    compact?: boolean;
    columnCount?: number;
    headers?: readonly DataTableSkeletonHeader[]; // doesn't seem to be used anymore but prop type is still there so leaving this commented out.
    rowCount?: number;
    showHeader?: boolean;
    showToolbar?: boolean;
    zebra?: boolean;
}

declare const DataTableSkeleton: React.FC<DataTableSkeletonProps>;

export default DataTableSkeleton;
