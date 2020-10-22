import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface TextInputSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const TextInputSkeleton: React.FC<TextInputSkeletonProps>;

export default TextInputSkeleton;
