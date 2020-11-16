import * as React from "react";
import { ReactInputAttr, ForwardRefReturn } from "../../../typings/shared";

export type RadioButtonValue = string | number;

type ExcludedAttributes = "onChange" | "ref" | "type" | "value";

export interface RadioButtonProps extends Omit<ReactInputAttr, ExcludedAttributes>  {
    defaultChecked?: boolean,
    hideLabel?: boolean,
    /**
     * top/bottom are deprecated
     */
    labelPosition?: "bottom" | "left" | "right" | "top",
    labelText?: React.ReactNode, // required but has default value
    onChange?(value: RadioButtonProps["value"], name: RadioButtonProps["name"], event: React.ChangeEvent<HTMLInputElement>): void, // required but has default value
    value?: RadioButtonValue, // required but has default value
}

declare const RadioButton: ForwardRefReturn<HTMLInputElement, RadioButtonProps>;

export default RadioButton;
