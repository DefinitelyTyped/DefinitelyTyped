import * as React from 'react';
import { CSSModule } from '../index';

export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    type?: string;
    size?: any;
    color?: string;
    cssModule?: CSSModule;
}

declare class Spinner<T = {[key: string]: any}> extends React.Component<SpinnerProps> {}
export default Spinner;
