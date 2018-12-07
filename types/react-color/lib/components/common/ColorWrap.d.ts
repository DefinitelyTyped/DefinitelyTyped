import { ComponentClass, StatelessComponent } from "react";
import { HSLColor, RGBColor, ColorChangeHandler, Color, ColorResult } from "../../..";

export type ColorWrapChangeHandler = (color: Color | ColorResult) => void;

export interface InjectedColorProps {
    hex?: string;
    hsl?: HSLColor;
    rgb?: RGBColor;
    onChange?: ColorWrapChangeHandler;
}

export interface ExportedColorProps {
    color?: Color;
    onChange?: ColorChangeHandler;
    onChangeComplete?: ColorChangeHandler;
}

export default function CustomPicker<A>(component: ComponentClass<A & InjectedColorProps> | StatelessComponent<A & InjectedColorProps>): ComponentClass<A & ExportedColorProps>;
