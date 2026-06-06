import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { CustomPickerProps } from "../../..";

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

export interface MaterialPickerProps extends CustomPickerProps {
    styles?: Partial<Classes<MaterialPickerStylesProps>> | undefined;
}

export default class MaterialPicker extends Component<MaterialPickerProps> {}
