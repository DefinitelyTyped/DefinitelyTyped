import * as React from 'react';
import { CSSModule } from '../index';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ButtonToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'defaultValue'> {
    [key: string]: any;
    onClick?: React.MouseEventHandler<any>;
    onBlur?: React.FocusEventHandler<any>;
    onFocus?: React.FocusEventHandler<any>;
    defaultValue?: boolean;
}

declare class ButtonToggle<T = {[key: string]: any}> extends React.Component<ButtonToggleProps> {}
export default ButtonToggle;
