import * as React from "react";
import { ReactAnchorAttr, ReactAttr } from "../../../typings/shared";

export interface ButtonSkeletonProps extends ReactAttr {
    href?: ReactAnchorAttr["href"],
    small?: boolean,
}

declare const ButtonSkeleton: React.FC<ButtonSkeletonProps>;

export default ButtonSkeleton;
