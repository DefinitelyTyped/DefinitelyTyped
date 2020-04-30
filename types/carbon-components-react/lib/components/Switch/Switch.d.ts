import * as React from "react";
import { ReactButtonAttr, ForwardRefReturn } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactButtonAttr, "onClick" | "onKeyDown" | "name"> { }

export interface SwitchProps extends InheritedProps {
    index?: number,
    name?: string | number;
    onClick(data: { index: SwitchProps["index"], name: SwitchProps["name"], text: SwitchProps["text"] }): void,
    onKeyDown(data: {
        index: SwitchProps["index"],
        name: SwitchProps["name"],
        text: SwitchProps["text"],
        key: React.KeyboardEvent["key"] | React.KeyboardEvent["which"]
    }): void,
    selected?: boolean,
    text: string,
}

declare const Switch: ForwardRefReturn<HTMLButtonElement, SwitchProps>;

export default Switch;
