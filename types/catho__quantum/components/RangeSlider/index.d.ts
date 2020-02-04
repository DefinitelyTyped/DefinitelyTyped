import React = require('react');

export interface RangeSliderProps {
    step?: number;
    max?: number;
    min?: number;
    disabled?: boolean;
    onChange?: () => void;
    onChangeCommitted?: () => void;
    marks?: Array<{
        value?: string | number;
        label?: string;
    }>;
    valueLabelDisplay?: 'auto' | 'on' | 'off';
    track?: 'normal' | false | 'inverted';
    'aria-labelledby'?: string;
    tipFormatter?: () => void;
    value?: number | { from: number; to: number };
    defaultValue?: number | { from: number; to: number };
    theme?: {
        spacing?: object;
        colors?: object;
        baseFontSize?: number;
    };
}

export default class RangeSlider extends React.Component<RangeSliderProps> {}
