import * as React from "react";
import { ReactButtonAttr, ForwardRefReturn } from "../../../typings/shared";

export interface SwitchOnKeyDownData {
    index: SwitchProps["index"],
    key: React.KeyboardEvent["key"] | React.KeyboardEvent["which"]
    name: SwitchProps["name"],
    text: SwitchProps["text"],
}

export interface SwitchProps extends Omit<ReactButtonAttr, "onClick" | "onKeyDown" | "name"> {
    index?: number | undefined,
    name?: string | number | undefined;
    onClick?(data: { index: SwitchProps["index"], name: SwitchProps["name"], text: SwitchProps["text"] }): void, // required but has default value
    onKeyDown?(data: SwitchOnKeyDownData): void, // required but had default value
    selected?: boolean | undefined,
    text?: string | undefined,
}

declare const Switch: ForwardRefReturn<HTMLButtonElement, SwitchProps>;

export default Switch;
