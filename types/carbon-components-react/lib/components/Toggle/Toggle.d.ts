import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-labelledby" | "id" | "onChange" | "onKeyUp" | "size" | "type";

export interface ToggleProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultToggled?: boolean,
    id: string,
    labelA?: string, // required but has default value
    labelB?: string, // required but has default value
    labelText?: string,
    onChange?(event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void,
    onToggle?(checked: boolean, id: ToggleProps["id"], event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void,
    size?: "sm" | "md",
    toggled?: boolean,
}

declare class Toggle extends React.Component<ToggleProps> { }

export default Toggle;
