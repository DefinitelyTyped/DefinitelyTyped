import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface SelectSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const SelectSkeleton: React.FC<SelectSkeletonProps>;

export default SelectSkeleton;
