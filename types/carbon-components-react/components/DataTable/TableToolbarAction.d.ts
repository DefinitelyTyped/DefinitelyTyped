import * as React from "react";
import { OverflowMenuItemAnchorProps, OverflowMenuItemButtonProps } from "../OverflowMenuItem";

export type AllTableToolbarActionProps = OverflowMenuItemAnchorProps | OverflowMenuItemButtonProps;
declare const TableToolbarAction: React.FC<AllTableToolbarActionProps>;

export default TableToolbarAction;
