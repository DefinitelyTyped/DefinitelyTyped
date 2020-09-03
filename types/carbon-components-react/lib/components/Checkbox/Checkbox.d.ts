import * as React from "react";
import { ReactInputAttr, RequiresIdProps } from "../../../typings/shared";

type ExcludedAttributes = "id" | "onChange" | "type";
interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    RequiresIdProps
{ }

export interface CheckboxProps extends InheritedProps {
    defaultChecked?: boolean,
    hideLabel?: boolean,
    indeterminate?: boolean,
    labelText: NonNullable<React.ReactNode>,
    onChange?(checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>): void,
    wrapperClassName?: string,
}

declare const Checkbox: React.RefForwardingComponent<HTMLInputElement, CheckboxProps>;

export default Checkbox;
