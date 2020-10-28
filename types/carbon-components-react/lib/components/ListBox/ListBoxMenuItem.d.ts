import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface ListBoxMenuItemProps extends ReactDivAttr {
    isActive?: boolean, // required but has default value
    isHighlighted?: boolean, // required but has default value
}

export interface ListBoxMenuItemComponent extends React.FC<ListBoxMenuItemProps> { }

declare const ListBoxMenuItem: ListBoxMenuItemComponent;

export default ListBoxMenuItem;
