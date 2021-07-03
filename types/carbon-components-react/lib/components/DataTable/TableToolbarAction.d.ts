import * as React from "react";
import { RequiresChildrenProps, ForwardRefProps, FCReturn } from "../../../typings/shared";
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

declare function TableToolbarAction(props: ForwardRefProps<HTMLAnchorElement, TableToolbarActionAnchorProps>): FCReturn;
// tslint:disable:unified-signatures
declare function TableToolbarAction(props: ForwardRefProps<HTMLButtonElement, TableToolbarActionButtonProps>): FCReturn;

export default TableToolbarAction;
