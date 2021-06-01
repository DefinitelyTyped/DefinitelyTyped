import * as React from "react";
import { MenuOptionProps } from "./MenuOption";

export interface MenuSelectableItemProps {
    initialChecked?: boolean;
    label: MenuOptionProps["label"];
    onChange?(newChecked: boolean): void;
}

declare const MenuSelectableItem: React.FC<MenuSelectableItemProps>;

export default MenuSelectableItem;
