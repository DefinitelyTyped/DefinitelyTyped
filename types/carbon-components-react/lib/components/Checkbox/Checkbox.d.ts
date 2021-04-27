import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "id" | "onChange" | "type";

export interface CheckboxProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultChecked?: boolean,
    hideLabel?: boolean,
    id: string,
    indeterminate?: boolean,
    labelText: NonNullable<React.ReactNode>,
    onChange?:
        | ((evt: React.ChangeEvent<HTMLInputElement>, data: { checked: boolean, id: string }) => void) // variant when "enable-2021-release" feature flag is enabled
        | ((checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => void);
    wrapperClassName?: string,
}

declare const Checkbox: React.RefForwardingComponent<HTMLInputElement, CheckboxProps>;

export default Checkbox;
