import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ButtonToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'defaultValue'> {
    [key: string]: any;
    defaultValue?: boolean;
}

declare class ButtonToggle<T = {[key: string]: any}> extends React.Component<ButtonToggleProps> {}
export default ButtonToggle;
