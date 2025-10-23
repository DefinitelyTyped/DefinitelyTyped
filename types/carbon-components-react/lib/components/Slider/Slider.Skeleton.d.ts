import React = require("react");
import { ReactDivAttr } from "../../../typings/shared";

export interface SliderSkeletonProps extends ReactDivAttr {
    hideLabel?: boolean | undefined;
}

declare const SliderSkeleton: React.FC<SliderSkeletonProps>;

export default SliderSkeleton;
