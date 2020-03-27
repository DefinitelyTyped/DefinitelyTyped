import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactLabelAttr["htmlFor"],
}

export interface TextAreaSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const TextAreaSkeleton: React.FC<TextAreaSkeletonProps>;

export default TextAreaSkeleton;
