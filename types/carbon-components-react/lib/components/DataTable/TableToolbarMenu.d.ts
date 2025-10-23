import React = require("react");
import { RequiresChildrenProps } from "../../../typings/shared";
import { OverflowMenuProps } from "../OverflowMenu";

export interface TableToolbarMenuProps extends Omit<OverflowMenuProps, "children">, RequiresChildrenProps {}

declare const TableToolbarMenu: React.FC<TableToolbarMenuProps>;

export default TableToolbarMenu;
