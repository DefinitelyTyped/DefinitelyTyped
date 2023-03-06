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
export declare const Menu: React.FunctionComponent<MenuProps>;
export interface MenuProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {
    alignment?: MenuAlignments | undefined;
    iconsOnTop?: boolean | undefined;
    isExpanded?: boolean | undefined;
    isVertical?: boolean | undefined;
    isDropdown?: boolean | undefined;
    isSimple?: boolean | undefined;
    isNested?: boolean | undefined;
    horizontalOnMedium?: boolean | undefined;
}
/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MenuItem: React.FunctionComponent<MenuItemProps>;
export interface MenuItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
    isActive?: boolean | undefined;
}
/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export declare const MenuText: (props: MenuItemProps) => JSX.Element;
