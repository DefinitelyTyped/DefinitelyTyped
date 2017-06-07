import { Component } from "react";
import { Color, CustomPickerProps, HSLColor, HSVColor } from "react-color";

export interface SaturationProps extends CustomPickerProps<Saturation> {
  hsl: HSLColor;
  hsv: HSVColor;
}

export default class Saturation extends Component<SaturationProps, any> {}
