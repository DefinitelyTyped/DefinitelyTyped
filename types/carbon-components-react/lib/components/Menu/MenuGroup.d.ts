import * as React from "react";

export interface MenuGroupProps {
    children?: React.ReactNode;
    label: string;
}

declare const MenuGroup: React.FC<MenuGroupProps>;

export default MenuGroup;
