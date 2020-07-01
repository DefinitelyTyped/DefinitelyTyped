import * as React from "react";
import { RequiresChildrenProps } from "../../../typings/shared";
import { OverflowMenuItemAnchorProps, OverflowMenuItemButtonProps } from "../OverflowMenuItem";

export interface TableToolbarActionAnchorProps extends
    Omit<OverflowMenuItemAnchorProps, "children" | "itemText">,
    RequiresChildrenProps
{
    itemText?: React.ReactNode,
}

export interface TableToolbarActionButtonProps extends
    Omit<OverflowMenuItemButtonProps, "children" | "itemText">,
    RequiresChildrenProps
{
    itemText?: React.ReactNode,
}

export type AllTableToolbarActionProps = TableToolbarActionAnchorProps | TableToolbarActionButtonProps;
declare const TableToolbarAction: React.FC<AllTableToolbarActionProps>;

export default TableToolbarAction;
