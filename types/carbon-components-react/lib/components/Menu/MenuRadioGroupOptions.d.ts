import * as React from "react";

export interface MenuRadioGroupOptionsProps {
    initialSelectedItem?: string | undefined;
    items: readonly string[];
    onChange?(item: string): void;
}

declare const MenuRadioGroupOptions: React.FC<MenuRadioGroupOptionsProps>;

export default MenuRadioGroupOptions;
