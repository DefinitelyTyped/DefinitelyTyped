import * as React from "react";
import { FCReturn, ForwardRefProps, RequiresChildrenProps } from "../../../typings/shared";
import { OverflowMenuItemAnchorProps, OverflowMenuItemButtonProps } from "../OverflowMenuItem";

export interface TableToolbarActionAnchorProps
    extends Omit<OverflowMenuItemAnchorProps, "children" | "itemText">, RequiresChildrenProps
{
    itemText?: React.ReactNode | undefined;
}

export interface TableToolbarActionButtonProps
    extends Omit<OverflowMenuItemButtonProps, "children" | "itemText">, RequiresChildrenProps
{
    itemText?: React.ReactNode | undefined;
}

export type AllTableToolbarActionProps = TableToolbarActionAnchorProps | TableToolbarActionButtonProps;

declare function TableToolbarAction(props: ForwardRefProps<HTMLAnchorElement, TableToolbarActionAnchorProps>): FCReturn;
// tslint:disable:unified-signatures
declare function TableToolbarAction(props: ForwardRefProps<HTMLButtonElement, TableToolbarActionButtonProps>): FCReturn;

export default TableToolbarAction;
