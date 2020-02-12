import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "onChange" | "ref" | "type";
interface InheritedProps extends Omit<ReactInputAttr, ExcludedAttributes> { }

export type RadioButtonValue = string | number;

export interface RadioButtonProps extends InheritedProps {
    defaultChecked?: boolean,
    hideLabel?: boolean,
    labelPosition?: string,
    labelText?: React.ReactNode, // required but has default value
    onChange?(value: RadioButtonProps["value"], name: RadioButtonProps["name"], event: React.ChangeEvent<HTMLInputElement>): void, // required but has default value
    value?: RadioButtonValue, // required but has default value
}

declare const RadioButton: React.RefForwardingComponent<HTMLInputElement, RadioButtonProps>;

export default RadioButton;
