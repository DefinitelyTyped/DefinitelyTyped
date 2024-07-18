import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface ToggleSmallSkeletonProps extends ReactDivAttr {
    labelText?: string | undefined;
}

declare class ToggleSmallSkeleton extends React.Component<ToggleSmallSkeletonProps> {}

export default ToggleSmallSkeleton;
