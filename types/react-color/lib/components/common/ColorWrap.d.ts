import { ComponentClass, FunctionComponent } from "react";
import { HSLColor, RGBColor, ColorChangeHandler, Color, ColorResult } from "../../..";

export type ColorWrapChangeHandler = (color: Color | ColorResult) => void;

export interface InjectedColorProps {
    hex?: string | undefined;
    hsl?: HSLColor | undefined;
    rgb?: RGBColor | undefined;
    onChange?: ColorWrapChangeHandler | undefined;
}

export interface ExportedColorProps {
    color?: Color | undefined;
    onChange?: ColorChangeHandler | undefined;
    onChangeComplete?: ColorChangeHandler | undefined;
}

export default function CustomPicker<A>(component: ComponentClass<A & InjectedColorProps> | FunctionComponent<A & InjectedColorProps>): ComponentClass<A & ExportedColorProps>;
