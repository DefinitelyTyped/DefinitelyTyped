import * as React from "react";

interface InheritedProps { }

export interface StructuredListSkeletonProps extends InheritedProps {
    border?: boolean,
    rowCount?: number,
}

declare const StructuredListSkeleton: React.FC<StructuredListSkeletonProps>;

export default StructuredListSkeleton;
