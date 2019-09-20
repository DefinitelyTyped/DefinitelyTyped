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
    onChange?(newSelection: RadioButtonValue, name: RadioButtonGroupProps["name"], event: React.ChangeEvent<HTMLInputElement>): void, // required but has default value
    valueSelected?: RadioButtonValue,
}

declare class RadioButtonGroup extends React.Component<RadioButtonGroupProps> { }

export default RadioButtonGroup;
