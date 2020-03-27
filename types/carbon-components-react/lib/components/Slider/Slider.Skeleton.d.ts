import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactAttr["id"],
}

export interface SliderSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const SliderSkeleton: React.FC<SliderSkeletonProps>;

export default SliderSkeleton;
