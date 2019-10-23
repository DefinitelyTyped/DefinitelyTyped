import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    style?: ReactAttr["style"],
}

export interface IconSkeletonProps extends InheritedProps { }

declare const IconSkeleton: React.FC<IconSkeletonProps>;

export default IconSkeleton;
