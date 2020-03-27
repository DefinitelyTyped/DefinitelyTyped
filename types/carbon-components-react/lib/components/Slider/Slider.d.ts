import * as React from "react";
import { ReactDivAttr, ReactInputAttr, ThemeProps } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactDivAttr, "onChange">, ThemeProps {
    name?: ReactInputAttr["name"],
}

export interface SliderOnChangeArg {
    value: number;
}

export interface SliderProps extends InheritedProps {
    ariaLabelInput?: string,
    formatLabel?(value: SliderProps["value"], label: string): string,
    hideTextInput?: boolean,
    inputType?: ReactInputAttr["type"],
    labelText?: React.ReactNode,
    max: number,
    maxLabel?: string,
    min: number,
    minLabel?: string,
    onRelease?(data: { value: SliderProps["value"] }): void,
    step?: number,
    stepMuliplier?: number, // typo exists in source
    value: number,
    onChange: (value: SliderOnChangeArg) => void
}

declare class Slider extends React.PureComponent<SliderProps> { }

export default Slider;
