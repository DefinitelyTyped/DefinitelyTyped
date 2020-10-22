import * as React from "react";
import { ReactDivAttr, RequiresIdProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactDivAttr, "id">,
    RequiresIdProps
{ }

export interface ListBoxFieldProps extends InheritedProps { }

export interface ListBoxFieldComponent extends React.FC<ListBoxFieldProps> { }

declare const ListBoxField: ListBoxFieldComponent;

export default ListBoxField;
