import * as React from "react";
import { ContextMenuOptionProps } from "./ContextMenuOption";

export interface ContextMenuSelectableItemProps {
    initialChecked?: boolean;
    label: ContextMenuOptionProps["label"];
    onChange?(newChecked: boolean): void;
}

declare const ContextMenuSelectableItem: React.FC<ContextMenuSelectableItemProps>;

export default ContextMenuSelectableItem;
