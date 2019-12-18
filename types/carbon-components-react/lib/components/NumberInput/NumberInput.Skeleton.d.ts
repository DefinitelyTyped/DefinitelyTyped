import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactAttr["id"],
}

export interface NumberInputSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const NumberInputSkeleton: React.FC<NumberInputSkeletonProps>;

export default NumberInputSkeleton;
