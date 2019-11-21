import * as React from "react";
import { ReactDivAttr, RequiresIdProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactDivAttr, "id">,
    RequiresIdProps
{ }

export interface ListBoxMenuProps extends InheritedProps { }

export interface ListBoxMenuComponent extends React.FC<ListBoxMenuProps> { }

declare const ListBoxMenu: ListBoxMenuComponent;

export default ListBoxMenu;
