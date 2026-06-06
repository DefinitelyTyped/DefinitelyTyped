import * as React from "react";
import { IconGlyph } from "../Icon/Icon";

export type SideNavProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    condensed?: boolean | undefined;
    disableStyles?: boolean | undefined;
    selectedId?: string | undefined;
    skipLink?: { href: string; label: string } | undefined;
    onItemSelect?: ((e: any, id: any) => void) | undefined;
} & React.HTMLAttributes<Element>;

export type SideNavListProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    condensed?: boolean | undefined;
    groupLabel?: string | undefined;
    hasParent?: boolean | undefined;
    isUtility?: boolean | undefined;
    level?: number | undefined;
    open?: boolean | undefined;
    selectedId?: string | undefined;
    title?: string | undefined;
    titleProps?: any;
    onItemSelect?: ((...args: any[]) => any) | undefined;
} & React.HTMLAttributes<Element>;

export type SideNavListItemProps = {
    condensed?: boolean | undefined;
    expanded?: boolean | undefined;
    expandSubmenuLabel?: string | undefined;
    glyph?: IconGlyph | undefined;
    id?: string | undefined;
    isSubItem?: boolean | undefined;
    name?: React.ReactNode | undefined;
    selected?: boolean | undefined;
    selectedId?: string | undefined;
    url?: string | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onItemSelect?: ((...args: any[]) => any) | undefined;
} & React.HTMLAttributes<Element>;

declare class SideNav extends React.Component<SideNavProps> {
    static displayName: "SideNav";
    static List: React.ComponentClass<SideNavListProps> & { displayName: "SideNav.List" };
    static ListItem: React.ComponentClass<SideNavListItemProps> & { displayName: "SideNav.ListItem" };
}

export default SideNav;
