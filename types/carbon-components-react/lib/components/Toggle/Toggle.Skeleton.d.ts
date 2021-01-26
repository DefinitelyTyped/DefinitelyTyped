import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface ToggleSkeletonProps extends ReactDivAttr {
    labelText?: string,
}

declare class ToggleSkeleton extends React.Component<ToggleSkeletonProps> { }

export default ToggleSkeleton;
