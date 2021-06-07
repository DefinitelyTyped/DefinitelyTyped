import * as React from "react";
import { ReactDivAttr, ReactInputAttr } from "../../../typings/shared";

export interface SliderOnChangeArg {
    value: number;
}

export interface SliderProps extends Omit<ReactDivAttr, "onChange"> {
    ariaLabelInput?: string,
    formatLabel?(value: SliderProps["value"], minOrMaxLabel: string): string,
    hideTextInput?: boolean,
    inputType?: ReactInputAttr["type"],
    labelText?: React.ReactNode,
    light?: boolean,
    max: number,
    maxLabel?: string,
    min: number,
    minLabel?: string,
    name?: string,
    onRelease?(data: { value: SliderProps["value"] }): void,
    step?: number,
    stepMultiplier?: number,
    value: number,
    onChange: (value: SliderOnChangeArg) => void
}

declare class Slider extends React.PureComponent<SliderProps> { }

export default Slider;
