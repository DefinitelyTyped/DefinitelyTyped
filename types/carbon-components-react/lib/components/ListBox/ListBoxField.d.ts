import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface ListBoxFieldProps extends Omit<ReactDivAttr, "id"> {
    id: string,
}

export interface ListBoxFieldComponent extends React.FC<ListBoxFieldProps> { }

declare const ListBoxField: ListBoxFieldComponent;

export default ListBoxField;
