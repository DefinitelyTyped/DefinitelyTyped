import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr { }

export interface StructuredListSkeletonProps extends InheritedProps {
    border?: boolean,
    rowCount?: number,
}

declare const StructuredListSkeleton: React.FC<StructuredListSkeletonProps>;

export default StructuredListSkeleton;
