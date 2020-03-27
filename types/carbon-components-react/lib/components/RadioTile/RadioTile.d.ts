import * as React from "react";
import { EmbeddedIconProps, ReactInputAttr } from "../../../typings/shared";
import { RadioButtonValue } from "../RadioButton";

type ExcludedAttributes = "onChange" | "type" | "value";
interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    EmbeddedIconProps
{ }

export type RadioTileChangeEvent = React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLLabelElement>;

export interface RadioTileProps extends InheritedProps {
    defaultChecked?: boolean,
    onChange?(value: RadioTileProps["value"], name: RadioTileProps["name"], event: RadioTileChangeEvent): void,
    value: RadioButtonValue,
}

declare class RadioTile extends React.Component<RadioTileProps> { }

export default RadioTile;
