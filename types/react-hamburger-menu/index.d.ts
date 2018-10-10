// Type definitions for react-hamburger-menu 0.0
// Project: https://github.com/cameronbourke/react-hamburger-menu
// Definitions by: Grzegorz Kielak <https://github.com/grzesie2k>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
    width?: number;
    /**
     * The height of the icon
     * @default 30
     */
    height?: number;
    /**
     * The stroke width of the lines
     * @default 2
     */
    strokeWidth?: number;
    /**
     * The rotation of the icon, eg {45} would be 45deg
     * @default 0
     */
    rotate?: number;
    /**
     * The border radius of the lines
     * @default 0
     */
    borderRadius?: number;
    /**
     * The color of both icons
     * @default #000
     */
    color: string;
    /**
     * The length of time it takes for the icon transitions to complete.
     * @default 0.4
     */
    animationDuration?: number;
    /**
     * Will be invoked when the component is clicked
     */
    menuClicked(): void;
}
