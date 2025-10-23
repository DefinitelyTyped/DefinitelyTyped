import React = require("react");
import { MenuOptionProps } from "./MenuOption";

export interface MenuItemProps extends MenuOptionProps {}

declare const MenuItem: React.FC<MenuItemProps>;

export default MenuItem;
