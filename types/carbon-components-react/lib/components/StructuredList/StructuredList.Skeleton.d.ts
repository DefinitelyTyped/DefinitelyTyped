import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface StructuredListSkeletonProps extends ReactDivAttr {
    border?: boolean,
    rowCount?: number,
}

declare const StructuredListSkeleton: React.FC<StructuredListSkeletonProps>;

export default StructuredListSkeleton;
