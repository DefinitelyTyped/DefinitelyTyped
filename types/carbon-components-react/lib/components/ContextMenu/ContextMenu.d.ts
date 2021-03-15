import * as React from "react";
import ContextMenuDivider from "./ContextMenuDivider";
import ContextMenuGroup from "./ContextMenuGroup";
import ContextMenuItem from "./ContextMenuItem";
import ContextMenuRadioGroup from "./ContextMenuRadioGroup";
import ContextMenuSelectableItem from "./ContextMenuSelectableItem";

export interface ContextMenuProps {
    children?: React.ReactNode;
    level?: number;
    onClose?(): void;
    onKeyDown?(evt: React.KeyboardEvent<HTMLUListElement>): void;
    open?: boolean;
    x?: number;
    y?: number;
}

export interface ContextMenuComponent extends React.FC<ContextMenuProps> {
    readonly ContextMenuDivider: typeof ContextMenuDivider;
    readonly ContextMenuGroup: typeof ContextMenuGroup;
    readonly ContextMenuItem: typeof ContextMenuItem;
    readonly ContextMenuRadioGroup: typeof ContextMenuRadioGroup;
    readonly ContextMenuSelectableItem: typeof ContextMenuSelectableItem;
}

declare const ContextMenu: ContextMenuComponent;

export default ContextMenu;
