import * as React from "react";
import { ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";
import { ListBoxFieldComponent } from "./ListBoxField";
import { ListBoxMenuComponent } from "./ListBoxMenu";
import { ListBoxMenuIconComponent } from "./ListBoxMenuIcon";
import { ListBoxMenuItemComponent } from "./ListBoxMenuItem";
import { ListBoxSize, ListBoxType } from "./ListBoxPropTypes";
import { ListBoxSelectionComponent } from "./ListBoxSelection";

type ExcludedAttributes = "onKeyDown" | "onKeyPress" | "ref";

export interface ListBoxProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    disabled?: boolean, // required but has default value
    invalid?: boolean,
    invalidText?: React.ReactNode,
    isOpen?: boolean,
    light?: boolean,
    size?: ListBoxSize,
    type?: ListBoxType, // required but has default value
    warn?: boolean,
    warnText?: React.ReactNode,
}

export interface ListBoxComponent extends ForwardRefReturn<HTMLDivElement, ListBoxProps> {
    readonly Field: ListBoxFieldComponent,
    readonly Menu: ListBoxMenuComponent,
    readonly MenuIcon: ListBoxMenuIconComponent,
    readonly MenuItem: ListBoxMenuItemComponent,
    readonly Selection: ListBoxSelectionComponent,
}

declare const ListBox: ListBoxComponent;

export default ListBox;
