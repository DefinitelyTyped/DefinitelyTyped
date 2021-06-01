import * as React from "react";
import MenuDivider from "./MenuDivider";
import MenuGroup from "./MenuGroup";
import MenuItem from "./MenuItem";
import MenuRadioGroup from "./MenuRadioGroup";
import MenuSelectableItem from "./MenuSelectableItem";

export interface MenuProps {
    autoclose?: boolean;
    children?: React.ReactNode;
    level?: number;
    onClose?(): void;
    onKeyDown?(evt: React.KeyboardEvent<HTMLUListElement>): void;
    open?: boolean;
    x?: number | readonly number[];
    y?: number | readonly number[];
}

export interface MenuComponent extends React.FC<MenuProps> {
    readonly MenuDivider: typeof MenuDivider;
    readonly MenuGroup: typeof MenuGroup;
    readonly MenuItem: typeof MenuItem;
    readonly MenuRadioGroup: typeof MenuRadioGroup;
    readonly MenuSelectableItem: typeof MenuSelectableItem;
}

declare const Menu: MenuComponent;

export default Menu;
