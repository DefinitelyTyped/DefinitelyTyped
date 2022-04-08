import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";
import { RadioButtonValue } from "../RadioButton";

export type RadioTileChangeEvent = React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLLabelElement>;

type ExcludedAttributes = "onChange" | "onKeyDown" | "type" | "value";

export interface RadioTileProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultChecked?: boolean,
    /**
     * @deprecated
     */
    iconDescription?: string,
    light?: boolean,
    onChange?(value: RadioTileProps["value"], name: RadioTileProps["name"], event: RadioTileChangeEvent): void,
    value: RadioButtonValue,
}

declare const RadioTile: React.FC<RadioTileProps>;

export default RadioTile;
