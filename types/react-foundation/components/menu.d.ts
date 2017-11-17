/// <reference types="react" />
import * as React from 'react';
import { MenuAlignments } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Menu component.
 * http://foundation.zurb.com/sites/docs/menu.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Menu: React.StatelessComponent<MenuProps>;
export interface MenuProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {
    alignment?: MenuAlignments;
    iconsOnTop?: boolean;
    isExpanded?: boolean;
    isVertical?: boolean;
    isDropdown?: boolean;
    isSimple?: boolean;
    isNested?: boolean;
    horizontalOnMedium?: boolean;
}
/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MenuItem: React.StatelessComponent<MenuItemProps>;
export interface MenuItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
    isActive?: boolean;
}
/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export declare const MenuText: (props: MenuItemProps) => JSX.Element;
