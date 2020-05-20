import * as React from "react";
import { RequiresChildrenProps } from "../../../typings/shared";
import { OverflowMenuProps } from "../OverflowMenu";

interface InheritedProps extends
    Omit<OverflowMenuProps, "children">,
    RequiresChildrenProps
{ }

export interface TableToolbarMenuProps extends InheritedProps { }

declare const TableToolbarMenu: React.FC<TableToolbarMenuProps>;

export default TableToolbarMenu;
