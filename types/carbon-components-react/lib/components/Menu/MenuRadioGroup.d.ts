import * as React from "react";
import { MenuGroupProps } from "./MenuGroup";
import { MenuRadioGroupOptionsProps } from "./MenuRadioGroupOptions";

export interface MenuRadioGroupProps {
    initialSelectedItem?: MenuRadioGroupOptionsProps["initialSelectedItem"] | undefined;
    items: MenuRadioGroupOptionsProps["items"];
    label: MenuGroupProps["label"];
}

declare const MenuRadioGroup: React.FC<MenuRadioGroupProps>;

export default MenuRadioGroup;
