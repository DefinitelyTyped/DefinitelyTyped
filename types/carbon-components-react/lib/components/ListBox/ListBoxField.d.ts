import * as React from "react";
import { InternationalProps, ReactDivAttr, RequiresIdProps } from "../../../typings/shared";

export type ListBoxFieldTranslationKey = "close.menu" | "open.menu";
interface InheritedProps extends
    Omit<ReactDivAttr, "id">,
    InternationalProps<ListBoxFieldTranslationKey>,
    RequiresIdProps
{ }

export interface ListBoxFieldProps extends InheritedProps { }

export interface ListBoxFieldComponent extends React.FC<ListBoxFieldProps> { }

declare const ListBoxField: ListBoxFieldComponent;

export default ListBoxField;
