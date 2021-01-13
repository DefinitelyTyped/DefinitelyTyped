import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { ListBoxSize } from "../ListBox/ListBoxPropTypes";

export interface DropdownSkeletonProps extends ReactDivAttr {
    /**
     * @deprecated
     */
    inline?: boolean,
    size?: ListBoxSize;
}

declare const DropdownSkeleton: React.FC<DropdownSkeletonProps>;

export default DropdownSkeleton;
