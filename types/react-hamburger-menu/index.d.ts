import * as React from "react";

export default HamburgerMenu;

declare class HamburgerMenu extends React.PureComponent<HamburgerMenuProps> {
}

export interface HamburgerMenuProps {
    /**
     * Determines whether the menu is a hamburger or cross icon
     */
    isOpen: boolean;
    /**
     * The width of the icon
     * @default 36
     */
    width?: number | undefined;
    /**
     * The height of the icon
     * @default 30
     */
    height?: number | undefined;
    /**
     * The stroke width of the lines
     * @default 2
     */
    strokeWidth?: number | undefined;
    /**
     * The rotation of the icon, eg {45} would be 45deg
     * @default 0
     */
    rotate?: number | undefined;
    /**
     * The border radius of the lines
     * @default 0
     */
    borderRadius?: number | undefined;
    /**
     * The color of both icons
     * @default #000
     */
    color: string;
    /**
     * The length of time it takes for the icon transitions to complete.
     * @default 0.4
     */
    animationDuration?: number | undefined;
    /**
     * Will be invoked when the component is clicked
     */
    menuClicked(): void;
}
