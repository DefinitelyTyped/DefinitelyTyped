import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactButtonAttr, "onClick"> { }

export interface SwitchProps extends InheritedProps {
    index?: number,
    onClick(event: React.MouseEvent<HTMLButtonElement>, index?: SwitchProps["index"]): void,
    selected?: boolean,
    text: string,
}

declare const Switch: React.RefForwardingComponent<HTMLButtonElement, SwitchProps>;

export default Switch;
