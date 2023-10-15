import * as React from "react";
import { ForwardRefReturn, ReactDivAttr } from "../../../typings/shared";
import { ListBoxFieldComponent } from "./ListBoxField";
import { ListBoxMenuComponent } from "./ListBoxMenu";
import { ListBoxMenuIconComponent } from "./ListBoxMenuIcon";
import { ListBoxMenuItemComponent } from "./ListBoxMenuItem";
import { ListBoxSize, ListBoxType } from "./ListBoxPropTypes";
import { ListBoxSelectionComponent } from "./ListBoxSelection";

type ExcludedAttributes = "onKeyDown" | "onKeyPress" | "ref";

export interface ListBoxProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    disabled?: boolean | undefined; // required but has default value
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    isOpen?: boolean | undefined;
    light?: boolean | undefined;
    size?: ListBoxSize | undefined;
    type?: ListBoxType | undefined; // required but has default value
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined;
}

export interface ListBoxComponent extends ForwardRefReturn<HTMLDivElement, ListBoxProps> {
    readonly Field: ListBoxFieldComponent;
    readonly Menu: ListBoxMenuComponent;
    readonly MenuIcon: ListBoxMenuIconComponent;
    readonly MenuItem: ListBoxMenuItemComponent;
    readonly Selection: ListBoxSelectionComponent;
}

declare const ListBox: ListBoxComponent;

export default ListBox;
