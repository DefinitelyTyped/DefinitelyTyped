import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactLabelAttr["htmlFor"],
}

export interface RadioButtonSkeletonProps extends InheritedProps { }

declare class RadioButtonSkeleton extends React.Component<RadioButtonSkeletonProps> { }

export default RadioButtonSkeleton;
