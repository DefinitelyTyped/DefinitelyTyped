import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactAttr["id"],
}

export interface ToggleSmallSkeletonProps extends InheritedProps { }

declare class ToggleSmallSkeleton extends React.Component<ToggleSmallSkeletonProps> { }

export default ToggleSmallSkeleton;
