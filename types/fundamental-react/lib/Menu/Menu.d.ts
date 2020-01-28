import * as React from "react";

export type MenuProps = {
    /* Set to **true** enables menu items with add-on before. */
    addonBefore?: boolean;
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export type MenuGroupProps = {
    title: string;
    className?: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    titleProps?: { [x: string]: any };
} & React.HTMLAttributes<HTMLDivElement>;

export type MenuItemProps = {
    /* Name of the SAP icon to be applied as an add-on before. */
    addon?: string;
    /* Additional props to be spread to the add-on section. */
    addonProps?: { [x: string]: any };
    className?: string;
    /* Set to **true** to style as a link. */
    isLink?: boolean;
    /* Set to **true** to add a horizontal line (separator). */
    separator?: boolean;
    /* Enables use of `<a>` element. Value to be applied to the anchor's `href` attribute. Should use either `link` or `url`, but not both. */
    url?: string;
    /* Additional props to be spread to the Menu Item links (when using `url`). */
    urlProps?: { [x: string]: any };
} & React.HTMLAttributes<HTMLLIElement>;

export type MenuListProps = {
    className?: string;
} & React.HTMLAttributes<HTMLUListElement>;

declare const Menu: React.FunctionComponent<MenuProps> & {
    displayName: "Menu";
    Group: React.FunctionComponent<MenuGroupProps> & {displayName: "Menu.Group"};
    Item: React.FunctionComponent<MenuItemProps> & {displayName: "Menu.Item"};
    List: React.FunctionComponent<MenuListProps> & {displayName: "Menu.List"};
};

export default Menu;
