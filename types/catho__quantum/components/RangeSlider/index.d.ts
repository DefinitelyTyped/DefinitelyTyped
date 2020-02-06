import React = require('react');

export interface RangeSliderProps<T> {
    step?: number;
    max?: number;
    min?: number;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<T>;
    onChangeCommitted?: React.ChangeEventHandler<T>;
    marks?: Array<{
        value?: string | number;
        label?: string;
    }>;
    valueLabelDisplay?: 'auto' | 'on' | 'off';
    track?: 'normal' | false | 'inverted';
    'aria-labelledby'?: string;
    tipFormatter?: (value?: number, index?: number) => string;
    value?: number | { from: number; to: number };
    defaultValue?: number | { from: number; to: number };
    theme?: {
        spacing?: object;
        colors?: object;
        baseFontSize?: number;
    };
}

export default class RangeSlider<T = HTMLInputElement> extends React.Component<RangeSliderProps<T>> {}
