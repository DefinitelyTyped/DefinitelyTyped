import { ComponentClass, StatelessComponent } from "react";
import { HSLColor, RGBColor, ColorChangeHandler } from "react-color";

export interface InjectedColorProps {
    hex?: string;
    hsl?: HSLColor;
    rgb?: RGBColor;
    onChange?: ColorChangeHandler;
}

export default function CustomPicker<A>(component: ComponentClass<A> | StatelessComponent<A>): ComponentClass<A & InjectedColorProps>;
