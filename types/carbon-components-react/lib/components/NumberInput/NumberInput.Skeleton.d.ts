import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface NumberInputSkeletonProps extends ReactDivAttr {
    hideLabel?: boolean,
}

declare const NumberInputSkeleton: React.FC<NumberInputSkeletonProps>;

export default NumberInputSkeleton;
