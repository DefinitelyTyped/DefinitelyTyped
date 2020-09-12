import * as React from "react";
import { EmbeddedIconProps, ReactInputAttr, ThemeProps } from "../../../typings/shared";
import { RadioButtonValue } from "../RadioButton";

type ExcludedAttributes = "onChange" | "type" | "value";
interface InheritedProps extends Omit<ReactInputAttr, ExcludedAttributes>, ThemeProps {
    /**
     * @deprecated
     */
    iconDescription?: EmbeddedIconProps["iconDescription"],
}

export type RadioTileChangeEvent = React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLLabelElement>;

export interface RadioTileProps extends InheritedProps {
    defaultChecked?: boolean,
    onChange?(value: RadioTileProps["value"], name: RadioTileProps["name"], event: RadioTileChangeEvent): void,
    value: RadioButtonValue,
}

declare const RadioTile: React.FC<RadioTileProps>;

export default RadioTile;
