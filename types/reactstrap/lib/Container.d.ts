import * as React from 'react';
import { CSSModule } from '../index';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    fluid?: boolean | string;
    className?: string;
    cssModule?: CSSModule;
}

declare class Container<T = {[key: string]: any}> extends React.Component<ContainerProps> {}
export default Container;
