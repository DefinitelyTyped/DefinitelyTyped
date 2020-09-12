import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface NumberInputSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const NumberInputSkeleton: React.FC<NumberInputSkeletonProps>;

export default NumberInputSkeleton;
