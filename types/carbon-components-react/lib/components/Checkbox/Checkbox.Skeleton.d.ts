import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";

export interface CheckboxSkeletonProps {
    id?: ReactLabelAttr["htmlFor"],
}

declare class CheckboxSkeleton extends React.Component<CheckboxSkeletonProps> { }

export default CheckboxSkeleton;
