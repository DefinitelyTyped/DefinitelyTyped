import {
    ChangeEvent,
    CSSProperties,
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    HTMLAttributes,
    MouseEvent,
    PropsWithoutRef,
    ReactNode,
    RefAttributes,
    RefObject,
} from "react";

export interface RangeSliderProps {
    value?: number | undefined;
    onChange?: ((event: ChangeEvent<HTMLInputElement>, value: number) => void) | undefined;
    onAfterChange?: ((event: MouseEvent<HTMLInputElement>, value: number) => void) | undefined;
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
    disabled?: boolean | undefined;
    size?: "sm" | "lg" | undefined;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined;
    inputProps?: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined;
    tooltip?: "auto" | "on" | "off" | undefined;
    tooltipPlacement?: "top" | "bottom" | undefined;
    tooltipLabel?: ((value: number) => ReactNode) | undefined;
    tooltipStyle?: CSSProperties | undefined;
    tooltipProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | undefined;
    className?: string | undefined;
    ref?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined;
    bsPrefix?: string | undefined;
}

export const RangeSlider: ForwardRefExoticComponent<
    PropsWithoutRef<RangeSliderProps> & RefAttributes<HTMLInputElement>
>;

export default RangeSlider;
