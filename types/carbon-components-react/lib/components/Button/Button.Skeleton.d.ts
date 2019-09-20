import * as React from "react";
import { ReactAnchorAttr, SizingProps } from "../../../typings/shared";

interface InheritedProps extends SizingProps {
    className?: ReactAnchorAttr["className"],
    href?: ReactAnchorAttr["href"],
}

export interface ButtonSkeletonProps extends InheritedProps { }

declare const ButtonSkeleton: React.FC<ButtonSkeletonProps>;

export default ButtonSkeleton;
