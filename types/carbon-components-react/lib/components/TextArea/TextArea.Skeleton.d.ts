import * as React from "react";
import { ReactLabelAttr, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface TextAreaSkeletonProps extends InheritedProps {
    hideLabel?: boolean,
}

declare const TextAreaSkeleton: React.FC<TextAreaSkeletonProps>;

export default TextAreaSkeleton;
