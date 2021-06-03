import * as React from "react";
import { RadioButtonValue } from "../RadioButton";

export interface RadioButtonGroupProps {
    children?: React.ReactNode,
    className?: string,
    defaultSelected?: RadioButtonValue,
    disabled?: boolean,
    labelPosition?: "left" | "right",
    legendText?: React.ReactNode,
    name: string,
    onChange?(newSelection: RadioButtonValue, name: RadioButtonGroupProps["name"], event: React.ChangeEvent<HTMLInputElement>): void, // required but has default value
    orientation?: "horizontal" | "vertical",
    valueSelected?: RadioButtonValue,
}

declare class RadioButtonGroup extends React.Component<RadioButtonGroupProps> { }

export default RadioButtonGroup;
