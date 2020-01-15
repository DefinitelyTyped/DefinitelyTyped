import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactAttr["id"],
}

export interface ToggleSkeletonProps extends InheritedProps { }

declare class ToggleSkeleton extends React.Component<ToggleSkeletonProps> { }

export default ToggleSkeleton;
