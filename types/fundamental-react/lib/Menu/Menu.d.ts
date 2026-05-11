import * as React from "react";

export type MenuProps = {
    addonBefore?: boolean | undefined;
    className?: string | undefined;
    disableStyles?: boolean | undefined;
} & React.HTMLAttributes<HTMLElement>;

export type MenuGroupProps = {
    title: string;
    className?: string | undefined;
    headingLevel?: 2 | 3 | 4 | 5 | 6 | undefined;
    titleProps?: { [x: string]: any } | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

export type MenuItemProps = {
    active?: boolean | undefined;
    addonAfter?: string | undefined;
    addonBefore?: string | undefined;
    addonProps?: any;
    className?: string | undefined;
    disabled?: boolean | undefined;
    isLink?: boolean | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    selected?: boolean | undefined;
    separator?: boolean | undefined;
    url?: string | undefined;
    urlProps?: any;
} & React.HTMLAttributes<HTMLLIElement>;

export type MenuListProps = {
    addonBefore?: boolean | undefined;
    className?: string | undefined;
    separated?: boolean | undefined;
} & React.HTMLAttributes<HTMLUListElement>;

declare const Menu: React.FunctionComponent<MenuProps> & {
    displayName: "Menu";
    Group: React.FunctionComponent<MenuGroupProps> & { displayName: "Menu.Group" };
    Item: React.FunctionComponent<MenuItemProps> & { displayName: "Menu.Item" };
    List: React.FunctionComponent<MenuListProps> & { displayName: "Menu.List" };
};

export default Menu;
