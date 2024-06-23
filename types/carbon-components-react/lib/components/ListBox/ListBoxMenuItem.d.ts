import * as React from "react";
import { ForwardRefReturn, ReactDivAttr } from "../../../typings/shared";

export interface ListBoxMenuItemProps extends ReactDivAttr {
    isActive?: boolean | undefined; // required but has default value
    isHighlighted?: boolean | undefined; // required but has default value
}

export interface ListBoxMenuItemForwardedRef {
    menuItemOptionRef?: React.Ref<HTMLDivElement> | undefined;
}

export interface ListBoxMenuItemComponent extends ForwardRefReturn<ListBoxMenuItemForwardedRef, ListBoxMenuItemProps> {}

declare const ListBoxMenuItem: ListBoxMenuItemComponent;

export default ListBoxMenuItem;
