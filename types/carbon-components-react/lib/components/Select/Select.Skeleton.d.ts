import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface SelectSkeletonProps extends ReactDivAttr {
    hideLabel?: boolean | undefined;
}

declare const SelectSkeleton: React.FC<SelectSkeletonProps>;

export default SelectSkeleton;
