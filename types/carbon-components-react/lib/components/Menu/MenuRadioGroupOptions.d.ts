import * as React from "react";

export interface MenuRadioGroupOptionsProps {
    initialSelectedItem?: string;
    items: readonly string[];
    onChange?(item: string): void;
}

declare const MenuRadioGroupOptions: React.FC<MenuRadioGroupOptionsProps>;

export default MenuRadioGroupOptions;
