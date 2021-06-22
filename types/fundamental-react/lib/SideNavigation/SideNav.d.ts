import * as React from "react";
import { IconGlyph } from "../Icon/Icon";

export type SideNavProps = {
    className?: string;
    compact?: boolean;
    condensed?: boolean;
    disableStyles?: boolean;
    selectedId?: string;
    skipLink?: { href: string, label: string };
    onItemSelect?: (e: any, id: any) => void;
} & React.HTMLAttributes<Element>;

export type SideNavListProps = {
    className?: string;
    compact?: boolean;
    condensed?: boolean;
    groupLabel?: string;
    hasParent?: boolean;
    isUtility?: boolean;
    level?: number;
    open?: boolean;
    selectedId?: string;
    title?: string;
    titleProps?: any;
    onItemSelect?: (...args: any[]) => any;
} & React.HTMLAttributes<Element>;

export type SideNavListItemProps = {
    condensed?: boolean;
    expanded?: boolean;
    expandSubmenuLabel?: string;
    glyph?: IconGlyph;
    id?: string;
    isSubItem?: boolean;
    name?: string;
    selected?: boolean;
    selectedId?: string;
    url?: string;
    onClick?: (...args: any[]) => any;
    onItemSelect?: (...args: any[]) => any;
} & React.HTMLAttributes<Element>;

declare class SideNav extends React.Component<SideNavProps> {
    static displayName: "SideNav";
    static List: React.ComponentClass<SideNavListProps> & {displayName: "SideNav.List"};
    static ListItem: React.ComponentClass<SideNavListItemProps> & {displayName: "SideNav.ListItem"};
}

export default SideNav;
