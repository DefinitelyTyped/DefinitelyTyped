import * as React from "react";
import { ContextMenuOptionProps } from "./ContextMenuOption";

export interface ContextMenuItemProps extends ContextMenuOptionProps { }

declare const ContextMenuItem: React.FC<ContextMenuItemProps>;

export default ContextMenuItem;
