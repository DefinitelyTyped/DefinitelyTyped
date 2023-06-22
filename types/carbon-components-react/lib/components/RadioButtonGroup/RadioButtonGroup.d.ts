import * as React from 'react';
import { RadioButtonValue } from '../RadioButton';

export interface RadioButtonGroupProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    defaultSelected?: RadioButtonValue | undefined;
    disabled?: boolean | undefined;
    hideLegend?: boolean | undefined;
    labelPosition?: 'left' | 'right' | undefined;
    legendText?: React.ReactNode | undefined;
    name: string;
    onChange?(
        newSelection: RadioButtonValue,
        name: RadioButtonGroupProps['name'],
        event: React.ChangeEvent<HTMLInputElement>,
    ): void; // required but has default value
    orientation?: 'horizontal' | 'vertical' | undefined;
    valueSelected?: RadioButtonValue | undefined;
}

declare class RadioButtonGroup extends React.Component<RadioButtonGroupProps> {}

export default RadioButtonGroup;
