import { Component } from "react";
import { ColorPickerProps } from "react-color";

export type TwitterPickerProps = ColorPickerProps<TwitterPicker>;

export default class TwitterPicker extends Component<TwitterPickerProps> {}
