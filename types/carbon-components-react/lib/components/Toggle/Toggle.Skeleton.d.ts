import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface ToggleSkeletonProps extends ReactDivAttr {
    labelText?: string | undefined,
    size?: "sm" | "md" | undefined,
}

declare class ToggleSkeleton extends React.Component<ToggleSkeletonProps> { }

export default ToggleSkeleton;
