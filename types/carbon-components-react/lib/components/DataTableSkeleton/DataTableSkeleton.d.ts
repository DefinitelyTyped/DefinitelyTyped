import * as React from "react";

interface InheritedProps extends React.TableHTMLAttributes<HTMLTableElement> { }

// export interface HeaderType {
//     key?: string;
//     header?: React.ReactNode;
// }

export interface DataTableSkeletonProps extends InheritedProps {
    compact?: boolean;
    columnCount?: number;
    // headers?: ReadonlyArray<string> | ReadonlyArray<ShapeOf<HeaderType>>; // doesn't seem to be used anymore but prop type is still there so leaving this commented out.
    rowCount?: number;
    zebra?: boolean;
}

declare const DataTableSkeleton: React.FC<DataTableSkeletonProps>;

export default DataTableSkeleton;
