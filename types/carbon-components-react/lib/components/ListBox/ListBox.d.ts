import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { ListBoxFieldComponent } from "./ListBoxField";
import { ListBoxMenuComponent } from "./ListBoxMenu";
import { ListBoxMenuIconComponent } from "./ListBoxMenuIcon";
import { ListBoxMenuItemComponent } from "./ListBoxMenuItem";
import { ListBoxType } from "./ListBoxPropTypes";
import { ListBoxSelectionComponent } from "./ListBoxSelection";

type ExcludedAttributes = "onKeyDown" | "onKeyPress" | "ref" | "role" | "tabIndex";
interface InheritedProps extends Omit<ReactDivAttr, ExcludedAttributes> { }

export interface ListBoxProps extends InheritedProps {
    disabled?: boolean, // required but has default value
    innerRef?: React.Ref<HTMLDivElement>, // required but has default value
    type?: ListBoxType, // required but has default value
}

export interface ListBoxComponent extends React.FC<ListBoxProps> {
    readonly Field: ListBoxFieldComponent,
    readonly Menu: ListBoxMenuComponent,
    readonly MenuIcon: ListBoxMenuIconComponent,
    readonly MenuItem: ListBoxMenuItemComponent,
    readonly Selection: ListBoxSelectionComponent,
}

declare const ListBox: ListBoxComponent;

export default ListBox;
