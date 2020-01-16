import * as React from "react";
import { ReactDivAttr, ReactInputAttr, ThemeProps } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr, ThemeProps {
    name?: ReactInputAttr["name"],
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
}

declare class Slider extends React.PureComponent<SliderProps> { }

export default Slider;
