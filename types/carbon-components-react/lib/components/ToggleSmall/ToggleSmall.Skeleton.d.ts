import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface ToggleSmallSkeletonProps extends InheritedProps {
    labelText?: string,
}

declare class ToggleSmallSkeleton extends React.Component<ToggleSmallSkeletonProps> { }

export default ToggleSmallSkeleton;
