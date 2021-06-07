import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface TextInputSkeletonProps extends ReactDivAttr {
    hideLabel?: boolean,
}

declare const TextInputSkeleton: React.FC<TextInputSkeletonProps>;

export default TextInputSkeleton;
