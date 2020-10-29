import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface DropdownSkeletonProps extends ReactDivAttr {
    /**
     * @deprecated
     */
    inline?: boolean,
}

declare const DropdownSkeleton: React.FC<DropdownSkeletonProps>;

export default DropdownSkeleton;
