import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface TextAreaSkeletonProps extends ReactDivAttr {
    hideLabel?: boolean,
}

declare const TextAreaSkeleton: React.FC<TextAreaSkeletonProps>;

export default TextAreaSkeleton;
