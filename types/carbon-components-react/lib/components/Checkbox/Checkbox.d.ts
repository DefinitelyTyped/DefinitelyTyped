import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "id" | "onChange" | "type";

// variant when "enable-2021-release" feature flag is enabled
export type CheckboxOnChangeDataVariant = (evt: React.ChangeEvent<HTMLInputElement>, data: { checked: boolean, id: string }) => void;
export type CheckboxOnChangeDefaultVariant = (checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => void;

export interface CheckboxProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultChecked?: boolean,
    hideLabel?: boolean,
    id: string,
    indeterminate?: boolean,
    labelText: NonNullable<React.ReactNode>,
    onChange?: CheckboxOnChangeDataVariant | CheckboxOnChangeDefaultVariant;
    wrapperClassName?: string,
}

declare const Checkbox: React.RefForwardingComponent<HTMLInputElement, CheckboxProps>;

export default Checkbox;
