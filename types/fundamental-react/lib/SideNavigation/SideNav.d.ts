import * as React from "react";

export type SideNavProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Set to **true** to only render icons for each `SideNavListItem`. */
    icons?: boolean;
    /* The `id` of the selected `SideNavListItem`. */
    selectedId?: string;
    /* Callback function when a navigation item is selected. Arguments passed are the event and the id of the selected item. */
    onItemSelect?: (e: any, id: any) => void;
} & { [x: string]: any };

export type SideNavListProps = {
    className?: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    title?: string;
    titleProps?: { [x: string]: any };
} & { [x: string]: any };

export type SideNavListItemProps = {
    /* Set to **true** to have this item initially render as expanded and its children items shown. */
    expanded?: boolean;
    glyph?: string;
    id?: string;
    /* Localized text for the item (when `url` is provided). */
    name?: string;
    /* Enables use of `<a>` element. Value to be applied to the anchor\'s `href` attribute. */
    url?: string;
    onClick?: (e: React.MouseEvent) => void;
} & { [x: string]: any };

declare class SideNav extends React.Component<SideNavProps> {
    static displayName: "SideNav";
    static List: React.ComponentClass<SideNavListProps> & {displayName: "SideNav.List"};
    static ListItem: React.ComponentClass<SideNavListItemProps> & {displayName: "SideNav.ListItem"};
}

export default SideNav;
