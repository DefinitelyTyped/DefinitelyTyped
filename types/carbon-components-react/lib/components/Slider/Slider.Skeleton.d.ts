import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface SliderSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const SliderSkeleton: React.FC<SliderSkeletonProps>;

export default SliderSkeleton;
