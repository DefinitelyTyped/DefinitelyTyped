import { ComponentType } from "react";
import { Classes } from "reactcss";
import { Color, ColorChangeHandler, ColorState, HSLColor, HSVColor, RGBColor } from "../../..";

type SetDifference<A, B> = A extends B ? never : A;

type Diff<T, U> = Pick<T, SetDifference<keyof T, keyof U>>;

export type OnChangeHandler = (colorState: ColorState) => void;

export interface CustomPickerInjectedProps<T = HSLColor | HSVColor | RGBColor> extends Partial<ColorState> {
    onChange: ColorChangeHandler<T>;
}

export interface CustomPickerProps {
    color?: Color | undefined;
    className?: string | undefined;
    styles?: Partial<Classes<any>> | undefined;
    onChange?: OnChangeHandler | undefined;
    onChangeComplete?: OnChangeHandler | undefined; // e: ColorState
}

export default function CustomPicker<A>(
    component: ComponentType<A & CustomPickerInjectedProps>,
): ComponentType<Diff<A, CustomPickerProps> & CustomPickerProps>;

export {};
