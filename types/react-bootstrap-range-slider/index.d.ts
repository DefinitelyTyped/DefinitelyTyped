// Type definitions for react-bootstrap-range-slider 1.2
// Project: https://github.com/jaywilz/react-bootstrap-range-slider#readme
// Definitions by: Isaac Moore <https://github.com/rmsy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
} from 'react';

export interface RangeSliderProps {
    value?: number;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: number) => void;
    onAfterChange?: (event: MouseEvent<HTMLInputElement>, value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    size?: 'sm' | 'lg';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    inputProps?: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    tooltip?: 'auto' | 'on' | 'off';
    tooltipPlacement?: 'top' | 'bottom';
    tooltipLabel?: (value: number) => ReactNode;
    tooltipStyle?: CSSProperties;
    tooltipProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    className?: string;
    ref?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null;
    bsPrefix?: string;
}

export const RangeSlider: ForwardRefExoticComponent<
    PropsWithoutRef<RangeSliderProps> & RefAttributes<HTMLInputElement>
>;

export default RangeSlider;
