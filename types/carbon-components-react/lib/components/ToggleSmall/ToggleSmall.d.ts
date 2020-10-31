import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-label" | "id" | "onChange" | "onKeyUp" | "ref" | "type";

export interface ToggleSmallProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    "aria-label": string,
    defaultToggled?: boolean,
    id: string,
    labelA?: string, // required but has default value
    labelB?: string, // required but has default value
    labelText?: string,
    onChange?(e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>): void, // this looks to be required because the built-in onKeyUp handler calls it unguarded
    onToggle?(checked: boolean, id: ToggleSmallProps["id"], event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void,
    toggled?: boolean,
}

declare const ToggleSmall: React.FC<ToggleSmallProps>;

export default ToggleSmall;
