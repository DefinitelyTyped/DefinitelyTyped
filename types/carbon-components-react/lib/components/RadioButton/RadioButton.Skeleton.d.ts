import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface RadioButtonSkeletonProps extends InheritedProps { }

declare const RadioButtonSkeleton: React.FC<RadioButtonSkeletonProps>;

export default RadioButtonSkeleton;
