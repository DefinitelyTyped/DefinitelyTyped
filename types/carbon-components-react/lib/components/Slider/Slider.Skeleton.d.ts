import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface SliderSkeletonProps extends ReactDivAttr {
    hideLabel?: boolean,
}

declare const SliderSkeleton: React.FC<SliderSkeletonProps>;

export default SliderSkeleton;
