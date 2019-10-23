import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface ListBoxMenuItemProps extends InheritedProps {
    isActive?: boolean, // required but has default value
    isHighlighted?: boolean, // required but has default value
}

export interface ListBoxMenuItemComponent extends React.FC<ListBoxMenuItemProps> { }

declare const ListBoxMenuItem: ListBoxMenuItemComponent;

export default ListBoxMenuItem;
