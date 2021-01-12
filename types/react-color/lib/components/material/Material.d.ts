import { Component, CSSProperties } from "react";
import { ColorPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface MaterialPickerStylesProps {
    material: CSSProperties;
    HEXwrap: CSSProperties;
    HEXinput: CSSProperties;
    HEXlabel: CSSProperties;
    Hex: CSSProperties;
    RGBwrap: CSSProperties;
    RGBinput: CSSProperties;
    RGBlabel: CSSProperties;
    split: CSSProperties;
    third: CSSProperties;
}

export interface MaterialPickerProps extends ColorPickerProps<MaterialPicker> {
    styles?: Partial<Classes<MaterialPickerStylesProps>>;
}

export default class MaterialPicker extends Component<MaterialPickerProps> { }
