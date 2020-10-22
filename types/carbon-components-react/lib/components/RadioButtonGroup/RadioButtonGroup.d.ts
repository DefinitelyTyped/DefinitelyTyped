import * as React from "react";
import { ReactAttr, ReactInputAttr } from "../../../typings/shared";
import { RadioButtonValue } from "../RadioButton";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    disabled?: ReactInputAttr["disabled"],
    name: NonNullable<ReactInputAttr["name"]>,
}

export interface RadioButtonGroupProps extends InheritedProps {
    defaultSelected?: RadioButtonValue,
    labelPosition?: "left" | "right",
    onChange?(newSelection: RadioButtonValue, name: RadioButtonGroupProps["name"], event: React.ChangeEvent<HTMLInputElement>): void, // required but has default value
    orientation?: "horizontal" | "vertical",
    valueSelected?: RadioButtonValue,
}

declare class RadioButtonGroup extends React.Component<RadioButtonGroupProps> { }

export default RadioButtonGroup;
