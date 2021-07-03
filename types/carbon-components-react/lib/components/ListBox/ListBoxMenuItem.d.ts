import * as React from "react";
import { ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

export interface ListBoxMenuItemProps extends ReactDivAttr {
    isActive?: boolean, // required but has default value
    isHighlighted?: boolean, // required but has default value
}

export interface ListBoxMenuItemForwardedRef {
    menuItemOptionRef?: React.Ref<HTMLDivElement>;
}

export interface ListBoxMenuItemComponent extends ForwardRefReturn<ListBoxMenuItemForwardedRef, ListBoxMenuItemProps> { }

declare const ListBoxMenuItem: ListBoxMenuItemComponent;

export default ListBoxMenuItem;
