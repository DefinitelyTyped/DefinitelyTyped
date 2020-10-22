import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface ToggleSkeletonProps extends InheritedProps {
    labelText?: string,
}

declare class ToggleSkeleton extends React.Component<ToggleSkeletonProps> { }

export default ToggleSkeleton;
