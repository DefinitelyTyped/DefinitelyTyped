import * as React from "react";
import { ReactInputAttr, RequiresIdProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-labelledby" | "id" | "onChange" | "onKeyUp" | "type";
interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    RequiresIdProps
{ }

export interface ToggleProps extends InheritedProps {
    defaultToggled?: boolean,
    labelA?: string, // required but has default value
    labelB?: string, // required but has default value
    labelText?: string,
    onChange?(event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void,
    onToggle?(checked: boolean, id: ToggleProps["id"], event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void,
    toggled?: boolean,
}

declare class Toggle extends React.Component<ToggleProps> { }

export default Toggle;
