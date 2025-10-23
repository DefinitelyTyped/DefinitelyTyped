import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface StructuredListSkeletonProps extends ReactDivAttr {
    border?: boolean | undefined;
    rowCount?: number | undefined;
}

declare const StructuredListSkeleton: React.FC<StructuredListSkeletonProps>;

export default StructuredListSkeleton;
