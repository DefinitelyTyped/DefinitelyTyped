import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactLabelAttr["htmlFor"],
}

export interface SelectSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const SelectSkeleton: React.FC<SelectSkeletonProps>;

export default SelectSkeleton;
