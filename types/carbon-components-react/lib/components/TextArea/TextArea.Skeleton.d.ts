import React = require("react");
import { ReactDivAttr } from "../../../typings/shared";

export interface TextAreaSkeletonProps extends ReactDivAttr {
    hideLabel?: boolean | undefined;
}

declare const TextAreaSkeleton: React.FC<TextAreaSkeletonProps>;

export default TextAreaSkeleton;
