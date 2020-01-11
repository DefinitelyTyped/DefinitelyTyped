import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactLabelAttr["htmlFor"],
}

export interface TextInputSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const TextInputSkeleton: React.FC<TextInputSkeletonProps>;

export default TextInputSkeleton;
