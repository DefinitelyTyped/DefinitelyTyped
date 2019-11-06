import * as React from "react";
import { ShapeOf } from "../../../typings/shared";

interface InheritedProps extends React.TableHTMLAttributes<HTMLTableElement> { }

export interface HeaderType {
    key?: string;
    header?: React.ReactNode;
}

export interface DataTableSkeletonProps extends InheritedProps {
    compact?: boolean;
    columnCount?: number;
    headers?: ReadonlyArray<string> | ReadonlyArray<ShapeOf<HeaderType>>;
    rowCount?: number;
    zebra?: boolean;
}

declare const DataTableSkeleton: React.FC<DataTableSkeletonProps>;

export default DataTableSkeleton;
