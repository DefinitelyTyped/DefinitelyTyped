import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface CheckboxSkeletonProps extends InheritedProps { }

declare const CheckboxSkeleton: React.FC<CheckboxSkeletonProps>;

export default CheckboxSkeleton;
