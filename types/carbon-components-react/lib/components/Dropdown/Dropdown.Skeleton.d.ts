import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface DropdownSkeletonProps extends InheritedProps {
    inline?: boolean,
}

declare const DropdownSkeleton: React.FC<DropdownSkeletonProps>;

export default DropdownSkeleton;
