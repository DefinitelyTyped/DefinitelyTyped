import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { ListBoxSize } from "../ListBox/ListBoxPropTypes";

export interface DropdownSkeletonProps extends ReactDivAttr {
    /**
     * @deprecated
     */
    inline?: boolean | undefined;
    size?: ListBoxSize | undefined;
}

declare const DropdownSkeleton: React.FC<DropdownSkeletonProps>;

export default DropdownSkeleton;
