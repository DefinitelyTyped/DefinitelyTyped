import * as React from "react";

export type MenuProps = {
    addonBefore?: boolean;
    className?: string;
    disableStyles?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export type MenuGroupProps = {
    title: string;
    className?: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    titleProps?: { [x: string]: any };
} & React.HTMLAttributes<HTMLDivElement>;

export type MenuItemProps = {
    addon?: string;
    addonBefore?: string;
    addonProps?: any;
    className?: string;
    isLink?: boolean;
    onclick?: (...args: any[]) => any;
    url?: string;
    urlProps?: any;
} & React.HTMLAttributes<HTMLLIElement>;

export type MenuListProps = {
    addonBefore?: boolean;
    className?: string;
    separated?: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

declare const Menu: React.FunctionComponent<MenuProps> & {
    displayName: "Menu";
    Group: React.FunctionComponent<MenuGroupProps> & {displayName: "Menu.Group"};
    Item: React.FunctionComponent<MenuItemProps> & {displayName: "Menu.Item"};
    List: React.FunctionComponent<MenuListProps> & {displayName: "Menu.List"};
};

export default Menu;
