import * as React from "react";
import { ReactInputAttr, RequiresIdProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-label" | "id" | "type";
interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    RequiresIdProps
{
    ["aria-label"]: NonNullable<React.AriaAttributes["aria-label"]>,
}

export interface ToggleSmallProps extends InheritedProps {
    defaultToggled?: boolean,
    labelA?: string, // required but has default value
    labelB?: string, // required but has default value
    labelText?: string,
    onToggle?(checked: boolean, id: ToggleSmallProps["id"], event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void,
    toggled?: boolean,
}

declare const ToggleSmall: React.FC<ToggleSmallProps>;

export default ToggleSmall;
