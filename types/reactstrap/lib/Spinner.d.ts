import * as React from 'react';
import { CSSModule } from '../index';

export interface SpinnerProps extends React.HTMLProps<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    type?: string;
    size?: any;
    color?: string;
    className?: string;
    cssModule?: CSSModule;
}

declare class Spinner<T = {[key: string]: any}> extends React.Component<SpinnerProps> {}
export default Spinner;
