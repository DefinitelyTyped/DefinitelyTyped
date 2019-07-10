import * as React from "react";

export type SideNavigationProps = {
    className?: string;
    /* Set to **true** to only render icons for each `SideNavListItem`. */
    icons?: boolean;
    /* The `id` of the selected `SideNavListItem`. */
    selectedId?: string;
    /* Callback function when a navigation item is selected. Arguments passed are the event and the id of the selected item. */
    onItemSelect?: (e: any, id: any) => void;
} & { [x: string]: any };

export type SideNavListProps = {
    className?: string;
    /* _INTERNAL USE ONLY._ */
    hasParent?: boolean;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    /* _INTERNAL USE ONLY._ */
    open?: boolean;
    /* _INTERNAL USE ONLY._ */
    selectedId?: string;
    title?: string;
    titleProps?: { [x: string]: any };
    /* _INTERNAL USE ONLY._ */
    onItemSelect?: (e: any, id: any) => void;
} & { [x: string]: any };

export type SideNavListItemProps = {
    /* Set to **true** to have this item initially render as expanded and its children items shown. */
    expanded?: boolean;
    glyph?: string;
    id?: string;
    /* _INTERNAL USE ONLY._ */
    isSubItem?: boolean;
    /* Localized text for the item (when `url` is provided). */
    name?: string;
    /* _INTERNAL USE ONLY._ */
    selected?: boolean;
    /* _INTERNAL USE ONLY._ */
    selectedId?: string;
    /* Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. */
    url?: string;
    onClick?: (e: React.MouseEvent) => void;
    /* _INTERNAL USE ONLY._ */
    onItemSelect?: (e: React.MouseEvent, id: any, hasChild: boolean) => void;
} & { [x: string]: any };

declare class SideNav extends React.Component<SideNavigationProps> {
    static List: React.ComponentClass<SideNavListProps>;
    static ListItem: React.ComponentClass<SideNavListItemProps>;
}

export default SideNav;
