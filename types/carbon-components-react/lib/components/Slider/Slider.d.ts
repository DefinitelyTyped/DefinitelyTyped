import * as React from "react";
import { ReactDivAttr, ReactInputAttr } from "../../../typings/shared";

export interface SliderOnChangeArg {
    value: number;
}

export interface SliderProps extends Omit<ReactDivAttr, "onChange"> {
    ariaLabelInput?: string | undefined,
    disabled?: boolean | undefined;
    formatLabel?(value: SliderProps["value"], minOrMaxLabel: string): string,
    hideTextInput?: boolean | undefined,
    invalid?: boolean | undefined;
    inputType?: ReactInputAttr["type"] | undefined,
    labelText?: React.ReactNode | undefined,
    light?: boolean | undefined,
    max: number,
    maxLabel?: string | undefined,
    min: number,
    minLabel?: string | undefined,
    name?: string | undefined,
    onRelease?(data: { value: SliderProps["value"] }): void,
    step?: number | undefined,
    stepMultiplier?: number | undefined,
    value: number,
    onChange: (value: SliderOnChangeArg) => void
}

declare class Slider extends React.PureComponent<SliderProps> { }

export default Slider;
