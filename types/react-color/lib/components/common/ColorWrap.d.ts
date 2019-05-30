import { ComponentType } from "react";
import { Color, ColorState, ColorChangeHandler } from "../../..";

type SetDifference<A, B> = A extends B ? never : A;

type Diff<T, U> = Pick<T, SetDifference<keyof T, keyof U>>;

export type OnChangeHandler = (colorState: ColorState) => void;

export interface CustomPickerInjectedProps extends Partial<ColorState> {
    onChange: ColorChangeHandler;
}

export interface CustomPickerProps {
    color?: Color;
    onChange?: OnChangeHandler;
    onChangeComplete?: OnChangeHandler;
}

export default function CustomPicker<A>(
    component: ComponentType<A & CustomPickerInjectedProps>
): ComponentType<Diff<A, CustomPickerProps> & CustomPickerProps>;

export {};
